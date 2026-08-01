import { useState, useEffect } from 'react'
import { SCOPES, setAccessToken, uploadImage, getLatestImages, getImageURL } from '../driveService.js'
import credsJson from '../creds.json'

let tokenClient

export default function DrivePage() {
  const [signedIn, setSignedIn] = useState(false)
  const [accessToken, setLocalAccessToken] = useState('')
  const [driveFiles, setDriveFiles] = useState([])
  const [status, setStatus] = useState('Enter your Google Drive credentials to begin.')

  useEffect(() => {
    const clientId = credsJson?.web?.client_id || ''
    if (!clientId) {
      setStatus('No client ID found in creds.json.')
      return
    }

    const loadGoogleScript = () =>
      new Promise((resolve, reject) => {
        if (window.google?.accounts?.oauth2) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = 'https://accounts.google.com/gsi/client'
        script.async = true
        script.defer = true
        script.onload = () => resolve()
        script.onerror = () => reject(new Error('Failed to load Google identity script'))
        document.head.appendChild(script)
      })

    loadGoogleScript()
      .then(() => {
        tokenClient = window.google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: `${SCOPES} https://www.googleapis.com/auth/drive.readonly`,
          callback: (response) => {
            if (response.error) {
              setStatus('Drive login failed.')
              return
            }
            setLocalAccessToken(response.access_token)
            setAccessToken(response.access_token)
            setSignedIn(true)
            setStatus('Logged in to Google Drive.')
          },
        })
      })
      .catch((error) => {
        console.error(error)
        setStatus('Unable to load Google login. Refresh and try again.')
      })
  }, [])

  const login = () => {
    if (!tokenClient) {
      setStatus('Google API client not initialized yet.')
      return
    }
    tokenClient.requestAccessToken()
  }

  const handleUpload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      await uploadImage(file)
      setStatus('Image uploaded successfully.')
      await loadLatest()
    } catch (error) {
      console.error(error)
      setStatus('Upload failed. Please login and try again.')
    }
  }

  const loadLatest = async () => {
    try {
      const files = await getLatestImages(20)
      setDriveFiles(files)
      setStatus(`Loaded ${files.length} images from Drive.`)
    } catch (error) {
      console.error(error)
      setStatus('Could not load images. Please login first.')
    }
  }

  const loadImage = async (fileId) => {
    try {
      const url = await getImageURL(fileId)
      return url
    } catch (error) {
      console.error(error)
      setStatus('Failed to retrieve image URL.')
    }
  }

  return (
    <div className="page page-drive">
      <div className="page-emoji">📁✨</div>
      <h1>Google Drive</h1>
      <p className="page-subtitle">Drive photo upload and retrieval</p>
      <p className="game-description">Use your stored credentials to login, upload an image, and show the latest Drive image list.</p>

      <div className="drive-card">
        <div className="drive-actions">
          <button type="button" className="drive-button" onClick={login}>
            Login to Drive
          </button>
          <button type="button" className="drive-button secondary" onClick={loadLatest} disabled={!accessToken}>
            Load latest images
          </button>
        </div>

        <p className="drive-status">{status}</p>

        <label className="file-input-label" style={{ marginTop: '18px' }}>
          Upload photo
          <input type="file" accept="image/*" onChange={handleUpload} />
        </label>

        <p className="drive-description">
          Folder ID is optional. If blank, the image is uploaded to your Drive root and the latest images are queried across your Drive.
        </p>

        <p className="drive-status">{status}</p>

        {driveFiles.length > 0 && (
          <div className="drive-file-list">
            <h3>Drive image files</h3>
            {driveFiles.map((file) => (
              <div key={file.id} className="drive-file-item">
                <span>{file.name}</span>
                <button
                  type="button"
                  className="drive-button secondary"
                  onClick={async () => {
                    const url = await loadImage(file.id)
                    if (url) {
                      window.open(url, '_blank')
                    }
                  }}
                >
                  Open
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

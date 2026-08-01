export const SCOPES = 'https://www.googleapis.com/auth/drive.readonly'

let accessToken = ''

export function setAccessToken(token) {
  accessToken = token
}

export function getAccessToken() {
  return accessToken
}

export async function uploadImage(file, folderId = '') {
  if (!accessToken) {
    throw new Error('Login first')
  }

  const metadata = {
    name: file.name,
  }

  if (folderId) {
    metadata.parents = [folderId]
  }

  const form = new FormData()
  form.append(
    'metadata',
    new Blob([JSON.stringify(metadata)], { type: 'application/json' })
  )
  form.append('file', file)

  const response = await fetch(
    'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
      body: form,
    }
  )

  return await response.json()
}

export async function getLatestImages(limit = 20, folderId = '') {
  if (!accessToken) {
    throw new Error('Login first')
  }

  let query = "mimeType contains 'image/' and trashed = false"
  if (folderId) {
    query += ` and '${folderId}' in parents`
  }

  const url =
    'https://www.googleapis.com/drive/v3/files?' +
    new URLSearchParams({
      q: query,
      orderBy: 'createdTime desc',
      pageSize: limit,
      fields: 'files(id,name,createdTime,webViewLink,thumbnailLink)',
    })

  const response = await fetch(url, {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  })

  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.error?.message || JSON.stringify(data))
  }
  return data.files || []
}

export async function getImageURL(fileId) {
  if (!accessToken) {
    throw new Error('Login first')
  }

  const response = await fetch(
    `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`,
    {
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
    }
  )

  const blob = await response.blob()
  return URL.createObjectURL(blob)
}

export async function deleteImage(fileId) {
  if (!accessToken) {
    throw new Error('Login first')
  }

  await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  })
}

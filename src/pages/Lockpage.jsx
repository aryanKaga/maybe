import { useState } from "react"

const SECRET_CODE = "SEJPAL"
const HINT_TEXT =
  "The password is the ANIME MOVIE we've watched together till now, the one your professor gave it and has its origin from Bihar told you about 🎬 write in capital letters please"

export default function LockPage({ onUnlock }) {
  const [input, setInput] = useState("")
  const [error, setError] = useState("")
  const [showHint, setShowHint] = useState(false)

  const handleVerify = (e) => {
    e.preventDefault()

    if (input.trim().toLowerCase() === SECRET_CODE.toLowerCase()) {
      onUnlock()
      return
    }

    setError("That's not it... try again 🥺")
    setInput("")
  }

  return (
    <div className="lock-page">
      <div className="lock-card">
        <div className="lock-emoji">🔐💌</div>

        <h1>Enter the code</h1>
        <p className="lock-subtitle">This little place is just for you.</p>

        <form className="lock-form" onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Secret code"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setError("")
            }}
            className="lock-input"
            autoFocus
          />

          {error && <p className="lock-error">{error}</p>}

          <button type="submit" className="lock-button">
            Unlock
          </button>

          <button
            type="button"
            className="lock-hint-toggle"
            onClick={() => setShowHint((prev) => !prev)}
          >
            {showHint ? "Hide hint" : "Need a hint?"}
          </button>

          {showHint && <p className="lock-hint">{HINT_TEXT}</p>}
        </form>
      </div>
    </div>
  )
}
import { useState, useEffect } from "react";

import { db } from "../firebase";

import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp
} from "firebase/firestore";


export default function PromisePage() {

  const initialMessage =
    "No matter how life changes, I will always keep choosing you. You are the love I want to hold close, the smile I want to protect, and the heart I want to adore forever.";

  const [draftFrom, setDraftFrom] = useState("Me");
  const [draftText, setDraftText] = useState(initialMessage);

  const [letters, setLetters] = useState([]);

  const [isPosting, setIsPosting] = useState(false);
  const [isLoadingLetters, setIsLoadingLetters] = useState(true);

  // Fetch letters when page loads
  useEffect(() => {
    fetchLetters();
  }, []);

  const fetchLetters = async () => {
    setIsLoadingLetters(true);
    try {
      const q = query(
        collection(db, "letters"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setLetters(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingLetters(false);
    }
  };

  const handlePost = async (event) => {
    event.preventDefault();

    if (isPosting) return;
    if (!draftText.trim()) return;

    setIsPosting(true);

    try {
      await addDoc(collection(db, "letters"), {
        from: draftFrom,
        message: draftText,
        createdAt: serverTimestamp()
      });

      alert("Letter uploaded ❤️");

      setDraftText("");

      fetchLetters();
    } catch (error) {
      console.log(error);
      alert("Upload failed: " + (error?.message || "please try again"));
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="page page-promise">
      <div className="page-emoji">💞🧸</div>

      <h1>Our small Letterbox</h1>

      <p className="page-subtitle">
        Write a cute note and post it to the little letterbox.
      </p>

      <p className="game-description">
        This little letterbox is for us — a quiet corner to send thoughts,
        apologies, silly notes or secret smiles. If ever you feel like stepping
        away from noisy feeds, this place will still be here waiting for you.
      </p>

      <div className="letterbox-grid">
        <div className="letterbox-panel">
          <div className="letterbox-header">
            <span className="letterbox-tab">To  my true-self</span>
            <h2>Send a letter</h2>
          </div>

          <form className="letterbox-form" onSubmit={handlePost}>
            <label className="letterbox-input-label">
              From:
              <input
                className="letterbox-input"
                value={draftFrom}
                onChange={(e) => setDraftFrom(e.target.value)}
                placeholder="Your name"
                aria-label="From"
              />
            </label>

            <textarea
              className="letterbox-textarea"
              value={draftText}
              onChange={(e) => setDraftText(e.target.value)}
              rows={6}
              placeholder="Write your letter here..."
              aria-label="Write your letter"
            />

            <button
              className="letterbox-button"
              type="submit"
              disabled={isPosting}
            >
              {isPosting ? "Posting..." : "Post"}
            </button>
          </form>
        </div>

        <div className="letterbox-panel letterbox-preview">
          <h2>Letters</h2>

          {isLoadingLetters && (
            <p className="letterbox-empty">Loading letters...</p>
          )}

          {!isLoadingLetters && letters.length === 0 && (
            <p className="letterbox-empty">No letters yet. Be the first! 🤍</p>
          )}

          {letters.map((letter) => (
            <div key={letter.id} className="letterbox-note">
              <p className="letterbox-sender">From: {letter.from}</p>

              <div className="message-box">
                <p>{letter.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
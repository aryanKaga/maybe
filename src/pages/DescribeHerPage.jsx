import { useRef } from 'react'
import waivyImage from '../assets/waivy.jpeg'
import babyHandsImage from '../assets/baby_hands.png'
import rabbitSmileImage from '../assets/reabbit_smile.png'
import eyesImage from '../assets/kaju.jpeg'
import sejMp3 from '../assets/sej.mp3'

export default function DescribeHerPage() {
  const audioRef = useRef(null)

  const playVoice = () => {
    audioRef.current?.play()
  }

  return (
    <div className="page page-describe">
      <div className="page-emoji">💖</div>
      <h1>How I would describe You</h1>
      <p className="page-subtitle">The kind of girl who makes the world feel softer</p>

      <div className="describe-scroll">
        <div className="describe-bars">
          <div className="describe-bar describe-bar-hair">
            <div className="describe-copy">
              <h3>Your Hair</h3>
              <div className="section-divider section-divider-hair">🌸────♡────🌸</div>
              <p>Most people admire beautiful hair. I admire what yours reminds me of.</p>
              <p>Every curl feels like a thought—playful, wandering, sometimes confusing, never following a straight path. Yet, somehow, every twist finds its place, just as your thoughts always carry their own quiet beauty.</p>
              <p>It holds the fragrance of innocence, with a hint of fiery stubbornness that appears whenever you're angry. And somehow, those two opposites coexist so perfectly that they could only belong to you.</p>
              <p>Your hair isn't just beautiful because of how it looks; it's beautiful because it feels like a reflection of your heart.</p>
            </div>
            <div className="describe-photo describe-photo-hair">
              <div className="photo-frame">
                <span className="frame-tape" aria-hidden={true} />
                <span className="flower-sticker" aria-hidden={true} />
                <img src={waivyImage} alt="Soft flowing hair" />
              </div>
            </div>
          </div>

          <div className="describe-bar describe-bar-hands">
            <div className="describe-copy">
              <h3>Your Hands</h3>
              <div className="section-divider section-divider-hands">🍃────✿────🍃</div>
              <p>Your hands deserve exactly what they give—gentleness. They don't ask for much, just a little love from the people who matter, a little care (maybe Vaseline and Johnson's Baby Lotion together would help 😤), and, of course, a vanilla ice cream to make everything better. 🤍🍦</p>
            </div>
            <div className="describe-photo describe-photo-hands">
              <div className="photo-frame">
                <span className="frame-tape" aria-hidden={true} />
                <span className="icecream-sticker" aria-hidden={true} />
                <img src={babyHandsImage} alt="Gentle hands in soft light" />
              </div>
            </div>
          </div>

          <div className="describe-bar describe-bar-smile">
            <div className="describe-copy">
              <h3>Your Smile</h3>
              <div className="section-divider section-divider-smile">🐰 · ✨ · 🐰</div>
              <p>People have all kinds of preferences—wide smiles, sharp smiles, or loud laughter. I never really had one either... until I saw yours. Not just any smile, but that little rabbit smile when you're genuinely happy.</p>
              <p>I spent an entire night searching for a name worthy of it, and I found one—Ivy. A rare flower, just like the smile of the one who carries it. 🤍</p>
            </div>
            <div className="describe-photo describe-photo-smile">
              <div className="photo-frame">
                <span className="frame-tape" aria-hidden={true} />
                <span className="rabbit-sticker" aria-hidden={true} />
                <img src={rabbitSmileImage} alt="Bright smiling face" />
              </div>
            </div>
          </div>

         

          <div className="describe-bar describe-bar-voice">
            <div className="describe-copy">
              <h3>Your Voice</h3>
              <div className="section-divider section-divider-voice">🎵────♡────🎵</div>
              <p className="voice-note">Soft, soothing and somehow, my favorite sound yet.I makes my mood blossom. I hear it and close my eyes..makes me feel like a cute innocent child describing about her cute family, what made her day today, little funny jokes she hears all around and sometimes when god is really rude he gives her miseries which makes me tremble along with her.</p>
            </div>
            <div className="describe-photo describe-photo-voice">
              <div className="voice-player-frame">
                <span className="frame-tape" aria-hidden={true} />
                <span className="music-sticker" aria-hidden={true} />
                <div className="cosmos-audio-card" onClick={playVoice}>
                  <div className="cosmos-image">
                    <div className="play-overlay">▶</div>
                  </div>
                  <div className="voice-caption">Tap 4 times continuously on the cosmos to play your voice note</div>
                </div>
                <audio ref={audioRef} src={sejMp3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

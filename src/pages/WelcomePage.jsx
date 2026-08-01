import kajuimage from '../assets/kaju.jpeg'

export default function WelcomePage() {
  return (
    <div className="page page-welcome">
      <div className="page-emoji">🌸✨</div>
      <h1>Welcome, my new badmoshi</h1>
      <p className="page-subtitle">A sweet little storybook just for you</p>

      <div className="decorative-flowers" aria-hidden="true">
        <img className="flower-flower" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f338.svg" alt="" />
        <img className="flower-flower flower-small" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f33b.svg" alt="" />
        <img className="flower-flower flower-smallest" src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/1f340.svg" alt="" />
      </div>

      <div className="welcome-card">
        <div className="polaroid">
          <div className="tape" aria-hidden={true} />
          <img src={kajuimage} alt="A cute smiling girl" />
          <div className="polaroid-caption">Welcomed by my little Kaaju 🐹💕</div>
          <div className="polaroid-stickers">
            <span className="sticker sticker-flower" />
            <span className="sticker sticker-heart" />
            <span className="sticker sticker-leaf" />
          </div>
        </div>

        <div className="text-panel">
          <h3>Hi, to the girl who always makes me short of compliments..makes my brain go haywire and always makes me skip a beat</h3>
          <p>This is my new badmoshi for you, and you are the cutest part of my heart.</p>
        </div>
      </div>
    </div>
  )
}

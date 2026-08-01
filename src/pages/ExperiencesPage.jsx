import beggingImage from '../assets/begging.png'

export default function ExperiencesPage() {
  return (
    <div className="page page-experience">
      <div className="page-emoji">•</div>
      <h1>My favorite experiences with her</h1>
      <p className="page-subtitle">Tiny moments that became beautiful memories</p>

      <div className="scrapbook-spread">
        <aside className="scrapbook-panel">
          <div className="scrapbook-panel-card">
            <span className="scrapbook-panel-tag">Memory Album</span>
            <h2 className="scrapbook-panel-title">My Pending Wishes</h2>
            <p className="scrapbook-panel-copy">These aren't promises you have to make—just little dreams I'd love to check off with you someday.</p>
            <div className="scrapbook-panel-image">
              <img src={beggingImage} alt="Scrapbook memory" />
            </div>
            <p className="scrapbook-panel-note">A warm, wide album layout so each memory feels like it's written on a page rather than squeezed into a box.</p>
          </div>
        </aside>

        <main className="scrapbook-main">
          <div className="pending-wishes">
            <div className="telegram-list">
              <div className="telegram-card">
                <div className="telegram-header"><span className="wish-number">01</span>Watch Three Romantic Anime Movies Together</div>
                <div className="telegram-body">
                  <ul>
                    <li><strong>I Want to Eat Your Pancreas</strong></li>
                    <li><strong>A Silent Voice</strong></li>
                    <li><strong>One movie of your choice</strong> (because I'm curious about what you'd pick.)</li>
                  </ul>
                </div>
              </div>

              <div className="telegram-card">
                <div className="telegram-header"><span className="wish-number">02</span>Finish One Web Series Together</div>
                <div className="telegram-body">
                  <p>I don't really mind which one.</p>
                  <ul>
                    <li>Any series you choose.</li>
                    <li>After all... beggars can't be choosers, and you've always been the boss. 🤍</li>
                  </ul>
                </div>
              </div>

              <div className="telegram-card">
                <div className="telegram-header"><span className="wish-number">03</span>Let Me Watch You Dance Once</div>
                <div className="telegram-body">
                  <p>I just want to see you completely carefree—laughing, smiling, and enjoying yourself.</p>
                  <p>And I promise I'll secretly learn by watching you, so if we ever meet, I'll dance like <strong>Hrithik Roshan in <em>Koi... Mil Gaya</em></strong>—awkwardly at first, but trying my best to make my girl proud.</p>
                </div>
              </div>

              <div className="telegram-card">
                <div className="telegram-header"><span className="wish-number">04</span>Delete My WhatsApp Stickers</div>
                <div className="telegram-body">
                  <p>Please.</p>
                  <p>I know you'll probably laugh after opening them...</p>
                  <p>...which is exactly why they need to disappear. 😭</p>
                </div>
              </div>

              <div className="telegram-card">
                <div className="telegram-header"><span className="wish-number">05</span>One Vanilla Ice Cream Date</div>
                <div className="telegram-body">
                  <p>No fancy cafés.</p>
                  <p>No expensive restaurants.</p>
                  <p>Just us, sharing a vanilla ice cream and talking until it melts.</p>
                </div>
              </div>

              <div className="telegram-card">
                <div className="telegram-header"><span className="wish-number">06</span>Take a Polaroid Together</div>
                <div className="telegram-body">
                  <p>One picture.</p>
                  <p>One memory.</p>
                  <p>One tiny moment that we'll keep forever.</p>
                  <p>This is one of my true wishes.</p>
                </div>
              </div>

              <div className="telegram-card playlist-card">
                <div className="telegram-header"><span className="wish-number">07</span>Share a Playlist</div>
                <div className="telegram-body">
                  <p>Make me a playlist that reminds you of me.</p>
                  <p>I'll make one that reminds me of you.</p>
                  <p>Also please keep these songs in the list:</p>
                  <ul>
                    <li><strong>Babli Badmash</strong></li>
                    <li><strong>Feet Don't Fail Me Now</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="begging-figure" aria-hidden="true">
        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g fill="none" stroke="#8b5a66" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="20" cy="12" r="6" fill="#fdeff4" stroke="#c78a9a" />
            <path d="M20 18c0 0 2 6 2 10 0 3-2 6-2 6" stroke="#8b5a66"/>
            <path d="M24 32s4-1 8 2c3 2 6 6 6 10v6" stroke="#8b5a66"/>
            <path d="M14 36s6-3 12 0" stroke="#8b5a66"/>
            <path d="M38 30s2-4 6-3" stroke="#8b5a66"/>
          </g>
          <g fill="#6f3f4a">
            <path d="M26 8c0 .9-.6 1.6-1.3 1.6S23.4 8.9 23.4 8 24 6.4 24.7 6.4 26 7.1 26 8z"/>
          </g>
        </svg>
      </div>
    </div>
  )
}

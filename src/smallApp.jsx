import { useState } from 'react'
import './App.css'
import LockPage from './pages/Lockpage.jsx'
import WelcomePage from './pages/WelcomePage.jsx'
import DescribeHerPage from './pages/DescribeHerPage.jsx'
import ExperiencesPage from './pages/ExperiencesPage.jsx'
import AlbumPage from './pages/AlbumPage.jsx'
import IceCreamPage from './pages/IceCreamPage.jsx'
import PromisePage from './pages/PromisePage.jsx'
import DrivePage from './pages/DrivePage.jsx'

const pages = [
  WelcomePage,
  DescribeHerPage,
  ExperiencesPage,
  IceCreamPage,
  PromisePage,

]

export default function SmallApp() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const PageComponent = pages[currentPage]

  const goNext = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length)
  }

  const goPrev = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length)
  }

  if (!isUnlocked) {
    return <LockPage onUnlock={() => setIsUnlocked(true)} />
  }

  return (
    <main className="note-shell">
      <section className="note-card">
        <div className="sticky-note">I never thought my little hamster was this smart... she actually cracked the secret code! 🐹🔐✨</div>
        <div className="page-badge">Page {currentPage + 1} of {pages.length}</div>
        <div className="teddy-row" aria-hidden="true">
          <span>🧸</span>
          <span>💗</span>
          <span>🧸</span>
        </div>

        <div className="page-frame">
          <PageComponent />
        </div>

        <div className="nav-row">
          <button type="button" onClick={goPrev} className="nav-btn">
            ← Wanna read it again? 🥰
          </button>
          <button type="button" onClick={goNext} className="nav-btn primary">
            {currentPage === pages.length - 1 ? 'Start Again' : 'Wanna read next lady? 💖 →'}
          </button>
        </div>

        <div className="dots" aria-label="Page progress">
          {pages.map((_, index) => (
            <span key={index} className={index === currentPage ? 'dot active' : 'dot'} />
          ))}
        </div>
      </section>
    </main>
  )
}
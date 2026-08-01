import { useState } from 'react'
import vanillaImage from '../assets/vanilla.png'
import mangoCupImage from '../assets/Mango Cup.png'
import chocBrownieImage from '../assets/chocolate brownie.png'
import doubleChocMiniStickImage from '../assets/Double Choc Mini Stick.png'
import mississippiMudImage from '../assets/Mississippi Mud Sundae Cup.png'
import mochaFudgeBrownieImage from '../assets/Mocha Fudge Brownie Cup.png'

export default function IceCreamPage() {
  const treats = [
    {
      name: 'Amul',
      flavor: 'Vanilla',
      emoji: '🍦',
      image: vanillaImage,
      activity: 'Shock me with some secret I never saw coming from you and send me a voice note of it.',
    },
    {
      name: 'Kwality Walls',
      flavor: 'Mango Cup',
      emoji: '🥭',
      image: mangoCupImage,
      activity: 'Have a night full of convo and games with one of your roommates.',
    },
    {
      name: 'Kwality Walls',
      flavor: 'Chocolate Brownie',
      emoji: '🍫',
      image: chocBrownieImage,
      activity: 'Suggest a gay bf to any of your male friend other than me and send his reaction try to pursue him for at least 5 minutes setting out the advantages of a gay boyfriend.',
    },
    {
      name: 'Kwality Walls',
      flavor: 'Double Choc Mini Stick',
      emoji: '🍫',
      image: doubleChocMiniStickImage,
      activity: 'Sing a 2 minute song to me and send me a voice note of a song I tell you.',
    },
    {
      name: 'Mother Dairy',
      flavor: 'Mocha Fudge Brownie Cup',
      emoji: '🌿',
      image: mochaFudgeBrownieImage,
      activity: 'Scold me continuously for 5 minutes in pure Haryanvi with complete anger and frustration. (I will record it and send it to you.) and you have to imagine yourself in all of the horrible situations you have been in.',
    },
    {
      name: 'Vadilal',
      flavor: 'Mississippi Mud Sundae Cup',
      emoji: '🍨',
      image: mississippiMudImage,
      activity: 'Anonymous (once you ask about this you have to do it).',
    },
  ]

  const [flipped, setFlipped] = useState(Array(treats.length).fill(false))

  const handleFlip = (index) => {
    setFlipped((prev) => prev.map((value, i) => (i === index ? !value : value)))
  }

  return (
    <div className="page page-icecream">
      <div className="page-emoji">🍨💗</div>
      <h1>ICE menu</h1>
      <p className="page-subtitle">A menu of tasty treats — choose one, complete the activity, and I’ll get it for you.</p>
      <p className="game-description">Each card is styled like a menu entry with the flavor front and center. Flip it to reveal the reward task and earn your treat.</p>

      <div className="icecream-grid">
        {treats.map((treat, index) => (
          <div
            key={treat.name}
            className={`icecream-card ${flipped[index] ? 'flipped' : ''}`}
            onClick={() => handleFlip(index)}
            onKeyDown={(event) => event.key === 'Enter' && handleFlip(index)}
            role="button"
            tabIndex={0}
          >
            <div className="icecream-card-inner">
              <div className="icecream-card-front">
                <img src={treat.image} alt={treat.flavor} />
                <div className="icecream-info">
                  <p className="icecream-menu-label">{treat.emoji}</p>
                  <h3>{treat.flavor}</h3>
                </div>
              </div>
              <div className="icecream-card-back">
                <div className="icecream-back-content">
                  <p className="icecream-brand-note">{treat.name}</p>
                  <h3>{treat.flavor}</h3>
                  <p>{treat.activity}</p>
                  <span className="icecream-back-label">Complete to unlock on Blinkit</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

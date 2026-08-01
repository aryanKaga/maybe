export default function AlbumPage() {
  return (
    <div className="page page-album">
      <div className="page-emoji">📷💌</div>
      <h1>Our little album</h1>
      <p className="page-subtitle">A memory page for all the sweet things we share</p>

      <div className="photo-grid">
        <div className="photo-card">
          <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80" alt="Couple sharing a candid moment" />
          <p>Our happy little moments</p>
        </div>
        <div className="photo-card">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80" alt="Cozy teddy and warm comfort" />
          <p>Soft hugs and teddy dreams</p>
        </div>
        <div className="photo-card">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80" alt="Joyful happy smile" />
          <p>Your beautiful smile</p>
        </div>
      </div>
    </div>
  )
}

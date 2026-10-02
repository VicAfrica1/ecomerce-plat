import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function HomePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#fdf6f0', minHeight: '100vh', color: '#1f2937' }}>
      {/* Header */}
      <header style={{ background: '#fff', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 3px rgba(0,0,0,.1)' }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#1a1a2e', letterSpacing: '-1px', fontStyle: 'italic' }}>MIGHTY STORE</div>
        <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
          <a href="#" style={{ textDecoration: 'none', color: '#1a1a2e' }}>Shop</a>
          <a href="#" style={{ textDecoration: 'none', color: '#1a1a2e' }}>Categories</a>
          <a href="#" style={{ textDecoration: 'none', color: '#1a1a2e' }}>Sale</a>
        </nav>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => navigate('/electronics')} style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer' }}>🔍</button>
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer' }}>🔔</button>
          <button onClick={() => navigate('/profile')} style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer' }}>❤️</button>
        </div>
      </header>

      {/* Settings icon top-left */}
      <div style={{ position: 'absolute', top: 70, left: 20, zIndex: 10 }}>
        <button onClick={() => setOpen(!open)} style={{ background: '#1a1a2e', color: '#fff', border: 'none', borderRadius: '50%', width: 36, height: 36, fontSize: 18, cursor: 'pointer' }} title="Settings">⚙</button>
        {open && (
          <div style={{ position: 'absolute', top: 40, left: 0, background: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, boxShadow: '0 4px 6px rgba(0,0,0,.1)', minWidth: 180, padding: '0.5rem 0' }}>
            {["Edit Profile", "Edit Theme", "Edit Password", "Edit Address", "Edit Phone Number", "Log out"].map((item) => (
              <button key={item} onClick={() => { setOpen(false); if (item === "Log out") handleLogout(); else navigate("/profile"); }} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.5rem 1rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.875rem', color: '#1f2937' }}>{item}</button>
            ))}
          </div>
        )}
      </div>

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '1rem 2rem' }}>
        {/* Hero Banner */}
        <section style={{ background: 'linear-gradient(to right, #1a1a2e, #4a5568)', color: '#fff', borderRadius: 16, padding: '3rem 2rem', display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: 24 }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: 12 }}>Upgrade Your Lifestyle Today</h2>
            <p style={{ opacity: 0.9, marginBottom: 20 }}>Discover curated fashion, accessories, and lifestyle products tailored for you.</p>
            <a href="#products" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: '#fff', color: '#1a1a2e', borderRadius: 999, textDecoration: 'none', fontWeight: 700 }}>Shop Now</a>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img src="/client-preview.png" alt="Client Preview" style={{ maxHeight: 320, borderRadius: 12, boxShadow: '0 20px 40px rgba(0,0,0,.2)' }} />
          </div>
        </section>

        {/* Browse By Category */}
        <section style={{ marginBottom: 32 }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 12 }}>Browse By Category</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '0.75rem' }}>
            {[
              { name: 'Fashion', icon: '👗' },
              { name: 'Electronics', icon: '📱', onClick: () => navigate('/electronics') },
              { name: 'Home', icon: '🏠' },
              { name: 'Beauty', icon: '✨' },
              { name: 'Sports', icon: '⚽' },
              { name: 'Toys', icon: '🧸' },
              { name: 'Books', icon: '📚' },
            ].map(c => (
              <a key={c.name} href="#" onClick={(e) => { if (c.onClick) { e.preventDefault(); c.onClick(); } }} style={{ background: '#fff', borderRadius: 12, padding: '1rem', textAlign: 'center', textDecoration: 'none', color: '#1f2937', boxShadow: '0 1px 3px rgba(0,0,0,.08)', fontWeight: 600, fontSize: '0.875rem', transition: 'transform .1s' }} onMouseEnter={e => e.currentTarget.style.transform='translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform='none'}>
                <div style={{ fontSize: '2rem', marginBottom: 4 }}>{c.icon}</div>
                {c.name}
              </a>
            ))}
          </div>
        </section>

        {/* Trending Right Now */}
        <section id="products" style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Trending Right Now</h3>
            <a href="#" style={{ fontSize: '0.875rem', color: '#2563eb', textDecoration: 'none' }}>See All →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[
              { name: 'Dior Sauvage EDP | D\'SCENTSATION', price: '$199', img: '/smartwatch-preview.png' },
              { name: 'Samsung Galaxy Z Fold8 Ultra 1TB Green Shadow Unlocked Korean SM-F976NDGVKOO', price: '$129', img: '/samsung-zfold-preview.png' },
              { name: 'Original Dr. Martens Premium Leather Double Sole Boots, Casual High Quality High Cut Unisex Shoes | Toppline Kenya', price: '$89', img: '/shoes-preview.png' },
              { name: 'NIB Men\'s Adidas F50 Messi 2026 Elite Firm Ground Soccer IH1892 Cleats Icey Blue', price: '$149', img: '/handbag-new-preview.png' },
            ].map(p => (
              <a key={p.name} href="#" style={{ background: '#fff', borderRadius: 12, padding: 12, textDecoration: 'none', color: '#1f2937', boxShadow: '0 1px 3px rgba(0,0,0,.08)' }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', borderRadius: 8, height: 160, objectFit: 'cover', marginBottom: 10 }} />
                <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{p.name}</h4>
                <span style={{ fontWeight: 600, color: '#1a1a2e' }}>{p.price}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Featured Banners */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: 32 }}>
          <a href="#" style={{ background: '#ffeaea', borderRadius: 12, padding: '1.5rem', textDecoration: 'none', color: '#1f2937' }}>
            <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: 4 }}>Up To 50% Off</h4>
            <p style={{ fontSize: '0.875rem', margin: 0 }}>On selected accessories</p>
          </a>
          <a href="#" style={{ background: '#e8f0fe', borderRadius: 12, padding: '1.5rem', textDecoration: 'none', color: '#1f2937' }}>
            <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: 4 }}>Fresh Finds</h4>
            <p style={{ fontSize: '0.875rem', margin: 0 }}>New arrivals this week</p>
          </a>
          <a href="#" style={{ background: '#fff0e8', borderRadius: 12, padding: '1.5rem', textDecoration: 'none', color: '#1f2937' }}>
            <h4 style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: 4 }}>Free Shipping</h4>
            <p style={{ fontSize: '0.875rem', margin: 0 }}>On orders over $50</p>
          </a>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #e5e7eb', padding: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#6b7280' }}>
          <span style={{ fontStyle: 'italic' }}>© 2025 MIGHTY STORE. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#6b7280' }}>About</a>
            <a href="#" style={{ textDecoration: 'none', color: '#6b7280' }}>Contact</a>
            <a href="#" style={{ textDecoration: 'none', color: '#6b7280' }}>Privacy</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

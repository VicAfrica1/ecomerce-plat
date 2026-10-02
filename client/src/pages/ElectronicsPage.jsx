import { useNavigate } from "react-router-dom";

export default function ElectronicsPage() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#fdf6f0', minHeight: '100vh', color: '#1f2937' }}>
      <header style={{ background: '#fff', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 3px rgba(0,0,0,.1)' }}>
        <button onClick={() => navigate("/")} style={{ background: 'none', border: 'none', fontWeight: 800, fontSize: '1.5rem', color: '#1a1a2e', letterSpacing: '-1px', fontStyle: 'italic', transform: 'skewX(-6deg)', cursor: 'pointer' }}>MIGHTY STORE</button>
        <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
          <a href="#" onClick={e => { e.preventDefault(); navigate("/"); }} style={{ textDecoration: 'none', color: '#1a1a2e' }}>Shop</a>
          <a href="#" onClick={e => { e.preventDefault(); navigate("/electronics"); }} style={{ textDecoration: 'none', color: '#1a1a2e' }}>Electronics</a>
          <a href="#" onClick={e => { e.preventDefault(); navigate("/"); }} style={{ textDecoration: 'none', color: '#1a1a2e' }}>Sale</a>
        </nav>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button onClick={() => navigate("/")} style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer' }}>🔍</button>
          <button onClick={() => navigate("/")} style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer' }}>🔔</button>
          <button onClick={() => navigate("/profile")} style={{ background: 'none', border: 'none', fontSize: '1.1rem', cursor: 'pointer' }}>❤️</button>
        </div>
      </header>

      <main style={{ maxWidth: 1200, margin: '2rem auto', padding: '0 2rem' }}>
        <h1 style={{ fontWeight: 800, fontSize: '2rem', marginBottom: 8 }}>Electronics</h1>
        <p style={{ color: '#6b7280', marginBottom: 20 }}>Browse our latest gadgets, phones, laptops, and smart devices.</p>

        <img src="/electronics-preview.png" alt="Electronics" style={{ width: '100%', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,.1)', cursor: 'pointer' }} onClick={() => navigate("/")} />

        {/* Interactive product cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginTop: 32 }}>
          {[
            { name: 'Dior Sauvage EDP', price: '$199', img: '/smartwatch-preview.png' },
            { name: 'Samsung Galaxy Z Fold8', price: '$129', img: '/samsung-zfold-preview.png' },
            { name: 'Doctor Martens Boot', price: '$89', img: '/shoes-preview.png' },
            { name: 'NIB Adidas F50 Messi', price: '$149', img: '/handbag-new-preview.png' },
          ].map(p => (
            <button key={p.name} onClick={() => navigate("/")} style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: 12, padding: 12, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', borderRadius: 8, height: 160, objectFit: 'cover', marginBottom: 10, pointerEvents: 'none' }} />
              <h4 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{p.name}</h4>
              <span style={{ fontWeight: 600, color: '#1a1a2e' }}>{p.price}</span>
            </button>
          ))}
        </div>

        <div style={{ marginTop: 32, display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => navigate("/")} style={{ padding: '.75rem 1.5rem', background: '#1a1a2e', color: '#fff', border: 'none', borderRadius: 999, cursor: 'pointer', fontWeight: 600 }}>Back to Home</button>
          <button onClick={() => navigate("/profile")} style={{ padding: '.75rem 1.5rem', background: '#fff', color: '#1a1a2e', border: '1px solid #1a1a2e', borderRadius: 999, cursor: 'pointer', fontWeight: 600 }}>My Profile</button>
        </div>
      </main>
    </div>
  );
}

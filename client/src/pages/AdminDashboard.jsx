import React, { useState } from 'react';

export default function AdminDashboard() {
  const [view, setView] = useState('dashboard');

  return (
    <div style={{ minHeight: '100vh', background: '#f3f4f6', fontFamily: 'system-ui, sans-serif', color: '#1f2937' }}>
      {/* Header */}
      <header style={{ background: 'linear-gradient(to right, #2563eb, #60a5fa)', color: '#fff', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 6px rgba(0,0,0,.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src="/cartiy-admin-preview.png" alt="Cartiy Logo" style={{ height: '40px' }} />
          <input type="text" placeholder="Search" style={{ padding: '0.5rem', borderRadius: '0.375rem', border: 'none', outline: 'none' }} />
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.25rem' }}>🌙</button>
            <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.25rem' }}>🔔</button>
            <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.25rem' }}>💬</button>
            <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.25rem' }}>🇺🇸</button>
            <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.25rem' }}>🔳</button>
            <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.25rem' }}>👤</button>
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem' }}>
        {/* Sidebar */}
        <aside style={{ width: '16rem', background: '#fff', borderRadius: '.75rem', padding: '1rem', boxShadow: '0 1px 3px rgba(0,0,0,.1)', height: 'fit-content' }}>
          <div style={{ fontWeight: 600, fontSize: '.875rem', marginBottom: '.75rem' }}>PERSONAL</div>
          <nav style={{ fontSize: '.875rem', display: 'flex', flexDirection: 'column', gap: '.25rem' }}>
            <a
              href="#"
              onClick={e => { e.preventDefault(); setView('dashboard'); }}
              style={{
                padding: '.5rem .75rem',
                background: view === 'dashboard' ? '#2563eb' : 'transparent',
                color: view === 'dashboard' ? '#fff' : '#1f2937',
                borderRadius: '.375rem',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Dashboard
            </a>
            <a
              href="#"
              onClick={e => { e.preventDefault(); setView('analytics'); }}
              style={{
                padding: '.5rem .75rem',
                background: view === 'analytics' ? '#2563eb' : 'transparent',
                color: view === 'analytics' ? '#fff' : '#1f2937',
                borderRadius: '.375rem',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Analytics
            </a>
            <a href="#" style={{ padding: '.5rem .75rem', borderRadius: '.375rem', textDecoration: 'none' }}>App</a>
          </nav>

          <div style={{ marginTop: '1rem' }}>
            <a
              href="#"
              onClick={e => { e.preventDefault(); setView('dashboard'); }}
              style={{
                display: 'block',
                padding: '.5rem .75rem',
                background: view === 'dashboard' ? '#3b82f6' : 'transparent',
                color: view === 'dashboard' ? '#fff' : '#1f2937',
                borderRadius: '.375rem',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Dashboard
            </a>
            <a
              href="#"
              onClick={e => { e.preventDefault(); setView('analytics'); }}
              style={{
                display: 'block',
                padding: '.5rem .75rem',
                background: view === 'analytics' ? '#3b82f6' : 'transparent',
                color: view === 'analytics' ? '#fff' : '#1f2937',
                borderRadius: '.375rem',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Analytics
            </a>
            <a href="#" style={{ display: 'block', padding: '.5rem .75rem', borderRadius: '.375rem', textDecoration: 'none' }}>App</a>
          </div>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            {view === 'dashboard' ? 'Dashboard' : 'Analytics'}
          </h1>

          {view === 'dashboard' ? (
            <div>
              {/* Stat Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                <div style={{ background: '#2563eb', color: '#fff', borderRadius: '.75rem', padding: '1.25rem', boxShadow: '0 4px 6px rgba(0,0,0,.1)' }}>
                  <div style={{ fontSize: '1.875rem', fontWeight: 700 }}>2.5k</div>
                  <div>Orders Completed</div>
                </div>
                <div style={{ background: '#3b82f6', color: '#fff', borderRadius: '.75rem', padding: '1.25rem', boxShadow: '0 4px 6px rgba(0,0,0,.1)' }}>
                  <div style={{ fontSize: '1.875rem', fontWeight: 700 }}>$200k</div>
                  <div>Total Revenue</div>
                </div>
                <div style={{ background: '#ef4444', color: '#fff', borderRadius: '.75rem', padding: '1.25rem', boxShadow: '0 4px 6px rgba(0,0,0,.1)' }}>
                  <div style={{ fontSize: '1.875rem', fontWeight: 700 }}>1.5m</div>
                  <div>Total Visits</div>
                </div>
                <div style={{ background: '#f59e0b', color: '#fff', borderRadius: '.75rem', padding: '1.25rem', boxShadow: '0 4px 6px rgba(0,0,0,.1)' }}>
                  <div style={{ fontSize: '1.875rem', fontWeight: 700 }}>30,145</div>
                  <div>Total Sales</div>
                </div>
              </div>

              {/* Earning Revenue Chart */}
              <div style={{ background: '#fff', borderRadius: '.75rem', padding: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,.1)', marginTop: '1.5rem' }}>
                <h3 style={{ fontWeight: 700, marginBottom: '.75rem' }}>Earning Revenue</h3>
                <div style={{ position: 'relative', height: '300px' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, #f59e0b, #f59e0b)' }} />
                </div>
                <button style={{ marginTop: '.5rem', padding: '.25rem .5rem', borderRadius: '.375rem', border: 'none', background: '#3b82f6', color: '#fff', cursor: 'pointer' }}>
                  Today ▼
                </button>
              </div>

              {/* Order Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ background: '#fff', borderRadius: '.75rem', padding: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,.1)' }}>
                  <img src="https://placehold.co/60x60?text=🛒" alt="Order Icon" style={{ marginBottom: '.5rem' }} />
                  <h4 style={{ fontWeight: 700, marginBottom: '.5rem' }}>Order Reserved From Website</h4>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#dc2626' }}>30.12k</div>
                  <div style={{ width: '100%', height: '10px', background: '#e5e7eb', borderRadius: '9999px', marginTop: '.5rem' }}>
                    <div style={{ width: '60%', height: '100%', background: '#dc2626', borderRadius: '9999px' }} />
                  </div>
                </div>
                <div style={{ background: '#fff', borderRadius: '.75rem', padding: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,.1)' }}>
                  <img src="https://placehold.co/60x60?text=📱" alt="Order Icon" style={{ marginBottom: '.5rem' }} />
                  <h4 style={{ fontWeight: 700, marginBottom: '.5rem' }}>Order Reserved From Mobile App</h4>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#16a34a' }}>50.16k</div>
                  <div style={{ width: '100%', height: '10px', background: '#e5e7eb', borderRadius: '9999px', marginTop: '.5rem' }}>
                    <div style={{ width: '70%', height: '100%', background: '#16a34a', borderRadius: '9999px' }} />
                  </div>
                </div>
              </div>

              {/* Products Section */}
              <div style={{ background: '#fff', borderRadius: '.75rem', boxShadow: '0 1px 3px rgba(0,0,0,.1)', padding: '1.25rem', marginTop: '1.5rem' }}>
                <h3 style={{ fontWeight: 700, marginBottom: '.5rem' }}>Our Products</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
                  <div style={{ background: '#f59e0b', borderRadius: '.375rem', padding: '1rem' }}>
                    <img src="/phone-preview.png" alt="Product 1" style={{ width: '100%', borderRadius: '.375rem' }} />
                  </div>
                  <div style={{ background: '#f59e0b', borderRadius: '.375rem', padding: '1rem' }}>
                    <img src="/shoes-preview.png" alt="Product 2" style={{ width: '100%', borderRadius: '.375rem' }} />
                  </div>
                  <div style={{ background: '#f59e0b', borderRadius: '.375rem', padding: '1rem' }}>
                    <img src="/handbag-preview.png" alt="Product 3" style={{ width: '100%', borderRadius: '.375rem' }} />
                  </div>
                  <div style={{ background: '#f59e0b', borderRadius: '.375rem', padding: '1rem' }}>
                    <img src="/earrings-preview.png" alt="Product 4" style={{ width: '100%', borderRadius: '.375rem' }} />
                  </div>
                  <div style={{ background: '#f59e0b', borderRadius: '.375rem', padding: '1rem' }}>
                    <img src="/clothing-preview.png" alt="Product 5" style={{ width: '100%', borderRadius: '.375rem' }} />
                  </div>
                </div>
                <button style={{ marginTop: '.5rem', padding: '.25rem .5rem', borderRadius: '.375rem', border: 'none', background: '#3b82f6', color: '#fff', cursor: 'pointer' }}>
                  View All
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Analytics View */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <div style={{ background: '#fff', borderRadius: '.75rem', padding: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,.1)' }}>
                  <h3 style={{ fontWeight: 700, marginBottom: '.75rem' }}>U.S. E-commerce Fashion Accessories Market</h3>
                  <div style={{ position: 'relative', height: '300px' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, #f59e0b, #f59e0b)' }} />
                  </div>
                  <div style={{ marginTop: '.5rem', textAlign: 'center' }}>
                    12.4%
                    <br/>
                    U.S. Market CAGR, 2022-2028
                  </div>
                </div>
                <div style={{ background: '#fff', borderRadius: '.75rem', padding: '1.25rem', boxShadow: '0 1px 3px rgba(0,0,0,.1)' }}>
                  <h3 style={{ fontWeight: 700, marginBottom: '.5rem' }}>Market Size by Product Type</h3>
                  <div style={{ position: 'relative', height: '300px' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, #f59e0b, #f59e0b)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

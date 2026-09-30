export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa', fontFamily: 'system-ui, sans-serif' }}>
      <aside style={{ width: 260, background: '#c45b2e', color: '#fff', padding: 24, flexShrink: 0 }}>
        <h2 style={{ margin: 0, fontSize: 22 }}>Minimal-Art Admin</h2>
        <nav style={{ marginTop: 32, lineHeight: 2.2, fontSize: 14 }}>
          <div style={{ fontWeight: 600, color: '#ffe5d0' }}>Dashboard</div>
          <div>Analytics</div>
          <div>Orders</div>
          <div>Customers</div>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32 }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>Dashboard <span style={{ fontSize: 14, color: '#777', fontWeight: 400 }}>Control panel</span></h1>
          <div style={{ fontSize: 12, color: '#777' }}>Home &gt; Dashboard</div>
        </header>

        <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 20 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>Audience</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
              {[['Users','15,125'],['Bounce Rate','25.50%'],['Page Views','75,951'],['Sessions','14,125']].map(([t,v]) => (
                <div key={t} style={{ background: '#fafafa', padding: 12, borderRadius: 8 }}>
                  <div style={{ fontSize: 11, color: '#777' }}>{t}</div>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ height: 220, background: 'linear-gradient(to top right, #ffb3b3, #b3e6ff)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', fontWeight: 600 }}>Audience Chart (Placeholder)</div>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: '0 0 16 0' }}>Last Week</h3>
            <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 12, background: '#eaffea', padding: '2px 8px', borderRadius: 4 }}>New User</span>
              <span style={{ fontSize: 12, background: '#e8f0fe', padding: '2px 8px', borderRadius: 4 }}>Old User</span>
            </div>
            <div style={{ height: 220, background: '#f0f0f0', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#777' }}>Weekly Chart (Placeholder)</div>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, marginBottom: 20 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>Our Visitors</h3>
            <div style={{ height: 180, background: '#f8f9fa', borderRadius: 8, display: 'flex', alignItems: 'flex-end', padding: '16px 16px 0', gap: 6 }}>
              {[40, 60, 90, 50, 70, 40, 80, 45, 55, 30, 65, 35].map((h, i) => (
                <div key={i} style={{ flex: 1, background: i % 2 ? '#4caf50' : '#ccc', height: h + '%', borderRadius: 4, opacity: 0.9 }} />
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 16 }}>
              {['$3,249.43', '$2,376.90', '$1,795.53', '1800'].map((v, i) => (
                <div key={i}>
                  <div style={{ fontSize: 20, fontWeight: 700 }}>{v}</div>
                  <div style={{ fontSize: 11, color: '#777' }}>{['TOTAL REVENUE','TOTAL COST','TOTAL PROFIT','GOAL COMPLETIONS'][i]}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <h3 style={{ margin: '0 0 16px 0' }}>Latest Customers</h3>
            <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
              <thead><tr style={{ background: '#3498db', color: '#fff', textAlign: 'left' }}><th style={{ padding: 8 }}>#</th><th>PHOTO</th><th>NAME</th><th>ORDERS</th><th>VIEW</th></tr></thead>
              <tbody>
                {['Sophia','Emma','William','Daniel','Christopher','Amelia'].map((n, i) => (
                  <tr key={n} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: 8 }}>{'#0' + (i+1) + (i===4?'25':i===5?'25':'92135')}</td>
                    <td style={{ padding: 8 }}><span style={{ background: '#ddd', borderRadius: '50%', width: 28, height: 28, display: 'inline-block', verticalAlign: 'middle' }} /> </td>
                    <td style={{ padding: 8 }}>{n}</td>
                    <td style={{ padding: 8 }}>5</td>
                    <td style={{ padding: 8 }}>✎</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            { label: 'STORE TRAFFIC', value: '90%', color: '#2196f3' },
            { label: 'USER LIKES', value: '41,410', color: '#4caf50' },
            { label: 'MONTHLY SALES', value: '760', color: '#2196f3' },
            { label: 'JOIN MEMBERS', value: '2,000', color: '#f44336' },
          ].map(({ label, value, color }) => (
            <div key={label} style={{ background: '#fff', borderRadius: 12, padding: 20, boxShadow: '0 1px 3px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{label[0]}</div>
              <div><div style={{ fontSize: 22, fontWeight: 700 }}>{value}</div><div style={{ fontSize: 12, color: '#777', textTransform: 'uppercase' }}>{label}</div></div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

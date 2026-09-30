export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f3f4f6' }}>
      <aside style={{ width: 240, background: '#111827', color: '#fff', padding: 24 }}>
        <h2>Ecommerce Admin</h2>
        <nav style={{ marginTop: 32, lineHeight: 2 }}>
          <div>Dashboard</div>
          <div>Analytics</div>
          <div>Orders</div>
          <div>Products</div>
          <div>Invoices</div>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32 }}>
        <h1>Admin Dashboard</h1>
        <p>Welcome, admin. This is a placeholder admin dashboard.</p>
      </main>
    </div>
  );
}

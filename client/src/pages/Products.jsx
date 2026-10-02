import React, { useEffect, useState } from 'react';
export default function Products() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({name:'',price:'',stock:'',image:'',available:true});
  const [editId, setEditId] = useState(null);
  const base = 'http://localhost:3001/api/products';

  useEffect(() => { fetch(base).then(r=>r.json()).then(setItems); }, []);
  const submit = async (e) => {
    e.preventDefault();
    if (editId) await fetch(`${base}/${editId}`, {method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)});
    else await fetch(base, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form)});
    setForm({name:'',price:'',stock:'',image:'',available:true}); setEditId(null);
    fetch(base).then(r=>r.json()).then(setItems);
  };
  const editItem = (item) => { setForm(item); setEditId(item.id); };
  const deleteItem = async (id) => { await fetch(`${base}/${id}`, {method:'DELETE'}); fetch(base).then(r=>r.json()).then(setItems); };
  return (
    <div style={{padding:'2rem', maxWidth:'1200px', margin:'0 auto'}}>
      <h1>Admin Products</h1>
      <form onSubmit={submit} style={{marginBottom:'1.5rem', display:'flex', gap:'.5rem', flexWrap:'wrap'}}>
        <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={{padding:'.5rem'}} required />
        <input placeholder="Price" type="number" value={form.price} onChange={e=>setForm({...form,price:e.target.value})} style={{padding:'.5rem'}} />
        <input placeholder="Stock" type="number" value={form.stock} onChange={e=>setForm({...form,stock:e.target.value})} style={{padding:'.5rem'}} />
        <input placeholder="Image URL / name" value={form.image} onChange={e=>setForm({...form,image:e.target.value})} style={{padding:'.5rem'}} />
        <label><input type="checkbox" checked={form.available} onChange={e=>setForm({...form,available:e.target.checked})} /> Available</label>
        <button type="submit" style={{padding:'.5rem 1rem', background:'#2563eb', color:'#fff', border:'none', borderRadius:'.25rem'}}>{editId?'Update':'Add'}</button>
      </form>
      <table style={{width:'100%', borderCollapse:'collapse', background:'#fff', borderRadius:'.5rem', overflow:'hidden', boxShadow:'0 2px 6px rgba(0,0,0,.05)'}}>
        <thead style={{background:'#f3f4f6'}}><tr><th style={{padding:'.75rem', textAlign:'left'}}>Name</th><th>Price</th><th>Stock</th><th>Image</th><th>Available</th><th>Actions</th></tr></thead>
        <tbody>
          {items.map(i=>(
            <tr key={i.id} style={{borderTop:'1px solid #e5e7eb'}}>
              <td style={{padding:'.75rem'}}>{i.name}</td><td>{i.price}</td><td>{i.stock}</td><td>{i.image}</td><td>{i.available?'Yes':'No'}</td>
              <td>
                <button onClick={()=>editItem(i)} style={{marginRight:'.25rem'}}>Edit</button>
                <button onClick={()=>deleteItem(i.id)} style={{color:'#dc2626'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

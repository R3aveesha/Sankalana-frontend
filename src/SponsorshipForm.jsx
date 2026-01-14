import { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:5000/api/sponsorships';

function SponsorshipForm() {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    sponsorName: '',
    price: '',
    description: '',
    website: '',
    sponsorType: 'silver',
    active: true,
  });
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchSponsors();
  }, []);

  const fetchSponsors = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_BASE);
      const data = await res.json();
      setSponsors(data);
    } catch (err) {
      setMessage('Failed to load sponsors');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({ sponsorName: '', price: '', description: '', website: '', sponsorType: 'silver', active: true });
    setImage(null);
    setEditingId(null);
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const data = new FormData();
      data.append('sponsorName', form.sponsorName);
      data.append('price', String(form.price));
      data.append('description', form.description);
      data.append('website', form.website);
      data.append('sponsorType', form.sponsorType);
      data.append('active', String(form.active));
      if (image) data.append('image', image);

      const url = editingId ? `${API_BASE}/${editingId}` : API_BASE;
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        body: data,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Save failed');
      }

      await fetchSponsors();
      setMessage(editingId ? 'Sponsor updated' : 'Sponsor created');
      resetForm();
    } catch (err) {
      setMessage(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const onEdit = (s) => {
    setEditingId(s._id);
    setForm({
      sponsorName: s.sponsorName || '',
      price: s.price ?? '',
      description: s.description || '',
      website: s.website || '',
      sponsorType: s.sponsorType || 'silver',
      active: !!s.active,
    });
    setImage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onDelete = async (id) => {
    if (!window.confirm('Delete this sponsor?')) return;
    try {
      const res = await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || 'Delete failed');
      }
      await fetchSponsors();
      if (editingId === id) resetForm();
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Manage Sponsors</h1>
            <p className="text-white/70">Create, edit, and delete homepage sponsor slots.</p>
          </div>
          {editingId && (
            <button
              className="px-4 py-2 rounded bg-white/10 border border-white/15 hover:bg-white/15"
              onClick={resetForm}
            >
              Cancel edit
            </button>
          )}
        </div>

        {message && <div className="px-4 py-3 rounded bg-white/10 border border-white/10">{message}</div>}

        <form onSubmit={onSubmit} className="space-y-5 bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{editingId ? 'Edit Sponsor' : 'Add Sponsor'}</h2>
            {editingId && <span className="text-sm text-white/60">Editing ID: {editingId}</span>}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Sponsor Name</label>
              <input
                name="sponsorName"
                value={form.sponsorName}
                onChange={onChange}
                required
                className="w-full px-3 py-2 rounded bg-neutral-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Acme Corp"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Price (Rs.)</label>
              <input
                name="price"
                type="number"
                min="0"
                value={form.price}
                onChange={onChange}
                required
                className="w-full px-3 py-2 rounded bg-neutral-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="75000"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Tier</label>
              <select
                name="sponsorType"
                value={form.sponsorType}
                onChange={onChange}
                className="w-full px-3 py-2 rounded bg-neutral-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="premium">Premium</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Website (optional)</label>
              <input
                name="website"
                value={form.website}
                onChange={onChange}
                className="w-full px-3 py-2 rounded bg-neutral-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="https://example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              rows={4}
              className="w-full px-3 py-2 rounded bg-neutral-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Short description for the homepage"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 items-end">
            <div className="space-y-2">
              <label className="block text-sm mb-1">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="w-full text-sm"
              />
              {editingId && (
                <p className="text-xs text-white/60">Upload a file to replace the current image.</p>
              )}
            </div>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                name="active"
                checked={form.active}
                onChange={onChange}
                className="h-4 w-4"
              />
              <span>Active</span>
            </label>
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-2 rounded bg-amber-500 hover:bg-amber-600 text-black font-semibold disabled:opacity-60"
            >
              {submitting ? 'Saving...' : editingId ? 'Update Sponsor' : 'Save Sponsor'}
            </button>
            {editingId && (
              <button
                type="button"
                className="px-5 py-2 rounded bg-white/10 border border-white/10"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Existing Sponsors</h2>
            {loading && <span className="text-sm text-white/60">Loading...</span>}
          </div>

          {!loading && sponsors.length === 0 && (
            <p className="text-white/60">No sponsors yet.</p>
          )}

          {!loading && sponsors.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="text-left text-white/70">
                  <tr>
                    <th className="py-2 pr-4">Name</th>
                    <th className="py-2 pr-4">Tier</th>
                    <th className="py-2 pr-4">Price</th>
                    <th className="py-2 pr-4">Active</th>
                    <th className="py-2 pr-4">Image</th>
                    <th className="py-2 pr-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {sponsors.map((s) => (
                    <tr key={s._id} className="align-middle">
                      <td className="py-2 pr-4 font-medium text-white">{s.sponsorName}</td>
                      <td className="py-2 pr-4 capitalize text-white/80">{s.sponsorType}</td>
                      <td className="py-2 pr-4 text-white/80">{s.price}</td>
                      <td className="py-2 pr-4 text-white/80">{s.active ? 'Yes' : 'No'}</td>
                      <td className="py-2 pr-4">
                        {s.imageUrl ? (
                          <a
                            href={`http://localhost:5000${s.imageUrl}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-amber-200 hover:underline"
                          >
                            View
                          </a>
                        ) : (
                          <span className="text-white/50">-</span>
                        )}
                      </td>
                      <td className="py-2 pr-4 flex gap-2">
                        <button
                          className="px-3 py-1 rounded bg-white/10 border border-white/15 hover:bg-white/15 text-white"
                          onClick={() => onEdit(s)}
                        >
                          Edit
                        </button>
                        <button
                          className="px-3 py-1 rounded bg-red-500/20 border border-red-500/40 hover:bg-red-500/30 text-red-100"
                          onClick={() => onDelete(s._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SponsorshipForm;

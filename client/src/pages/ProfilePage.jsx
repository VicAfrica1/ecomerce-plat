import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function formatRole(role) {
  return role === "admin" ? "Administrator" : "Customer";
}

export default function ProfilePage() {
  const { user, updateProfile, logout, uploadAvatar } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [fieldErrors, setFieldErrors] = useState({});
  const [banner, setBanner] = useState("");
  const [pending, setPending] = useState(false);
  const [editing, setEditing] = useState(false);
  const [avatarPending, setAvatarPending] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFieldErrors({});
    setBanner("");
    setPending(true);
    try {
      await updateProfile(name, email);
      setEditing(false);
    } catch (err) {
      if (err.errors) {
        const byField = {};
        for (const { field, message } of err.errors) {
          byField[field] = message;
        }
        setFieldErrors(byField);
      } else {
        setBanner(err.message);
      }
    } finally {
      setPending(false);
    }
  }

  async function handleAvatarClick() {
    fileInputRef.current?.click();
  }

  async function handleAvatarChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarPending(true);
    setBanner("");
    setPreviewUrl(URL.createObjectURL(file));
    try {
      await uploadAvatar(file);
    } catch (err) {
      setBanner(err.message || "Avatar upload failed");
    } finally {
      setAvatarPending(false);
      e.target.value = "";
    }
  }

  return (
    <main className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar-wrapper">
            {(user.avatar || previewUrl) ? (
              <img
                src={previewUrl || (user.avatar?.startsWith("http") ? user.avatar : (user.avatar ? (import.meta.env.VITE_API_URL || "http://localhost:5001/api").replace("/api", "") + user.avatar : ""))}
                alt="Avatar"
                className="profile-avatar-img"
                onClick={editing ? handleAvatarClick : undefined}
                style={editing ? { cursor: "pointer" } : {}}
              />
            ) : (
              <div className="profile-avatar">{getInitials(user.name)}</div>
            )}
            <button
              type="button"
              className="profile-avatar-edit"
              onClick={handleAvatarClick}
              disabled={avatarPending || !editing}
              title={editing ? "Click to upload avatar" : "Edit profile to change avatar"}
            >
              {avatarPending ? "…" : "✎"}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: "none" }}
            />
          </div>
          <div className="profile-header-info">
            <h1 className="profile-name">{user.name}</h1>
            <span className="profile-role">{formatRole(user.role)}</span>
          </div>
        </div>

        {editing ? (
          <form className="profile-form" onSubmit={handleSubmit} noValidate>
            {banner && <p className="auth-banner">{banner}</p>}

            <label className="profile-field">
              <span className="profile-field-label">Name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                minLength={2}
                disabled={pending}
              />
              {fieldErrors.name && (
                <span className="auth-error">{fieldErrors.name}</span>
              )}
            </label>

            <label className="profile-field">
              <span className="profile-field-label">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={pending}
              />
              {fieldErrors.email && (
                <span className="auth-error">{fieldErrors.email}</span>
              )}
            </label>

            <div className="profile-actions">
              <button type="submit" disabled={pending}>
                {pending ? "Saving…" : "Save changes"}
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                disabled={pending}
                className="btn-ghost"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <dl className="profile-details">
              <div className="profile-detail">
                <dt>Name</dt>
                <dd>{user.name}</dd>
              </div>
              <div className="profile-detail">
                <dt>Email</dt>
                <dd>{user.email}</dd>
              </div>
              <div className="profile-detail">
                <dt>Role</dt>
                <dd>{formatRole(user.role)}</dd>
              </div>
            </dl>

            <div className="profile-actions">
              <button onClick={() => setEditing(true)}>Edit Profile</button>
              <button onClick={handleLogout} className="btn-ghost">
                Log out
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
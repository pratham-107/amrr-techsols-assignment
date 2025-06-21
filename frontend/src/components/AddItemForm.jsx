// frontend/src/components/AddItemForm.jsx
import React, { useState } from "react";
import axios from "axios";

// ✅ URL validation helper
const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

const AddItemForm = () => {
  const [form, setForm] = useState({
    itemName: "",
    itemType: "",
    description: "",
    coverImage: "",
    images: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate cover image
    if (!isValidUrl(form.coverImage)) {
      alert("❌ Invalid Cover Image URL");
      return;
    }

    // ✅ Validate and clean image array
    const imageUrls = form.images
      .split(",")
      .map((url) => url.trim())
      .filter(Boolean);

    const invalidUrls = imageUrls.filter((url) => !isValidUrl(url));
    if (invalidUrls.length > 0) {
      alert("❌ One or more additional image URLs are invalid");
      return;
    }

    const itemData = {
      ...form,
      images: imageUrls,
    };

    try {
      await axios.post("http://localhost:5000/api/items", itemData);
      alert("✅ Item successfully added!");
      setForm({
        itemName: "",
        itemType: "",
        description: "",
        coverImage: "",
        images: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add item");
    }
  };

  return (
    <div className="container">
      <div
        className="card shadow-lg p-4 mx-auto mt-4"
        style={{ maxWidth: "700px" }}
      >
        <h3 className="text-center mb-4 text-primary fw-bold">
          ➕ Add a New Item
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Item Name</label>
            <input
              name="itemName"
              className="form-control"
              placeholder="e.g. Adidas Backpack"
              value={form.itemName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Item Type</label>
            <input
              name="itemType"
              className="form-control"
              placeholder="e.g. Bag, Shoes"
              value={form.itemType}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows={3}
              placeholder="Enter item description..."
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Cover Image URL</label>
            <input
              name="coverImage"
              className="form-control"
              placeholder="Direct image link"
              value={form.coverImage}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">
              Additional Images (comma-separated URLs)
            </label>
            <input
              name="images"
              className="form-control"
              placeholder="http://..., http://..."
              value={form.images}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-success fw-semibold" type="submit">
              ➕ Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;

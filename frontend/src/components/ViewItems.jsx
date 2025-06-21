// frontend/src/components/ViewItems.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemModal from "./ItemModal";

const ViewItems = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  const fallbackImage =
    "https://cdn-icons-png.flaticon.com/512/2748/2748558.png";

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 fw-bold text-primary">View All Items</h2>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {items.map((item, idx) => (
          <div key={idx} className="col">
            <div
              className="card h-100 shadow-sm border-0 item-card"
              onClick={() => setSelected(item)}
              style={{ transition: "transform 0.2s", cursor: "pointer" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={item.coverImage}
                className="card-img-top"
                alt={item.itemName}
                style={{ objectFit: "cover", height: "200px" }}
                onError={(e) => (e.target.src = fallbackImage)}
              />

              <div className="card-body">
                <h5 className="card-title text-truncate">{item.itemName}</h5>
                <p className="card-text text-muted small mb-0">
                  {item.itemType}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <ItemModal item={selected} onHide={() => setSelected(null)} />
      )}
    </div>
  );
};

export default ViewItems;

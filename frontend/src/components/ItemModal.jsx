import React from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import axios from "axios";

const ItemModal = ({ item, onHide }) => {
  const handleEnquire = async () => {
    try {
      await axios.post("http://localhost:5000/api/enquire", {
        itemId: item._id,
      });
      alert("✅ Enquiry email sent!");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send enquiry email.");
    }
  };

  return (
    <Modal show onHide={onHide} size="lg" centered>
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title>{item.itemName}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Carousel className="mb-4">
          {[item.coverImage, ...(item.images || [])]
            .filter(Boolean)
            .map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={img}
                  className="d-block w-100 rounded"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                  alt={`Slide ${idx + 1}`}
                  onError={(e) => {
                    if (
                      e.target.src !==
                      "https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                    ) {
                      e.target.onerror = null;
                      e.target.src =
                        "https://cdn-icons-png.flaticon.com/512/2748/2748558.png";
                    }
                  }}
                />
              </Carousel.Item>
            ))}
        </Carousel>

        <div className="px-2">
          <p className="mb-2">
            <strong>Type:</strong>{" "}
            <span className="text-secondary">{item.itemType}</span>
          </p>
          <p>
            <strong>Description:</strong> <br />
            <span className="text-muted">{item.description}</span>
          </p>
        </div>
      </Modal.Body>

      <Modal.Footer className="justify-content-between">
        <small className="text-muted">
          Click Enquire to send a request to the owner.
        </small>
        <Button variant="success" onClick={handleEnquire}>
          ✉️ Enquire
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;

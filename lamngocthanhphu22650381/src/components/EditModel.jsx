import React from "react";
import { useState, useEffect } from "react";
import "../css/EditModel.css";

export default function EditModal({ isOpen, onClose, user, onSaveSuccess }) {
  if (!isOpen || !user) return null;
  const [formData, setFormData] = useState({
    customerName: user.customerName,
    company: user.company,
    orderValue: user.orderValue,
    orderDate: user.orderDate,
    status: user.status,
  });

  useEffect(() => {
    setFormData({
      customerName: user.customerName,
      company: user.company,
      orderValue: user.orderValue,
      orderDate: user.orderDate,
      status: user.status,
    });
  }, [user]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://67c824890acf98d0708518a5.mockapi.io/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const updatedUser = await response.json();
        console.log("User updated successfully:", updatedUser);
        onClose(); // Đóng modal
        onSaveSuccess(); // Reload lại dữ liệu overview
      } else {
        console.error("Failed to update user:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form>
          <label>
            Customer Name:
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Order Value:
            <input
              type="number"
              name="orderValue"
              value={formData.orderValue}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Order Date:
            <input
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Status:
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <div className="modal-buttons">
            <button type="submit" onClick={handleSave}>
              Save
            </button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import "../css/EditModel.css";

export default function EditModal({ isOpen, onClose, user }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form>
          <label>
            Customer Name:
            <input type="text" name="customerName" value={user.customerName} />
          </label>
          <label>
            Company:
            <input type="text" name="company" value={user.company} />
          </label>
          <label>
            Order Value:
            <input type="number" name="orderValue" value={user.orderValue} />
          </label>
          <label>
            Order Date:
            <input type="date" name="orderDate" value={user.orderDate} />
          </label>
          <label>
            Status:
            <select name="status" value={user.status}>
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

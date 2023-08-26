import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

function AddItem({ items, setItems }) {
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef();

  const AddItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, item };
    setItems([...items, newItem]);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
    AddItem(newItem);
  };

  return (
    <form className="addForm" onSubmit={(e) => handelSubmit(e)}>
      <label htmlFor="addItem"></label>
      <input
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default AddItem;

import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

function Content({ items, setItems }) {
  const deleteItem = (id) => {
    const deleteItem = items.filter((item) => item.id !== id);
    setItems(deleteItem);
  };

  const handelChange = (id) => {
    let listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                readOnly
                onClick={() => handelChange(item.id)}
              />
              <label
                onDoubleClick={() => handelChange(item.id)}
                style={item.checked ? { textDecoration: "line-through" } : null}
              >
                {item.item}
              </label>
              <BsFillTrash3Fill onClick={() => deleteItem(item.id)} />
            </li>
          ))}
        </ul>
      ) : (
        <h1 style={{ marginTop: "3rem" }}>Your list is empty</h1>
      )}
    </main>
  );
}

export default Content;

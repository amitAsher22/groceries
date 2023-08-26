import React from "react";

function Footer({ length }) {
  const today = new Date();

  return (
    <footer>
      <p>
        {length} list {length === 1 ? "item" : "items"} {today.getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;

import "./App.css";
import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "milk" },
    { id: 2, checked: false, item: "bread" },
    { id: 3, checked: false, item: "cheese" },
  ]);

  const [search, setSearch] = useState("");

  return (
    <div className="App ">
      <Header title={"Groceries List"} />
      <AddItem items={items} setItems={setItems} />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        setItems={setItems}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;

import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handelAddItem(item) {
    setItems((itmes) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelToggelItem(id) {
    setItems((it) =>
      it.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearAll() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items? "
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handelAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handelDeleteItem}
        onHandelToggleItem={handelToggelItem}
        clearAllItems={clearAll}
      />
      <Stats items={items} />
    </div>
  );
}

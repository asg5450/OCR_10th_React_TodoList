import React, { useState } from "react";
import { v4 } from "uuid";

export default function AddTodo(props) {
  const { onAdd } = props;
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length == 0) return;
    onAdd({ id: v4(), text, status: "active" });
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일 추가"
        value={text}
        onChange={handleChange}
      />
      <button>추가</button>
    </form>
  );
}

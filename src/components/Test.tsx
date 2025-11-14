import { useEffect, useState } from "react";

export function InputTitle() {
  const [text, setText] = useState("title");

  useEffect(() => {
    document.title = text;
  }, [text]);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}

import React, { useState } from "react";

export default function Button() {
  const [sayHello, setSayHello] = useState("Hello");

  const handleClick = () => {
    sayHello ? setSayHello(false) : setSayHello(true);
  };
  return (
    <button type="button" onClick={handleClick}>
      Hi!
    </button>
  );
}

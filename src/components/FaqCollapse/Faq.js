import React, { useState } from "react";

export const Faq = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  const handleFaqClick = () => {
    setOpen(!open);
  };
  return (
    <div className={open ? "faq faq-open" : "faq"} onClick={handleFaqClick}>
      <span>
        <h5>{q}</h5>
        <i class={open ? "fa fa-times" : "fa-solid fa-caret-down"}></i>
      </span>
      <p>{a}</p>
    </div>
  );
};

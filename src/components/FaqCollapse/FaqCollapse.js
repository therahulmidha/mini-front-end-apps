import React from "react";
import { Faq } from "./Faq";
import "./FaqCollapse.css";

const FAQS = [
  {
    id: 1,
    q: "Why shouldn't we trust atoms?",
    a: "They make up everything",
  },
  {
    id: 2,
    q: "What do you call someone with no body and no nose?",
    a: "Nobody knows",
  },
  {
    id: 3,
    q: "What's the object-oriented way to become wealthy?",
    a: "Ask the experts",
  },
  {
    id: 4,
    q: "How many tickles does it take to tickle an octopus?",
    a: "Ninety nine",
  },
];
export const FaqCollapse = () => {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faqs">
        {FAQS.map((faq) => (
          <Faq key={faq.id} q={faq.q} a={faq.a} />
        ))}
      </div>
    </div>
  );
};

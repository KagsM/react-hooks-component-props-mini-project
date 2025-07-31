import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: Minutes to Read indicator
  let indicator = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    indicator = "☕️".repeat(cups) + ` ${minutes} min read`;
  } else {
    const bentos = Math.ceil(minutes / 10);
    indicator = "🍱".repeat(bentos) + ` ${minutes} min read`;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {indicator}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
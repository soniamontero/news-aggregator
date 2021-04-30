import React from "react";
import dayjs from "dayjs";

const Article = ({ content, handleClick }) => {
  return (
    <div className="article">
      <h5>{content.title}</h5>
      <p>Published {dayjs(content.date).format("DD/MM/YYYY")}</p>
      <a href={content.url}>Read more</a>
      <button onClick={() => handleClick(content)}>Save</button>
    </div>
  );
};

export default Article;

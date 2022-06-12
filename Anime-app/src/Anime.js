import React from "react";

export default function Anime({
  anime_img: img,
  anime_name: name,
  handleFacts,
}) {
  return (
    <div className="anime-cards">
      <img className="img" src={img} alt="anime" />
      <h1 className="title">{name.toUpperCase()}</h1>
    </div>
  );
}

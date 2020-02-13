import React from "react";
import CardInfo from "./CardInfo";

function Card({ item, click }) {
  return (
    <div className="d-inline-block s-card" onClick={e => click(item)}>
      <img className="s-card-image" src={item.imgSrc} alt={item.imgSrc} />
      {item.selected && (
        <CardInfo
          title={item.title}
          subTitle={item.subTitle}
          link={item.link}
        />
      )}
    </div>
  );
}
export default Card;

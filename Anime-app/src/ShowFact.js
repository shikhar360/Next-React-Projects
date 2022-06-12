import React from "react";
import Fact from "./Fact";

export default function ShowFact({ img, data, man }) {
  return (
    <div className="showfact">
      <div className="box3">
        <span className="about-title">About {man.toUpperCase()}</span>
      </div>
      <div className="list">
        {data.map((itm) => {
          return <Fact key={itm.fact_id} {...itm} />;
        })}
      </div>
    </div>
  );
}

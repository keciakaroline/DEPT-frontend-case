import React from "react";
import "./styles/Filter.css";

export default function Filter() {
  return (
    <div className="Filter">
      <div className="filter-show-me">
        <p>
          Show me <span className="all-work">all work</span>
        </p>
      </div>

      <div className="filter-groups">
        <div>
          <p>
            in <span className="groups">all industries</span>
          </p>
        </div>
      </div>
    </div>
  );
}

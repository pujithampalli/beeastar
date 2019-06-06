import React, { useState, useEffect } from "react";
import "./styles.css";
import "font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import award from "./award.png";

function Badge(props) {
  const [badges, setCount] = useState();

  const {count} = props;
  const len = Math.floor((count) / 5)
  return (
    <div className={len!=0 ? "Badge" : "noBadge"}>
      <div className="BadgeHeader">
        <img
          src={award}
          alt="badge"
          height="200"
        />
      </div>
      {(len!=0) ?
      <div className="BadgeBodyEarned">
      You've earned {len} badge(s) so far, keep going!
      </div> :
      <div className="BadgeBody">
      You need to add your accomplishments to receive badge(s).
      </div>
    }

    </div>
  );
}
export default Badge;

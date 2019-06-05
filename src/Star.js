import React, { useState, useEffect } from "react";
import styled from "styled-components";

const star = "⭐";
const starArray = [];
const BigStar = styled.svg``;

const start = 200;
const complete = 10;
let currentCount = 1;

function Star() {
  const [percentage, setPercentage] = useState(start);

  return (
    <div>
      <BigStar
        xmls="https://www.w3.org/2000/svg"
        viewBox={`-400 ${percentage} 1000 200`}
      >
        <svg height="210" width="500">
          <polygon
            points="100,10 40,198 190,78 10,78 160,198"
            strokeWidth="2"
            stroke="#e4af4c"
            fill="#f4d37d"
          />
        </svg>
      </BigStar>
    </div>
  );
}

export default Star;

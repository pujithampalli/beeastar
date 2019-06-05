import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Table = styled.table`
  height: 200px;
  width: 100%;
  background-color: #fff1f3;
  margin-bottom: 10px;
`;

const Cell = styled.td`
  border: 2px white dashed;
  color: black;
  :hover {
    background-color: #d0f0d0;
  }
`;

function StampGrid() {
  const [stars, setStars] = useState([]);
  const star = "⭐⭐⭐⭐⭐";

  let stampArray = [];

  useEffect(() => {
    const storedItems = localStorage.getItem("Item");
    if (storedItems !== "") {
      const object = JSON.parse(storedItems);
      setStars(object);
    }
  }, []);

  useEffect(() => {
    stars.map((value, i) => {
      stampArray[i] = "*";
      return stampArray;
    });
    console.log(stars);
    console.log("here", stampArray[1]);
  });
  console.log("stampArray", stampArray);
  return (
    <Table>
      <tbody>
        <tr>
          <Cell />
          <Cell />
          <Cell />
        </tr>
        <tr>
          <Cell>{star}</Cell>
          <Cell>{star}</Cell>
          <Cell>{stampArray[2]}</Cell>
        </tr>
        <tr>
          <Cell>{star}</Cell>
          <Cell>{stampArray[1]}</Cell>
          <Cell>{star}</Cell>
        </tr>
      </tbody>
    </Table>
  );
}

export default StampGrid;

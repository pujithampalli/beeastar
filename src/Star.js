import styled from "styled-components";
import "./styles.css";
import React, { useState, useEffect, useCallback } from "react";

const star = "⭐";
const starArray = [];

const Container = styled.div`
  width: 100%;
  height: 55px;
  margin-bottom: 10px;
  padding-top: 3px;
  border: 2px white dashed;
  font-size: 30px;
  background-color: rgb(249, 235, 195, 0.7);
  margin-top: 25px;
`;

function Star(props) {


  const { count } = props;
  for( var i =0; i<count; i++){
    starArray[i] = star;
  }


  return (
    <Container>
    {starArray.map((item) => (
      <div className="Star-animation">{item}</div>
    ))}
    </Container>
  );
}

export default Star;

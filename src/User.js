import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Name = styled.input`
  font-family: Arial;
  color: black;
  font-size: 20px;
  text-align: center;
  margin-top: 3em;
  padding: 10px;
  border: 3px white dashed;
  width: 260px;
  float: left;
  position: relative;
  top: 10px;
  left: 40px;
  background-color: #d0f0d0;

  :hover {
    background-color: #fff1f3;
  }
`;
const Image = styled.img`
  border: 3px white dashed;
  padding: 15px;
  margin: 10px;
  float: left;
  position: relative;
  top: 150px;
  left: -225px;
  background-color: #d0f0d0;

  :hover {
    background-color: #fff1f3;
  }
`;

function User() {
  const [name, setName] = useState("Enter Your Name");

  const handleNameChange = e => {
    setName(e.target.value);
    localStorage.setItem("Name", e.target.value);
  };

  useEffect(() => {
    const storedName = localStorage.getItem("Name");
    if (storedName !== "") {
      setName(storedName);
    }
  }, []);

  return (
    <div>
      <h3>
        <Name type="text" onChange={handleNameChange} value={name} />
      </h3>
      <Image
        src="https://uploads.codesandbox.io/uploads/user/b14652ff-9bd9-4eb7-acdf-2c231ca51a7a/AkQO-happy-bee.jpg"
        alt="Bee"
        height="250"
        width="250"
      />
    </div>
  );
}

export default User;

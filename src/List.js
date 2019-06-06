import React, { useState, useEffect } from "react";
import "./styles.css";
import "font-awesome/css/font-awesome.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Modal} from 'react-bootstrap';
import Star from "./Star";

function List(props) {
  const [item, setItems] = useState("");
  const [itemList, setItemList] = useState([]);
  const [showModal, setShow] = useState(false);

  const handleInput = e => {
    setItems(e.target.value);
  };

  const addAccomplishments = e => {
    setItemList([...itemList, item]);
    setItems("");
    console.log(itemList.length+1)
    if((itemList.length+1) % 5 == 0){
      setShow(true)
    }
  };

  const deleteItem = index => {
    setItemList([
      ...itemList.splice(0, index),
      ...itemList.splice(index + 1, itemList.length)
    ]);
    const string = JSON.stringify(itemList);
    localStorage.setItem("Item", string);
    props.propsList(itemList.length)
  };

  const handleClose = e => {
    setShow(false);
  }

  useEffect(() => {
    const storedItems = localStorage.getItem("Item");
    const JSONObject = JSON.parse(storedItems);
    if (storedItems !== null) {
      setItemList(JSONObject);
    }
  }, []);

  useEffect(() => {
    const string = JSON.stringify(itemList);
    localStorage.setItem("Item", string);
    props.propsList(itemList.length)
  }, [itemList]);

  return (
    <>
    <div className="List">
      <div className="listHeader">
        <span className="listHeaderLeft">Accomplishments</span>
        <div className="listHeaderRight">
          <input
            className="inputText"
            type="text"
            placeholder="Add Accomplishments"
            onChange={handleInput}
            value={item}
          />
          <span onClick={addAccomplishments} className="addIcon">
            &#8853;
          </span>
        </div>
      </div>
      <div className="listBody">
        <ul className="items">
          {itemList.map((item, index) => (
            <li className="listItem">
              {item}{" "}
              <span
                class="glyphicon glyphicon-trash deleteIcon"
                key={index}
                onClick={() => deleteItem(index)}
              />
            </li>
          ))}
          {(itemList.length == 0) ? "It's time to add your accomplishments!" : ""}
        </ul>
      </div>
    </div>
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>You did it!! <img src="https://media0.giphy.com/media/l1S550kewGdws/source.gif" alt="" height="50"></img></Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you've earned a Badge!</Modal.Body>
    </Modal>
    </>
  );
}

export default List;

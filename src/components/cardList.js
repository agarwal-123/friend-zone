import React, { useState, useEffect } from "react";
import Card from "./card";
import styled from "styled-components";

const Wrapper = styled.div`
  .icon {
    height: 20px;
    cursor: pointer;
    border: 1px solid #d6d6d6;
    padding: 5px;
    margin: 5px;
    color: grey;
  }

  .circle {
    border-radius: 50%;
  }

  .rotate {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
`;

export default function CardSection({
  searchedString,
  cardList,
  handleUserBookmark,
  handleUserDelete,
}) {
  const [searchedList, setSearchedList] = useState([]);

  const [offset, setOffset] = useState(0);

  const handleNext = () => {
    setOffset((prev) => prev + 4);
  };
  const handlePrev = () => {
    setOffset((prev) => prev - 4);
  };

  const handleUserSearch = (value) => {
    setSearchedList(
      cardList.filter((data) =>
        data.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    setOffset(0);
  };

  useEffect(() => {
    if (searchedString.length) handleUserSearch(searchedString);
    else setSearchedList(cardList);
  }, [searchedString, cardList]);

  return (
    <Wrapper>
      <div className="container">
        <div>
          {searchedList.slice(offset, offset + 4).map((card) => (
            <Card
              {...card}
              handleUserDelete={handleUserDelete}
              handleUserBookmark={handleUserBookmark}
            />
          ))}
        </div>
        <div className="row" style={{ marginTop: 20 }}>
          {offset >= 4 && (
            <div onClick={handlePrev}>
              <img src={"arrow.png"} className="icon" />
            </div>
          )}
          {offset + 4 < searchedList.length && (
            <div onClick={handleNext} className="end">
              <img src={"arrow.png"} className="icon rotate" />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

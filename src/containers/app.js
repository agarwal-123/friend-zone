import React, { useState } from "react";
import InputBox from "../components/inputBox";
import CardList from "../components/cardList";
import { cardsData } from "../cardsData";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 400px;
  width: 90%;
  margin: 0 auto;
  .header {
    padding: 20px 0px;
    font-size: 34px;
    font-weight: 500;
    margin: auto;
    // background-color:grey;
  }
  .sort {
    padding: 10px;
    align-items: center;
    cursor: pointer;
  }
  .icon {
    height: 20px;
    cursor: pointer;
    border: 1px solid #d6d6d6;
    padding: 5px;
    margin: 5px 5px 5px 0px;
    color: grey;
  }

  .rotate-90 {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;

export default function App() {
  const [searchedString, setSearchedString] = useState("");
  const [keyPressed, setKeyPressed] = useState("");
  const [cardList, setCardList] = useState(cardsData);
  const handleUserAdd = (key) => {
    if (key == "Enter")
      setCardList((prev) => [
        { name: searchedString, bookmarked: false, id: prev.length },
        ...prev,
      ]);
  };

  const handleUserDelete = (id) => {
    if (window.confirm("Delete user from your list ?"))
      setCardList((prev) => prev.filter((data) => data.id != id));
  };

  const handleUserBookmark = (id) => {
    setCardList((prev) =>
      prev.map((data) => {
        if (data.id == id) return { ...data, bookmarked: !data.bookmarked };
        return data;
      })
    );
  };

  // Bring favourites at top
  const handleFavouritesSort = () => {
    let list = [];
    cardList.forEach((ele) => {
      if (ele.bookmarked) list.push(ele);
    });
    cardList.forEach((ele) => {
      if (!ele.bookmarked) list.push(ele);
    });
    setCardList(list);
  };
  return (
    <Wrapper>
      <div className="header">Friends List</div>

      <InputBox searchChange={setSearchedString} onKeyPress={handleUserAdd} />
      <div onClick={handleFavouritesSort} className="sort row">
        <img src="arrow.png" className="icon rotate-90 " />
        Click to bring favourite friends at top .
      </div>
      <CardList
        searchedString={searchedString}
        keyPressed={keyPressed}
        cardList={cardList}
        handleUserDelete={handleUserDelete}
        handleUserBookmark={handleUserBookmark}
      />
    </Wrapper>
  );
}

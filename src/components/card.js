import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 10px 0px;
  padding: 10px 0px;
  border-bottom: 1px solid #d6d6d6;
  .icon {
    height: 20px;
    cursor: pointer;
    border: 1px solid #d6d6d6;
    padding: 5px;
    margin: 5px;
    color: grey;
  }
  .robot {
    border-radius: 50%;
    background-color: #9eebcf;
    margin-right: 10px;
  }
  .align-center {
    align-items: center;
  }
  .light-grey {
    color: grey;
  }
  .mt-5 {
    margin-top: 5px;
  }
  .mr-10 {
    margin-right: 5px;
  }
  .end {
    margin-left: auto;
  }
`;
export default function card({
  bookmarked,
  name = "Raju Kumar",
  handleUserDelete,
  id,
  handleUserBookmark,
}) {
  return (
    <Wrapper>
      <div className="row align-center">
        <img
          alt="robo"
          src={`https://robohash.org/${id}?size=60x60`}
          className="robot"
        />

        <div className="mr-10">
          <div className="medium-18">{name}</div>
          <div className="row light-grey mt-5">is also your friend.</div>
        </div>
        <div className="end">
          <img
            src={bookmarked ? "star-filled.png" : "star.png"}
            className="icon"
            onClick={() => handleUserBookmark(id)}
          />
          <img
            src="trash.png"
            className="icon"
            onClick={() => handleUserDelete(id)}
          />
        </div>
      </div>
    </Wrapper>
  );
}

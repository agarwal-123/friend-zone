import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .inputBox {
    height: 40px;
    width: 100%;
    margin: 10px 0px;
    border: none;
    border-bottom: 1px solid grey;
  }
`;
const InputBox = ({ searchChange, onKeyPress }) => {
  return (
    <Wrapper>
      <div>
        <input
          className="inputBox"
          type="search"
          onKeyPress={(e) => onKeyPress(e.key)}
          placeholder="Search your friends here. Hit enter to add new friend!"
          onChange={(e) => searchChange(e.target.value)}
        />
      </div>
    </Wrapper>
  );
};

export default InputBox;

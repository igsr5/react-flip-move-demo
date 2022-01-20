import React, { useState } from "react";
import FlipMove from "react-flip-move";
import styled from "styled-components";

export const World: React.FC = () => {
  const [pages, setPages] = useState(
    [...Array(10)].map((_, i) => `${i}. Hello World`)
  );

  // NOTE: FlipMove 直下にループを置かなければいけない
  return (
    <>
      <h2>react-flip-move test</h2>
      <button onClick={() => setPages((pages) => [...shuffle(pages)])}>
        suffle
      </button>
      <FlipMove style={{ display: "flex", flexWrap: "wrap" }}>
        {pages.map((v, i) => {
          return <StyledText key={v}>{v}</StyledText>;
        })}
      </FlipMove>
    </>
  );
};

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledText = styled.p`
  width: 30%;
  border: 1px solid #000;
  background-color: #ebebeb;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
`;

const shuffle = (array: Array<string>): Array<string> => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

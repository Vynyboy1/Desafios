import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #cacaca;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex
  background-color: #fff;
  width: 50%;
`;

export const Rowjs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Columnjs = styled.div`
  display: flex;
  flex-direction: Column;
  justify-content: space-between;
  align-items: center;
`;

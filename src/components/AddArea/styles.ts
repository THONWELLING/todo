import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #555;
  border-radius: 20px;
  padding: 10px;
  margin: 20px 0;

  .image {
    margin-left: 10px;
    margin-right: 10px;
  }

  input {
    border: 0px;
    background: transparent;
    outline: 0;
    color: #fff;
    font-size: 18px;
    flex: 1;
  }
`
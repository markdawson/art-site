import styled from "styled-components"

export const Container = styled.div`
  border: solid 1px red;
  position: relative;
  img {
    width: 65%;
    float: right;
    margin-right: 0px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }
  button {
    bottom: 0;
  }
`

export const TextContainer = styled.div`
  width: 50%;
  h1 {
    font-size: calc(10rem + 50%);
    text-shadow: 3px 3px 3px white;
  }
  h2 {
    color: darkgrey;
    margin-rght: 30%;
  }

`
export const IMGContainer = styled.div`

`
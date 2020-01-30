import styled from "styled-components";

export const Content = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 25px;
  grid-gap: 25px;
  grid-auto-flow: dense;
  align-items: stretch;
  width: 100%;
`;

export const ErrorParagraph = styled.div`
  background: lightsalmon;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid tomato;
`;

export const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

export const Item = styled.div.attrs(props => ({
  key: props.key || "0"
}))`
  position: relative;
  grid-row: span ${props => props.gridRow};
`;

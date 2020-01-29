import styled from "styled-components";

const Button = styled.button.attrs(props => ({
  disabled: props.disabled
}))`
  background: white;
  background: #fff;
  padding: 18px 24px 15px;
  color: ${props => (props.disabled ? "#888" : "#111")};
  border-radius: 4px;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  transition: box-shadow 0.3s;
  line-height: 1;
  white-space: nowrap;
  border: none;
  text-align: center;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  margin: 20px auto 60px;
  box-shadow: ${props =>
    props.disabled
      ? "0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.05),0 1px 3px rgba(0, 0, 0, 0.1)"
      : "0 0 0 1px rgba(0, 0, 0, 0.03), 0 1px 0 rgba(0, 0, 0, 0.05),0 1px 3px rgba(0, 0, 0, 0.1)"};
  transform: translateZ(0);
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
    background-color: #fefefe;
    color: #05f;
  }
`;

export { Button };

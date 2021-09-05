import styled from 'styled-components';

const StyledDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  padding: 5%;
  margin-block: 20vh 50vh;
  background: ${({ theme: { gradient } }) => gradient};
  @media only screen and (min-width: 1280px) {
    height: 45vh;
  }
`;

function Divider({ children }) {
  return <StyledDivider>{children}</StyledDivider>;
}

export default Divider;
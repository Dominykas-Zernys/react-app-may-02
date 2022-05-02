import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: tomato;
`;

const StyledH2 = styled.h2`
  color: white;
`;

const TitleWrapper = () => {
  return (
    <StyledDiv>
      <StyledH2>Recipes</StyledH2>
    </StyledDiv>
  );
};

export default TitleWrapper;

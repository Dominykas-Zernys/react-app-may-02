import styled from 'styled-components';
import CardList from './CardList';

const StyledMain = styled.main`
  width: 75%;
  margin: auto;
  padding: 20px 0;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 6px;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: black;
`;

const MainPage = () => {
  return (
    <StyledMain>
      <StyledDiv>
        <StyledInput type='text' placeholder='Recipe Search' />
        <StyledButton>Sr</StyledButton>
      </StyledDiv>
      <CardList />
    </StyledMain>
  );
};

export default MainPage;

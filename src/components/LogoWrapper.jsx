import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
  padding-bottom: 10px;
`;

const StyledImg = styled.img`
  height: 40px;
  margin: auto;
`;

const LogoWrapper = () => {
  return (
    <StyledDiv>
      <StyledImg src='img/logo.png' alt='page-logo' />
    </StyledDiv>
  );
};

export default LogoWrapper;

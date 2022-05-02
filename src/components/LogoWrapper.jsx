import styled from 'styled-components';

const StyledDiv = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  padding: 10px 0;
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

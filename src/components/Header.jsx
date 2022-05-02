import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;

const StyledBtn = styled.button`
  padding: 8px;
  border-radius: 15px;
  background-color: #b63d28;
  border: none;
  font-weight: bold;
  color: white;
`;

const StyledLink = styled.a`
  color: black;
  padding: 8px;
  text-decoration: none;
`;

const Header = () => {
  return (
    <StyledDiv>
      <nav>
        <StyledLink href='#'>Home</StyledLink>
        <StyledLink href='#'>Recipes</StyledLink>
      </nav>
      <StyledBtn>+ Submit Recipe</StyledBtn>
    </StyledDiv>
  );
};

export default Header;

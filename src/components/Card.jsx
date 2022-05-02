import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const StyledTextWrapper = styled.div`
  text-align: center;
`;

const StyledH5 = styled.h5`
  color: tomato;
`;

const Card = (props) => {
  return (
    <div>
      <StyledImage src={props.image} alt='food' />
      <StyledTextWrapper>
        <StyledH5>{props.category}</StyledH5>
        <h3>{props.title}</h3>
        <div>{props.rating}</div>
        <p>{props.text}</p>
        <div>Some icons</div>
      </StyledTextWrapper>
    </div>
  );
};

export default Card;

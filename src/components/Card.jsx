import styled from 'styled-components';

const StyledImage = styled.img`
  height: 180px;
  object-fit: cover;
  width: 100%;
`;

const StyledTextWrapper = styled.div`
  text-align: center;
`;

const StyledH5 = styled.h5`
  color: tomato;
`;

const RatingDiv = styled.div`
  color: #bebebe;
`;

const IconsWrapper = styled.div`
  color: tomato;
`;

const StyledSpan = styled.span`
  color: black;
  margin: 0 12px 0 6px;
`;

const Card = (props) => {
  return (
    <div>
      <StyledImage src={props.image} alt='food' />
      <StyledTextWrapper>
        <StyledH5>{props.category}</StyledH5>
        <h3>{props.title}</h3>
        <RatingDiv>
          <i class='fa fa-star' aria-hidden='true'></i>
          <i class='fa fa-star' aria-hidden='true'></i>
          <i class='fa fa-star' aria-hidden='true'></i>
          <i class='fa fa-star' aria-hidden='true'></i>
          <i class='fa fa-star' aria-hidden='true'></i>
          <span> {props.rating}/5</span>
        </RatingDiv>
        <p>{props.text}</p>
        <IconsWrapper>
          <i class='fa fa-clock-o' aria-hidden='true'></i>
          <StyledSpan>{props.time} Mins</StyledSpan>
          <i class='fa fa-comment-o' aria-hidden='true'></i>
          <StyledSpan>{props.comments}</StyledSpan>
          <i class='fa fa-heart-o' aria-hidden='true'></i>
          <StyledSpan>{props.like} Like</StyledSpan>
        </IconsWrapper>
      </StyledTextWrapper>
    </div>
  );
};

export default Card;

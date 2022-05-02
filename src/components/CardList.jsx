import styled from 'styled-components';
import Card from './Card';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

const foodList = [
  {
    id: 1,
    image: 'img/food-img-1.jpg',
    category: 'Pasta',
    title: 'Spiced Pork and Pasta',
    rating: 0,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur ducimus voluptas beatae.',
    time: 45,
    comments: 0,
    like: 3,
  },
  {
    id: 2,
    image: 'img/food-img-2.jpg',
    category: 'Drink',
    title: 'Some other food',
    rating: 0,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur ducimus voluptas beatae.',
    time: 55,
    comments: 6,
    like: 5,
  },
  {
    id: 3,
    image: 'img/food-img-3.jpeg',
    category: 'Drink',
    title: 'Some more food',
    rating: 0,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur ducimus voluptas beatae.',
    time: 30,
    comments: 1,
    like: 1,
  },
  {
    id: 4,
    image: 'img/food-img-4.jpg',
    category: 'Pasta',
    title: 'Food',
    rating: 0,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur ducimus voluptas beatae.',
    time: 40,
    comments: 4,
    like: 5,
  },
  {
    id: 5,
    image: 'img/food-img-5.jpg',
    category: 'Pasta',
    title: 'Some kind of food',
    rating: 0,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur ducimus voluptas beatae.',
    time: 35,
    comments: 0,
    like: 2,
  },
  {
    id: 6,
    image: 'img/food-img-6.jpg',
    category: 'Some kind of drink',
    title: 'Food',
    rating: 0,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur ducimus voluptas beatae.',
    time: 55,
    comments: 0,
    like: 3,
  },
];

const CardList = () => {
  return (
    <StyledDiv>
      {foodList.map((food) => (
        <Card
          key={food.id}
          image={food.image}
          category={food.category}
          title={food.title}
          rating={food.rating}
          text={food.text}
          comments={food.comments}
          like={food.like}
          time={food.time}
        />
      ))}
    </StyledDiv>
  );
};

export default CardList;

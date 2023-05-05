import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  margin: 10px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;
const MainDetailsView = styled.View`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between
`
const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 200px;
  resize-mode: contain;
`;

const DetailsContainer = styled.View`

`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const CatograyTitle = styled.Text`
  font-size: 15px;
`
const Price = styled.Text`
  font-size: 16px;
`;

const ProductCard = ({ product }) => {
  return (
    <Container>
      <ImageContainer>
        <ProductImage source={{ uri: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-1000x1000.jpg' }} />
      </ImageContainer>
      {/* <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      </View> */}
      <MainDetailsView>
      <DetailsContainer>
        <Title>Watch sk</Title>
        <CatograyTitle>category</CatograyTitle>
        <Price>$20</Price>
      </DetailsContainer>
      <DetailsContainer>
       <Text>Add</Text>
      </DetailsContainer>
      </MainDetailsView>
    </Container>
  );
};

export default ProductCard;

import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { Snackbar } from "react-native-paper";
import { MovieSearchContext } from "../context/movie.search.context";

const CardContainer = styled.View`
  background-color: white;
  flex-direction: row;
  border-radius: 5px;
`;

const MoviePoster = styled.Image`
  width: 180px;
  height: 300px;
  border-radius: 5px;
`;

const RightContent = styled.View`
  flex-shrink: 1;
`;

const MovieTitle = styled.Text`
  font-size: 18px;
  font-weight: 400;
  margin: 5px;
`;
const MovieRelease = styled.Text`
  margin: 5px;
  font-weight: 300;
`;

const LabelButton = styled.TouchableOpacity`
  position: absolute;
  right: 3px;
  bottom: 5px;
  height: 30px;
  width: auto;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: blue;

  border-radius: 5px;
`;

const LabelButtonText = styled.Text`
  font-size: 18px;
  color: white;
`;

const LabelContainer = styled.View`
  position: absolute;
  right: 100px;
  bottom: 30px;
  background-color: yellow;
  height: 30px;
  width: 60px;
  justify-content: center;
  align-items: center;
  display: ${(prop) => (prop.display ? null : "none")};
`;
const LabelText = styled.Text``;

const EmptyListText = styled.Text`
  text-align: center;
  font-size: 18px;
`;

export const MovieCard = () => {
  const { movieSearch, error } = useContext(MovieSearchContext);
  const [labelVisible, setLabelVisible] = useState(false);

  const handlePressButton = () => {
    setLabelVisible(!labelVisible);
  };

  if (error || !movieSearch) {
    console.log(error);
    return <EmptyListText>No result</EmptyListText>;
  }
  return (
    <CardContainer>
      <MoviePoster
        source={{
          uri: movieSearch.poster,
        }}
        resizeMode="cover"
      />
      <RightContent>
        <MovieTitle>{movieSearch.title}</MovieTitle>
        <MovieRelease>{`Year of Release: ${movieSearch.year}`}</MovieRelease>
        <LabelButton onPress={handlePressButton} activeOpacity={1}>
          <LabelButtonText>Display Label</LabelButtonText>
        </LabelButton>
        <LabelContainer display={labelVisible}>
          <LabelText>A Label</LabelText>
        </LabelContainer>
      </RightContent>
    </CardContainer>
  );
};

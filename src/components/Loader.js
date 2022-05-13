import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

const LoaderContainer = styled.View`
  position: absolute;
  top: 35%;
  left: 50%;
`;
const Indicator = styled(ActivityIndicator)`
  margin-left: -15px;
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <Indicator size={50} animating={true} color={Colors.blue300} />
    </LoaderContainer>
  );
};

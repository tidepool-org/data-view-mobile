import * as WebBrowser from "expo-web-browser";
import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';

import {
  Container,
  Header,
  Body,
  Title,
  Left,
  Right,
  Content,
  Text,
  Button,
} from "native-base";

export default class DataScreen extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Data</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Data from Jason</Text>
        </Content>
      </Container>
    );
    
  }
}

DataScreen.navigationOptions = {
  header: null,
};

function tidepoolLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://tidepool.org/'
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});

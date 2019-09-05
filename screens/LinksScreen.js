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

export default class LinksScreen extends React.Component {

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
          <Button
            block
            onPress={tidepoolLearnMorePress}
            style={[styles.button]}
          >
            <Text>Learn More About Tidepool</Text>
          </Button>
          <Button
            success
            block
            onPress={() => this.props.navigation.navigate("HomeStack")}
            style={[styles.button]}
          >
            <Text>Home</Text>
          </Button>
        </Content>
      </Container>
    );
    
  }
}

LinksScreen.navigationOptions = {
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

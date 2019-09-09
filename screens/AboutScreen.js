import * as WebBrowser from "expo-web-browser";
import React from 'react';
import { SafeAreaView, StyleSheet, View } from "react-native";

import {
  StyleProvider,
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

import getTheme from "../native-base-theme/components";
import commonColor from "../native-base-theme/variables/commonColor";

import { TextTitle } from "../components/TextTitle";
import { TextMidTitle } from "../components/TextMidTitle";
import { TextSubTitle } from "../components/TextSubTitle";

export default class AboutScreen extends React.Component {
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <StyleProvider style={getTheme(commonColor)}>
          <Container>
            <Header>
              <Left />
              <Body>
                <Title>About</Title>
              </Body>
              <Right />
            </Header>

            <Content padder>
              <Text style={{ color: "#4f6a92" }}>
                Tidepool is a nonprofit organization dedicated to making
                diabetes data more accessible, actionable, and meaningful for
                people with diabetes, their care teams, and researchers.
              </Text>
              <TextMidTitle title="We believe that connected data leads to better decision-making" />

              <Text style={{ color: "#4f6a92" }}>
                Tidepool’s free software liberates data from diabetes devices,
                and places it in context of the real world. Tidepool is designed
                to help you discover insights and bring context to your diabetes
                management. And, to help make your data more actionable, we make
                it easy to share your data with anyone you choose.
              </Text>
              <View style={{ flex: 1, justifyContent: "flex-end", paddingTop: 20 }}>
                <Button block onPress={learnMoreAboutTidepoolPress}>
                  <Text>Go to Tidepool.org</Text>
                </Button>
              </View>
            </Content>
          </Container>
        </StyleProvider>
      </SafeAreaView>
    );
  }
}
AboutScreen.navigationOptions = {
  header: null,
};

  function learnMoreAboutTidepoolPress() {
    WebBrowser.openBrowserAsync(
      "https://www.google.com"
    );
  }

  const styles = StyleSheet.create({
    button: {
      marginTop: 10,
    },
  });

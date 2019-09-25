import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  ActivityIndicator,
} from "react-native";
import data from "../data.json";

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
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      dataSource: [],
    };

    this.useLocalData = true;
  }

  componentDidMount() {
    if (this.useLocalData) {
      this.setState({
        isLoading: false,
        dataSource: data.charactersBasic,
      });
    } else {
      return fetch("https://potterverse.herokuapp.com/data/characters_basic")
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          this.setState({
            isLoading: false,
            dataSource: responseJson.charactersBasic,
          });
        })
        .catch(error => {
          console.log("error");
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <Container>
        <Content padder>
          <FlatList
            style={{ paddingTop: 50 }}
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <Text style={styles.item}>
                {item.name}, {item.id}, {item.house}{" "}
              </Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </Content>
      </Container>
    );
  }
}

DataScreen.navigationOptions = {
  header: null,
};

function tidepoolLearnMorePress() {
  WebBrowser.openBrowserAsync("https://tidepool.org/");
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
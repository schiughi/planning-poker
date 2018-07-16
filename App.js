import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import { ButtonGroup } from 'react-native-elements'; 
// You can import from local files
import NumberCard from './components/NumberCard';

// or any pure javascript modules available in npm
// Version can be specified in package.json

export default class App extends Component {
  constructor(props) {
    super(props)
    this.buttons = ["0", "1","2", "3", "5", "8", "13", "21", "?"]

    this.state = {
      selectedIndex: 0
    }
  }

  onChange = (selectedIndex) => {
    this.setState({ selectedIndex })
  }

  get num() {
    return this.buttons[this.state.selectedIndex]
  }

  render() {
    const { selectedIndex } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Planning Poker
        </Text>
        <NumberCard num={this.num} />
        <ButtonGroup
              selectedIndex={selectedIndex}
              onPress={this.onChange}
              buttons={this.buttons}
              containerStyle={{height: 100}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

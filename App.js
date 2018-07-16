import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import Number from './components/Number';

// or any pure javascript modules available in npm
import { Card, Button } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num: "1" };
  }
  onClick = (num) => {
    this.setState({
      num
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Planning Poker
        </Text>
        <Card title="My estimation is ...">
          <Number num={this.state.num} />
        </Card>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button title="1" containerViewStyle={{ width: '12%', margin: 5 }} onPress={() => this.onChange("1")} />
          <Button title="3" containerViewStyle={{ width: '12%', margin: 5 }} onPress={() => this.onChange("3")} />
          <Button title="5" containerViewStyle={{ width: '12%', margin: 5 }} onPress={() => this.onChange("5")} />
          <Button title="8" containerViewStyle={{ width: '12%', margin: 5 }} onPress={() => this.onChange("8")} />
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button title="13" containerViewStyle={{ width: '12%', margin: 5 }} onPress={() => this.onChange("13")} />
          <Button title="21" containerViewStyle={{ width: '12%', margin: 5 }} onPress={() => this.onChange("21")} />
          <Button title="?" containerViewStyle={{ width: '12%', margin: 5 }} onPress={() => this.onChange("?")} />
          <Button title="0" containerViewStyle={{ width: '12%', margin: 5 }} onPress={() => this.onChange("0")} />
        </View>
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

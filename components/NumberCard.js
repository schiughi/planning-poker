import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';

export default class NumberCard extends Component {
  render() {
    return (
      <Card title="My estimation is ..." on>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            {this.props.num}
          </Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    width: '100%',
    marginTop: 0,
    fontSize: 200,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});

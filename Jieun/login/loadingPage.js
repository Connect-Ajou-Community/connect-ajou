import React, {Component} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.loading}>
        <Text style={styles.loading_connectajou}>Connect{'\n'}AJOU</Text>
      </SafeAreaView>
    );
  }
}

Loading.propTypes = {};

Loading.defaultProps = {};

const styles = StyleSheet.create({
  loading: {
    opacity: 1,
    position: 'relative',
    backgroundColor: 'rgba(89, 149, 221, 1)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading_connectajou: {
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(246, 248, 248, 1)',
    fontSize: 60,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'center',
    lineHeight: 100,
  },
});

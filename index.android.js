/**
 * Shadowed buttons in React Native (Android)
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  buttonBody: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '95%',
    zIndex: 2,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '95%',
    zIndex: 1,
    borderRadius: 5
  }
});

export default class ShadowedButton extends Component {
  constructor(props) {
      super(props);
      this.state = {isPressed: false};
    }
    render() {
      return (
        <TouchableHighlight 
          underlayColor="transparent" 
          onPress={this.props.onPress}
          onPressIn={() => this.setState({isPressed: true})} 
          onPressOut={() => this.setState({isPressed: false})}
          delayPressIn={0}
          delayPressOut={0}
          >
          <View style={this.props.style}>
            <View style={[  styles.buttonBody, 
                            {
                              borderRadius: this.props.borderRadius, 
                              height: ((100 - this.props.shadowHeight).toString() + "%"),  
                              backgroundColor: this.state.isPressed ? this.props.shadowColor : this.props.buttonColor
                            } 
                        ]}>
            <Text style={ { fontSize: this.props.fontSize, color: this.props.fontColor, fontFamily: this.props.fontFamily} }>
                {this.props.text}
            </Text>
            </View>
            <View style={[  styles.buttonShadow, 
                            {
                              borderRadius: this.props.borderRadius, 
                              backgroundColor: this.state.isPressed ? this.props.buttonColor : this.props.shadowColor
                            } 
                        ]}>
            </View>
          </View>
        </TouchableHighlight>
      );
  }
};

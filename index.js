/**
 * Shadowed buttons in React Native (Android and iOS)
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Color from 'color';

export default class ShadowedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
    };
  }

  render() {
    return (
      <TouchableHighlight 
        activeOpacity={1}
        underlayColor="transparent" 
        onPress={this.props.onPress}
        onPressIn={() => this.setState({isPressed: true})} 
        onPressOut={() => this.setState({isPressed: false})}
        delayPressIn={0}
        delayPressOut={0}
        >
        <View style={[ { 
                          backgroundColor: Color(this.props.color).darken(0.25).string(), 
                          marginTop: this.state.isPressed ? this.props.shadowHeight: 0, 
                          borderRadius: StyleSheet.flatten(this.props.style).borderRadius,
                          borderBottomLeftRadius: StyleSheet.flatten(this.props.style).borderBottomLeftRadius,
                          borderBottomRightRadius: StyleSheet.flatten(this.props.style).borderBottomRightRadius,
                          borderTopLeftRadius: StyleSheet.flatten(this.props.style).borderTopLeftRadius,
                          borderTopRightRadius: StyleSheet.flatten(this.props.style).borderTopRightRadius,
                        }
                      ]}>
          <View style={ [
                          this.props.style, 
                          { 
                            backgroundColor: this.props.color, 
                            justifyContent: 'center',
                            alignItems: 'center', 
                            marginBottom: this.state.isPressed ? 0 : this.props.shadowHeight
                          }
                        ] }>
            <Text style={ this.props.fontStyle }>
                {this.props.title}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
};

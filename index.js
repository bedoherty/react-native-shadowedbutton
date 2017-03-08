/**
 * Shadowed buttons in React Native (Android)
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Color from 'color';

import Svg,{
    G,
    Path
} from 'react-native-svg';

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  buttonBody: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonShadow: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 1
  }
});

export default class ShadowedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      width: 400,
      height: 100
    };
  }

  measureView(event) {
    console.log(event);
    this.setState({
      width: event.nativeEvent.layout.width,
      height: event.nativeEvent.layout.height
    });
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
        <View style={this.props.style}
              collapsable={false}
              renderToHardwareTextureAndroid={true}
              onLayout={(event) => this.measureView(event)}>
          <View style={styles.textContainer}>
            <Text style={ { fontSize: this.props.fontSize, color: this.props.fontColor, fontFamily: this.props.fontFamily} }>
                {this.props.text}
            </Text>
          </View>
          {(this.props.svgPath && this.props.svgViewbox) ? (
            <View style={[styles.buttonBody, {top: this.state.isPressed ? (this.props.shadowHeight.toString() + "%") : 0}]}>
              <Svg height={(this.state.height * (100 - this.props.shadowHeight) / 100)} 
                width={this.state.width}
                viewBox={this.props.svgViewbox}
                preserveAspectRatio="none">
                <Path fill={this.props.buttonColor} d={this.props.svgPath}/>
              </Svg>
            </View>
          ) : (
            <View style={[  styles.buttonBody, 
                          {
                            top: this.state.isPressed ? (this.props.shadowHeight.toString() + "%") : 0,
                            borderRadius: this.props.borderRadius, 
                            height: ((100 - this.props.shadowHeight).toString() + "%"),  
                            width: "100%",
                            backgroundColor: this.props.buttonColor
                          } 
                      ]} />
          )}
          {(this.props.svgPath && this.props.svgViewbox) ? (
            <View style={styles.buttonShadow}>
              <Svg height={(this.state.height * (100 - this.props.shadowHeight) / 100)} 
                width={this.state.width}
                viewBox={this.props.svgViewbox}
                preserveAspectRatio="none">
                <Path fill={Color(this.props.buttonColor).darken(0.25).hex()} d={this.props.svgPath}/>
              </Svg>
            </View>
          ) : (
            <View style={[  styles.buttonShadow, 
                          {
                            borderRadius: this.props.borderRadius, 
                            height: ((100 - this.props.shadowHeight).toString() + "%"),  
                            width: "100%",
                            backgroundColor: Color(this.props.buttonColor).darken(0.25).hex().string()
                          } 
                      ]} />
          )}
        </View>
      </TouchableHighlight>
    );
  }
};

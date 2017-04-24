> Shadowed Buttons for React Native

Once the package is installed, you can use it simply via:

```
import ShadowedButton from 'react-native-shadowedbutton';

const styles = StyleSheet.create({
  testButton: {
    borderRadius: 5,
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 30,
    paddingBottom: 30,
  },
  testButtonFont: {
    color: 'white',
    fontSize: 14,
  }
});

<ShadowedButton
          style={ styles.testButton }
          fontStyle = {styles.testButtonFont}
          color="#f05926"
          title="Test Button"
          shadowHeight={10}
          />
```

This builds an orange button with white font size 14.  The buttons dimensions can be controlled via the style prop.

![Sample Button Display](http://i.imgur.com/5lmBMVa.png "Some sample buttons")

ShadowedButton takes the following props

* style - Button styles
* fontStyle - StyleSheet for the inner text element
* color - Main color of the button
* title - Text to display on the button
* shadowHeight - Integer value that is the percent of the view that should be shadow
* onPress - On press handler for the button

Changelog: 

0.3.0
* Complete rework of the component, now more resilient and the component properties are more in line with React Native standard Button.  Also addressed the issue of the component not having a real proper "min" height and width of the text it contains.

0.2.3
* Fixes after SVG removal left some bugs, updates to color code, next revision will be about managing layout properties with more magic and less manual work

0.2.2
* Reverted SVG additions, code was performing inconsistently across platforms as well as causing memory usage spikes on Android

0.2.1
* First draft of SVG based path backgrounds implemented, documentation/testing pending

0.2.0
* Updated readme to reflect the removal of shadowColor prop

0.1.9
* Bugfixes
* iOS and Android working
* Opacity removed

0.1.7
* iOS stuff

0.1.6
* Shadow color procedurally generated
* Fixed bug with shadow showing when pressed
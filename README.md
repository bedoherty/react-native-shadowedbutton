> Shadowed Buttons for React Native

Once the package is installed, you can use it simply via:

```
import ShadowedButton from 'react-native-shadowedbutton';

<ShadowedButton
          style={ {flex: 0, height: 50, width: 400} }
          buttonColor="#f05926"
          fontColor="white"
          fontSize={28}
          fontFamily="brandon grotesque"
          text="Test Button"
          shadowHeight={12}
          borderRadius={5}
        />
```

This builds an orange button with white, brandon grotesque font size 28.  The buttons dimensions can be controlled via the style prop.

![Sample Button Display](http://i.imgur.com/5lmBMVa.png "Some sample buttons")

ShadowedButton takes the following props

* style - Style for the button container
* buttonColor - Main color of the button
* fontColor - Font color
* fontSize - Font size
* fontFamily - Font family
* text - Text to display on the button
* onPress - On press handler for the button
* borderRadius - Border radius for the button and its shadow
* shadowHeight - Integer value that is the percent of the view that should be shadow.

Changelog: 

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
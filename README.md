> Shadowed Buttons for React Native

Once the package is installed, you can use it simply via:

```
import ShadowedButton from 'react-native-shadowedbutton';

<ShadowedButton
          style={ {flex: 0, height: 50, width: 400} }
          buttonColor="#f05926"
          shadowColor="#c2513c"
          fontColor="white"
          fontSize={28}
          fontFamily="brandon grotesque"
          text="Test Button"
        />
```

This builds an orange button with white, brandon grotesque font size 28.  The buttons dimensions can be controlled via the style prop.

ShadowedButton takes the following props

* style - Style for the button container
* buttonColor - Main color of the button
* shadowColor - Color of the button's shadow
* fontColor - Font color
* fontSize - Font size
* fontFamily - Font family
* text - Text to display on the button
* onPress - On press handler for the button
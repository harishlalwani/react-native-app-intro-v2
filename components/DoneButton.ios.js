import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

export const DoneButton = ({
  styles, onDoneBtnClick, onNextBtnClick,
  rightTextColor, isDoneBtnShow,
  doneBtnLabel, nextBtnLabel,
  doneFadeOpacity, skipFadeOpacity, nextOpacity,
  allowFontScaling, fontSize
}) => {
  return (
    <View style={styles.btnContainer}>
      <Animated.View style={[styles.full, { height: 0 }, {
        opacity: doneFadeOpacity,
        transform: [{
          translateX: skipFadeOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 20],
          }),
        }],
      }]}
      >
        <View style={styles.full}>
          <Text allowFontScaling={allowFontScaling} style={[styles.controllText, {
             color: rightTextColor, paddingRight: 30, fontSize
          }]}>
            {doneBtnLabel}
          </Text>
        </View>
      </Animated.View>
      <Animated.View style={[styles.full, { height: 0 }, { opacity: nextOpacity }]}>
        <TouchableOpacity style={styles.full}
          onPress={ isDoneBtnShow ? onDoneBtnClick : onNextBtnClick}>
         <Text allowFontScaling={allowFontScaling} style={[styles.nextButtonText, { color: rightTextColor, fontSize }]}>
          {nextBtnLabel}
        </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default DoneButton

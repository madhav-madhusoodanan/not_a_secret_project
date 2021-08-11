import React, {useState} from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {Theme} from '../../constants/appTheme';
import {Dimensions} from 'react-native';

interface PropTypes {
  text: string;
  containerStyle?: ViewStyle;
  targetLines?: number;
}

const screenWidth = Math.round(Dimensions.get('window').width);

const TextInline = (props: PropTypes) => {
  const [textShown, setTextShown] = useState(false); //To show your remaining Text
  const [lengthMore, setLengthMore] = useState(false); //to show the "Read more & Less Line"
  const [triggerTextLocation, setTriggerTextLocation] = useState({
    top: 0,
    right: 0,
  });

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = e => {
    const {lines} = e.nativeEvent;
    if (lines && Array.isArray(lines) && lines.length > 0) {
      let tempTxtLocaation = {
        top: (lines.length - 1) * lines[0].height,
        right: screenWidth - lines[lines.length - 1].width - 10,
      };
      setTriggerTextLocation(tempTxtLocaation);
      /* @ts-ignore */
      setLengthMore(lines.length >= props.targetLines);
    }
  };

  return (
    <View style={[styles.mainBody, props.containerStyle]}>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : props.targetLines || 1}
        style={styles.txtStyle}>
        {props.text || ''}
      </Text>
      {lengthMore ? (
        <Text
          onPress={toggleNumberOfLines}
          style={[
            styles.lessMoreStyle,
            {
              position: 'absolute',
              backgroundColor: 'white',
              right: triggerTextLocation.right,
              top: triggerTextLocation.top,
            },
          ]}>
          {textShown ? ' less' : '... more'}
        </Text>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  mainBody: {
    // marginTop: 15,
  },
  txtStyle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Theme.colors.text,
    flex: 1,
  },
  lessMoreStyle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Theme.colors.primary,
  },
});

export default TextInline;

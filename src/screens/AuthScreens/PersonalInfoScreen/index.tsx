import React, {useState, useEffect} from 'react';
import {View, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import {Text, Headline, ActivityIndicator} from 'react-native-paper';
import {View as MView, Image as MImage, AnimatePresence} from 'moti';
import {Easing} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import NavButton from '../../../components/Buttons/NavigationButton';
import {loginuser} from '../../../store/Actions/AuthActions';
import {data} from '../../../constants/PersonalItemData';
import ImageModal from '../../../components/Profile/ImageModal';

const {width, height} = Dimensions.get('screen');
const _width = width * 0.9;
const _height = _width * 0.6;
const PersonalInfoScreen = () => {
  const route = useRoute();
  const auth = useSelector((state: any) => state.Auth);
  const dispatch = useDispatch();

  // @ts-ignore
  const [values, setValues] = useState(route.params.values);
  const [imageData, setImageData] = useState(null)
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const initialUri =
    'https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_400x400.jpg';
  const [uri, setUri] = useState(initialUri);

  const [bg, setBg] = useState(data[0].background);
  const [gender, setGender] = useState(data[0].gender);

  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    let final = {...values, gender, isNew: true};
    const data = new FormData();
    // @ts-ignore
    if(imageData && uri){
      data.append('file', imageData);
    }
    for(let item in final){
        data.append(item, final[item])
    }
    
    dispatch(loginuser(data, navigate));
    // @ts-ignore
    navigate('Home');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Headline numberOfLines={2} style={styles.title}>
        Choose your Gender {'\n'}and Profile Photo
      </Headline>
      <View style={styles.card}>
        <AnimatePresence>
          <MView
            from={{opacity: 0, scale: 1}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 2}}
            transition={{duration: 1000, type: 'timing'}}
            key={bg}>
            <MImage
              source={{uri: bg}}
              from={{
                rotate: '0deg',
                scale: 1.8,
              }}
              animate={{
                rotate: '360deg',
                scale: 3,
              }}
              transition={{
                loop: true,
                type: 'timing',
                duration: 8000,
                easing: Easing.linear,
              }}
              blurRadius={60}
              style={inlineStyle.mImageOne}
            />
          </MView>
        </AnimatePresence>
        <View style={inlineStyle.viewOuterOne}>
          <View style={inlineStyle.viewInnerOne}>
            <View style={inlineStyle.viewInnerInnerOne}>
              <Text style={inlineStyle.textOne}>
                {/* {card.amount} */}
                {values.firstName}
              </Text>
              <Text style={inlineStyle.textTwo}>{values.lastName}</Text>
            </View>
            <Text style={inlineStyle.textThree}>{gender}</Text>
          </View>
          <View style={inlineStyle.viewInnerTwo}>
            {/* @ts-ignore */}
            <TouchableOpacity onPress={() => setVisible(!visible)}>
              {!loading ? <MImage
                source={{
                  uri,
                }}
                style={inlineStyle.mImageTwo}
              /> :
              <ActivityIndicator animating color='#fff' />}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={inlineStyle.viewOuterTwo}>
        {data.map((each, i) => {
          // or userGender.map {for individual gender images but issue with linked background image}
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                setGender(each.gender);
                setBg(each.background);
              }}>
              <MImage
                source={{uri: each.avatar}}
                from={{borderColor: 'rgba(0,0,0,0)'}}
                animate={{
                  borderColor:
                    each.background === bg ? 'rgba(0,0,0,.5)' : 'rgba(0,0,0,0)',
                }}
                style={inlineStyle.mImageThree}
                /* @ts-ignore */
                transition={{duration: 400}}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <NavButton
        onPress={submitHandler}
        sending={auth.loading}
        text="Continue"
      />
      <ImageModal
        setUri={setUri}
        setVisible={setVisible}
        visible={visible}
        setLoading={setLoading}
        setImageData={setImageData}
      />
    </SafeAreaView>
  );
};

export default PersonalInfoScreen;

const inlineStyle = StyleSheet.create({
  mImageOne: {
    width: _width * 1.5,
    height: _height * 1.5,
    resizeMode: 'cover',
    position: 'absolute',
    alignSelf: 'center',
  },
  mImageTwo: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 80,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  mImageThree: {
    marginRight: 10,
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  viewOuterOne: {flexDirection: 'row', flex: 1, marginVertical: 0},
  viewOuterTwo: {flexDirection: 'row', marginTop: 20, marginBottom: 170},
  viewInnerOne: {flex: 1, padding: 10},
  viewInnerTwo: {
    flex: 1,
    alignSelf: 'center',
    // backgroundColor: 'yellow',
    padding: 10,
  },
  viewInnerInnerOne: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
  },
  textOne: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Inter-SemiBold',
  },
  textTwo: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Inter-SemiBold',
  },
  textThree: {
    color: 'white',
    // backgroundColor: 'green',
    textTransform: 'uppercase',
    fontFamily: 'Gilroy-Bold',
    opacity: 0.6,
    marginTop: 20,
  },
  avatar: {
    paddingTop: 20,
    height: 100,
    width: 100,
    borderRadius: 100,
    padding: 20,
  },

  options: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

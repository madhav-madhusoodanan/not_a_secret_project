import React, {useState, useRef, useEffect, useCallback} from 'react';
import {View, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import {Text, Headline} from 'react-native-paper';
import {View as MView, Image as MImage, AnimatePresence} from 'moti';
import {Easing} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import NavButton from '../../../components/Buttons/NavigationButton';
import {loginuser} from '../../../store/Actions/AuthActions';
const {width, height} = Dimensions.get('screen');
import axios from '../../../constants/api';
import EditProfileImage from '../../../components/Profile/EditProfileImage';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
var cloudinary = require('cloudinary');

const _width = width * 0.9;
const _height = _width * 0.6;
const data = [
  {
    gender: 'male',
    background: `https://images.pexels.com/photos/1912832/pexels-photo-1912832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
    avatar: `https://i.ibb.co/VMyMmwx/gender-male.png`,
  },
  {
    gender: 'female',
    background: `https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`,
    avatar: `https://i.ibb.co/R4JbcMJ/gender-female.png`,
  },
  {
    gender: 'other',
    background: `https://images.pexels.com/photos/2887710/pexels-photo-2887710.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260`,
    avatar: `https://i.ibb.co/nnwYSrB/gender-third.png`,
  },
];
export default function ColorfulCard() {
  const [image, setImage] = useState(
    'https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_400x400.jpg',
  );
  const [modalOpen, setModalOpen] = useState(false);
  const route = useRoute();
  const auth = useSelector((state: any) => state.Auth);
  const dispatch = useDispatch();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // @ts-ignore
  const [values, setValues] = useState(route.params.values);
  const {navigate, goBack} = useNavigation();
  const submitHandler = () => {
    dispatch(loginuser({...values, gender, isNew: true}, navigate));
    // start of experimental image sending
    axios.post('/dummy', {file: image});
    //
    console.log({...values, gender, isNew: true});
    // @ts-ignore
    // navigate('Home');
  };
  const modalHandler = () => {
    setModalOpen(!modalOpen);
    modalOpen
      ? bottomSheetModalRef.current?.expand()
      : bottomSheetModalRef.current?.close();
  };

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
  });

  const [bg, setBg] = React.useState(data[0].background);
  const [gender, setGender] = useState(data[0].gender);
  console.log({myerr: auth.error});
  useEffect(() => {
    console.log(route.params);
  }, []);
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
            <TouchableOpacity onPress={modalHandler}>
              <MImage
                source={{
                  uri: image,
                }}
                style={inlineStyle.mImageTwo}
              />
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
      <EditProfileImage
        setImage={setImage}
        bottomSheetModalRef={bottomSheetModalRef}
      />
      <NavButton
        onPress={submitHandler}
        sending={auth.loading}
        text={'Continue'}
      />
    </SafeAreaView>
  );
}

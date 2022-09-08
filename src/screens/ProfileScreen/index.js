import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  TextInput,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import Storage from '@react-native-async-storage/async-storage'
import {useDispatch, useSelector} from 'react-redux';
import {request_get_info, request_edit_info} from '../../redux/actions/index';
import { logout} from '../../redux/actions';
import * as Navigation from '../../navigation/RootNavigation'

const bgImg = {
  uri: 'https://st3.depositphotos.com/7247698/18888/i/450/depositphotos_188885346-stock-photo-sport-shoes-art-design-banner.jpg',
};
const avtImg = {
  uri: 'https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png',
};

function ProfileScreen() {
  const {data, loading} = useSelector(state => state.authReducers);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(data?.name);
  const [phone, setPhone] = useState(data?.phone);
  const [email, setEmail] = useState(data?.email);
  const [userId, setUserId] = useState(null);

  const dispatch = useDispatch();
  const getUser = async () => {
    const valueString = await Storage.getItem('currentUser');
    const value = JSON.parse(valueString);
    setUserId(value.userId);
    if(value.userId) {
      await dispatch(request_get_info({userId: value.userId}));
    }
  };

  useEffect(() => {
    getUser();
  }, [])

  const onGoToMyOrder = () => {
    Navigation.navigate("MyOrder")
  }

  const onChangeText = (text, type) => {
    switch(type) {
      case 'name':
        setName(text);
        break;
      case 'email':
        setEmail(text);
        break;
      default:
        setPhone(text);
    }
  };

  const onUpdate = () => {
    setModalVisible(false)
    dispatch(request_edit_info({userId, name, phone, email}))
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgImg}
        resizeMode="cover"
        style={styles.bgImg}/>
      <View style={styles.dFlexBetween}>
        <View style={styles.avtView}>
          <Image style={styles.avtImg} source={avtImg} />
        </View>
        <View style={styles.viewInfo}>
          {/* <Text style={styles.info}>Please login to see more!</Text> */}
          {loading ?
            <ActivityIndicator
              size="large"
              color="#6396c9"
              style={styles.loading}
            /> :
            <View>
              <Text style={styles.info}>Name: {data?.name}</Text>
              <Text style={styles.info}>Email: {data?.email}</Text>
              <Text style={styles.info}>Phone: {data?.phone}</Text>
              <TouchableOpacity style={styles.myOrders} onPress={onGoToMyOrder}>
                <Text style={styles.txtMyOrders}>My orders</Text>
              </TouchableOpacity>
            </View>
          }
        </View>
      </View>
      <TouchableOpacity
        style={styles.iconEdit}
        onPress={() => setModalVisible(true)}>
        <Icon name="account-edit-outline" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomView} onPress={() => dispatch(logout())}>
        <Text style={styles.textStyle}>Logout</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <TouchableWithoutFeedback style={styles.emptyView} onPress={() => setModalVisible(false)}>
          <View style={styles.emptyView}/>
        </TouchableWithoutFeedback>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.dFlexBetween}>
              <Text style={styles.modalText}>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(e) => onChangeText(e, 'name')}
                value={name}
              />
            </View>
            <View style={styles.dFlexBetween}>
              <Text style={styles.modalText}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={(e) => onChangeText(e, 'email')}
                value={email}
              />
            </View>
            <View style={styles.dFlexBetween}>
              <Text style={styles.modalText}>Phone</Text>
              <TextInput
                style={styles.input}
                onChangeText={(e) => onChangeText(e, 'phone')}
                value={phone}
              />
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={onUpdate}>
              <Text style={styles.textStyle}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ProfileScreen;

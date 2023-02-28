import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/actions/countAction';

/**
 * Home Screen
 */
const HomeScreen = () => {

  // thêm nào
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count.count);

  const handleIncreament = () => {
    console.log('Tăng điểm');
    dispatch(increment());
  };

  const handleDecreament = () => {
    console.log('Giảm điểm'); 
    dispatch(decrement());
  };

  return (
    <View style={{flex: 1}}>
      <View style={{alignItems: 'center', backgroundColor: '#cc3333', padding: 10}}>
        <Text style={styles.textHeader}>Demo Redux</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title_text}>Count</Text>
        <Text style={styles.counter_text}>{count}</Text>

        <TouchableOpacity onPress={handleIncreament} style={styles.btn}>
          <Text style={styles.btn_text}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleDecreament}
          style={{...styles.btn, backgroundColor: '#6e3b3b'}}>
          <Text style={styles.btn_text}> - </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

/**
 * Style
 */
const styles = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50,
  },
  title_text: {
    fontSize: 40,
    fontWeight: '900',
    marginBottom: 55,
  },
  counter_text: {
    fontSize: 35,
    fontWeight: '900',
    margin: 15,
    color: '#D64545',
  },
  btn: {
    backgroundColor: '#086972',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  btn_text: {
    fontSize: 23,
    color: '#fff',
  },
});

/**
 * Export
 */
export default HomeScreen;

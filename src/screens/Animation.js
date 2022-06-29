import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import WeekPicker from '../Companent/WeekPicker';
import moment from 'moment';

export default function Animation() {
  return (
    <WeekPicker
      // initialRange={['2022-06-28', '2022-06-30']}
      initialRange={[
        moment(moment().day(1)).format('YYYY-MM-DD'),
        moment(moment().day(7)).format('YYYY-MM-DD'),
      ]}
      onSuccess={(s, e) => {
        console.log(s, e);
      }}
      theme={{markColor: '#e86319', markTextColor: 'white'}}
      style={styles.calendarWrapper}
      firstDay={1}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,

    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarWrapper: {
    position: 'absolute',
    zIndex: 99,
    width: '100%',
    borderRadius: 4,
  },
});

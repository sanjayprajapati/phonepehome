import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Alarm = () => {
  const [date, setDate] = useState(new Date());
  console.log(date);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        style={{borderRadius: 10, backgroundColor: '#222'}}
        modal
        open={open}
        date={date}
        theme="dark"
        mode="datetime"
        display="default"
        textColor="#000"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default Alarm;

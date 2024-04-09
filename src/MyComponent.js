// MyComponent.js

import React from 'react';
import { connect } from 'react-redux';
import { setObject } from './redux/actions';
import { Button, Text, TouchableOpacity, View } from 'react-native';

const MyComponent = ({ objectData, setObject }) => {
  const handleClick = () => {
    const objectToSave = { name: 'rana', age: 29 };
    setObject(objectToSave);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Object Data: {JSON.stringify(objectData)}</Text>
      <TouchableOpacity style={{ backgroundColor: 'red', padding: 20 }} onPress={handleClick}>
        <Text>Save Object</Text>
      </TouchableOpacity>
      <Button title="Save Object" onPress={handleClick} />
    </View>
  );
};

const mapStateToProps = state => ({
  objectData: state.counterReducer.objectData,
});

const mapDispatchToProps = {
  setObject,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
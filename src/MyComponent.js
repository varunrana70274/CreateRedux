// MyComponent.js

import React from 'react';
import {connect} from 'react-redux';
import {addToArray, saveString, setObject} from './redux/actions';
import {Button, Text, TouchableOpacity, View} from 'react-native';

const MyComponent = ({
  objectData,
  setObject,
  yourString,
  saveString,
  addToArray,
  dataArray,
}) => {
  const handleClick = () => {
    const objectToSave = 'fnfn';
    console.log(objectToSave);
    addToArray(objectToSave);
    // setObject(objectToSave);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 20, margin: 10}}
        onPress={() => handleClick()}>
        <Text>Save Object</Text>
      </TouchableOpacity>
      {dataArray?.map((item, index) => {
        return <Button title={item} />;
      })}
    </View>
  );
};

const mapStateToProps = state => ({
  objectData: state.counterReducer.objectData,
  yourString: state.counterReducer.yourString,
  dataArray: state.counterReducer.dataArray,
});

const mapDispatchToProps = {
  setObject,
  saveString,
  addToArray,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);

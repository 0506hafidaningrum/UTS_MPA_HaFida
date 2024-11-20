import React from 'react';
import { View, ScrollView } from 'react-native';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        <MateriFlexBox></MateriFlexBox>
        <PositionReactNative></PositionReactNative>
        <StylingReactNativeComponent></StylingReactNativeComponent>
      </ScrollView>
    </View>
  );
};

export default App;

import React from 'react';
import { View, ScrollView } from 'react-native';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';
import StylingReactNativeComponent from './StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <StylingReactNativeComponent></StylingReactNativeComponent> */}
        {/* <MateriFlexBox></MateriFlexBox> */}        
        <PositionReactNative></PositionReactNative>       
      </ScrollView>
    </View>
  );
};

export default App;

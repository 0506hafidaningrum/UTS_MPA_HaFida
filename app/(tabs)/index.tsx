import React from 'react';
import { View, ScrollView } from 'react-native';

import DuaTombol from './nomor3';
import ClassComponent from './nomer2/classkomponen';
import FunctionalComponent from './nomer2/functionalkomponen';
import DuaLayar from './nomor5';

const App = () => {
  return (
    <View>
      <ScrollView>
        <ClassComponent></ClassComponent>
        <FunctionalComponent></FunctionalComponent>
        <DuaTombol></DuaTombol>
        <DuaLayar></DuaLayar>
      </ScrollView>
    </View>
  );
};

export default App;

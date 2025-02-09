import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <Text style={styles.helloWorld}>리스닝 파트</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloWorld: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});


/*const questions = [
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\nあしたは [雨]ですか。',
      options: [
        { id: 1, text: 'ゆき' },
        { id: 2, text: 'はれ' },
        { id: 3, text: 'くもり' },
        { id: 4, text: 'あめ' },
      ],
      correctAnswer: 4,
    },
];
  
export default questions;
*/
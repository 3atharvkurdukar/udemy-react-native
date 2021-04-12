import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [text, setText] = useState(
    'Open up App.js to start working on your app!'
  );
  return (
    <View style={{ padding: 50 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextInput
          placeholder="Course Goal"
          style={{
            borderColor: '#f2f3f4',
            borderWidth: 2,
            borderRadius: 5,
            width: '80%',
            padding: 4,
          }}
        />
        <Button title="ADD" style={{ width: '20%' }} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});

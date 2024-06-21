import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch } from 'react-native';
import { ThemeContext } from '../../src/ThemeContexts';
import Keyboard from '../../src/Keyboard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'dark' ? styles.container : [styles.container, { backgroundColor: '#ffffff' }]}>
        <StatusBar style="auto" />
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <Keyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent:'flex-start',
    alignItems: 'center',
  },
});

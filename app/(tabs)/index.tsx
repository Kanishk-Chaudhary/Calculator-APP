import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Switch } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemeContext } from './ThemeContexts';
import CustomButton from './Button';

export default function Index() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <ThemedView style={theme === 'dark' ? styles.container : [styles.container, { backgroundColor: '#ffffff' }]}>
        <StatusBar style="auto" />
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        
      </ThemedView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
justifyContent:'center',
    alignItems: 'center',
  },
});

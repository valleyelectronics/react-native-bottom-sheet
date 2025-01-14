import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from '../../components/button';
import withModalProvider from '../withModalProvider';
import BackdropExample from '../modal/BackdropExample';

const RootScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        label="Navigate to Native Modal"
        // @ts-ignore
        onPress={() => navigate('NativeModal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

const NativeStack = createNativeStackNavigator();

export default withModalProvider(() => (
  <NativeStack.Navigator>
    <NativeStack.Screen
      name="Root"
      component={RootScreen}
      options={{ headerShown: false }}
    />
    <NativeStack.Screen
      name="NativeModal"
      component={BackdropExample}
      options={{
        presentation: 'fullScreenModal',
        headerShown: false,
      }}
    />
  </NativeStack.Navigator>
));

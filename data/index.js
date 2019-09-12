'use-strict';

import { AsyncStorage } from 'react-native';

export async function get(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    handleError(error);
  }
}

export async function set(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {}

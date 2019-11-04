import { Alert } from 'react-native';

export function handleError(error) {
  Alert.alert('An error occurred', error.message, [{ text: 'OK' }]);
}

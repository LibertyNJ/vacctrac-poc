'use-strict';

import { Alert } from 'react-native';

export default function handleError(error) {
  Alert.alert('An error occurred', error.message, [{ text: 'OK' }]);
}

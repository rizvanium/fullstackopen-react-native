import { Alert } from 'react-native';

const createAlert = (title, message, handleConfirmation) =>
  Alert.alert(title, message, [
    {
      text: 'No',
      onPress: () => {},
      style: 'cancel',
    },
    { text: 'Yes', onPress: () => handleConfirmation() },
  ]);

export default createAlert;

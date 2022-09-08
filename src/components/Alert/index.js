import {Alert} from 'react-native';

export default function WrappedAlert(type, message) {
  return new Promise(resolve => {
    Alert.alert(
      type,
      message,
      [
        {
          text: 'OK',
          onPress: function () {
            resolve();
          },
        },
      ],
      {
        cancelable: true,
        onDismiss: function () {
          resolve();
        },
      },
    );
  });
}

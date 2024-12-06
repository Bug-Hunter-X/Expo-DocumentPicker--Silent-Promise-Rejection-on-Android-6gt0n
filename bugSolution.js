The solution is to improve error handling.  Instead of simply handling the promise with a `.then` and `.catch`, we add more logging to understand *why* the promise rejected. 
```javascript
import * as DocumentPicker from 'expo-document-picker';

export default function App() {
  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({});
      console.log('Picked document:', result);
    } catch (error) {
      console.error('Error picking document:', error);
       //Optionally alert the user:
      Alert.alert('Error picking file', error.message || 'An unknown error occurred.');
    }
  };

  return (
    //UI components
  );
}
```
By adding a `console.error` and optionally alerting the user, we get a better indication of what went wrong.  In some cases the error will give more information, in other cases it might still just say 'An unknown error occurred', but this solution adds more helpful debugging tools.
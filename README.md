This repository demonstrates a bug in Expo's DocumentPicker API on Android. The promise returned by `DocumentPicker.getDocumentAsync()` sometimes rejects without providing an error message, making debugging challenging.  The solution involves adding more robust error handling and logging to help identify the cause of the silent rejection.  The bug is intermittent, so consistent reproduction may require multiple attempts.
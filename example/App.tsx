import { StyleSheet, Text, View } from 'react-native';

import * as BlueskyVideo from '@haileyok/bluesky-video';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{BlueskyVideo.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

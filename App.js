import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';

export default class App extends React.Component {
  onBuffer = () => {

  };

  onEnd = () => {

  };

  onError = () => {

  };

  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
        <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            source: {
              uri: 'http://ok5zjclbl.bkt.clouddn.com/huashi.mp4',
            },
          }}
          isPortrait={true}
          playFromPositionMillis={0}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

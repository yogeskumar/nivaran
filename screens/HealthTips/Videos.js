import React, { useState, useRef } from 'react';
import { View, Alert, StyleSheet, Text } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Icon } from 'react-native-elements';
import { Colors } from '../../Colors';
import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore'
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default function Videos({navigation}) {
  const [playing, setPlaying] = useState(false);
  const [isMute, setMute] = useState(false);
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const querysnapshot = await firestore().collection('videos').get();
    const allVideos = querysnapshot.docs.map(docsnap => docsnap.data());
    try {
      if (querysnapshot.docs[0]._exists) {
        setVideos(allVideos)
      } else {
        console.log("No such document!");
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, [])

  const controlRef = useRef();
  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
    if (state !== 'playing') {
      setPlaying(false);
    }
  };
  // const togglePlaying = () => {
  //   setPlaying((prev) => !prev);
  // };
  // const seekBackAndForth = (control) => {
  //   console.log('currentTime');
  //   controlRef.current?.getCurrentTime().then((currentTime) => {
  //     control === 'forward'
  //       ? controlRef.current?.seekTo(currentTime + 15, true)
  //       : controlRef.current?.seekTo(currentTime - 15, true);
  //   });
  // };
  // const muteVideo = () => setMute(!isMute);
  // const ControlIcon = ({ name, onPress }) => (
  //   < Icon onPress={onPress} name={name} size={40} color="#fff" />
  // );

  return (
    <View style={styles.container}>
      {
        videos.map(video => {
          return <View key={video.id} style={styles.video}>
                    <YoutubePlayer
                      height={195}
                      width={340}
                      ref={controlRef}
                      play={playing}
                      mute={isMute}
                      videoId={video.id}
                      onChangeState={onStateChange}
                    />
            <Text style={{ color: Colors.primary, fontSize: 25, textAlign:'center', marginTop:0 }}>{video.title}</Text>
          </View>
        })
      }
      {/* <View style={styles.controlContainer}>
        <ControlIcon
            onPress={() => seekBackAndForth('rewind')}
            name="skip-previous"
        />
        <ControlIcon
            onPress={togglePlaying}
            name={playing ? 'pause' : 'play-arrow'}
        />
        <ControlIcon
            onPress={() => seekBackAndForth('forward')}
            name="skip-next"
        /> 
      </View>
      <ControlIcon
        onPress={muteVideo}
        name={isMute ? 'volume-off' :'volume-up' }
      /> */}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    // backgroundColor: 'darkblue',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  video: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: width*0.95,
    marginVertical: 15,
    backgroundColor: '#f5f9ff',
    borderRadius: 10,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
    zIndex: 3,
    padding: 8,
  },
  controlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width*0.9
  },
});
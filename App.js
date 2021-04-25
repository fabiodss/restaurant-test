import React, { useEffect, useState } from 'react';
import Navigator from './src/navigator';
import { setCustomText } from 'react-native-global-props';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Image, StatusBar, SafeAreaView } from 'react-native';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const getFonts = () => {
  return Font.loadAsync({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf')
  })
}

const _loadAssetsAsync = async () => {
  const imageAssets = cacheImages([
    require('./assets/splash.png'),
  ]);
  await Promise.all([...imageAssets]);
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCustomText({
      style: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14
      }
    })
  }, [])

  if (loading) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync, getFonts}
        onFinish={() => setLoading(false)}
        onError={console.warn}
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar animated={true} hidden />
      <Navigator />
    </SafeAreaView >
  )

}

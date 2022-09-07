import React, { Fragment, useEffect } from 'react'
import BasketIndex from './src/view/basket'
import BasketMocks from './src/mocks/basket'
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide()
    }, 500);
  })

  return (
    <BasketIndex {...BasketMocks} />
  );
}
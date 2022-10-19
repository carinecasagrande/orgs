import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import HomeIndex from './src/view/home';
import BasketIndex from './src/view/basket';
import useGrowers from './src/hooks/useGrowers';

export default function App() {
	const growers = useGrowers(false);
	return <SafeAreaView style={{ flex: 1 }}>
		<StatusBar />
		{/* <HomeIndex bestGrowers={false} /> */}
		{growers.length > 0 &&
			<BasketIndex grower={{
				name: growers[0].name,
				image: growers[0].image
			}}
				{...growers[0].baskets[0]} />
		}
	</SafeAreaView>
}
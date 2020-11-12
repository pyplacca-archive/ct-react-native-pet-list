import React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import PetScreen from './assets/screens/Pets'

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" backgroundColor="#94b4a4"/>
			<PetScreen />
			{/* Signature */}
			<Text style={styles.signature}>
				David Placca - Codetrain Gen 14
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// marginTop: 30,
		flexGrow: 1,
	},

	signature: {
		position: 'absolute',
		bottom: 30,
		right: 0,
		textAlign: 'left',
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		backgroundColor: '#968c83',
		color: '#fff',
		padding: 10,
	}
});

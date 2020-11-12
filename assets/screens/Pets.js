import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { SearchBar, PetCard } from '../components';
import { styleVariables as sVars } from '../utils'


const pets = [
	{
		name: 'Pastel',
		type: 'Cat',
		age: 2,
		location: '93 Shoreline, Dragon Lane',
		photo: require('../images/animals/pastel.jpg')
	},
	{
		name: 'Oscar',
		type: 'Dog',
		age: 13,
		location: '93 Shoreline, Dragon Lane',
		photo: require('../images/animals/oscar.jpg')
	},
	{
		name: 'Bugs',
		type: 'Rabbit',
		age: 7,
		location: '93 Shoreline, Dragon Lane',
		photo: require('../images/animals/bugs.jpg')
	},
	// {
	// 	name: 'Meowsy',
	// 	type: 'Cat',
	// 	age: 1,
	// 	location: '93 Shoreline, Dragon Lane',
	// 	photo: require('../images/animals/meowsy.jpg')
	// },
]

function PetsScreen () {

	return (
		<View style={styles.container}>
			<SearchBar style={styles.searchbar} />
			<FlatList
				data={pets}
				renderItem={
					({item}) => <PetCard {...item} style={styles.cardItem} />
				}
				keyExtractor={(name, type, age) => name + age + type}
				showsVerticalScrollIndicator ={false}
			/>
		</View>
	)
};

const szHalf = Math.floor(sVars.spacing / 2)

const styles = StyleSheet.create({

	container: {
		backgroundColor: sVars.greyWhite,
		paddingVertical: sVars.spacing,
		paddingHorizontal: sVars.spacing + 10,
		paddingBottom: 0,
		height: '100%'
	},

	searchbar: {
		marginBottom: szHalf,
	},

	cardItem: {
		marginVertical: szHalf + 5,
	}
})

export default PetsScreen;

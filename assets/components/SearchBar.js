import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import { styleVariables as sVars } from '../utils'
import Icons from '../images/icons'


function SearchBar ({style, ...otherProps}) {

	return (
		<View style={[styles.searchContainer, style]} {...otherProps} >
			<Image
				source={Icons.search}
				style={styles.icon}
			/>
			<TextInput
				placeholder="Search here"
				placeholderTextColor={sVars.grey}
				style={styles.input}
			/>
		</View>
	)
};

const half = Math.floor(sVars.spacing / 2);

const styles = StyleSheet.create({

	searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		paddingVertical: half,
		paddingHorizontal: sVars.spacing,
		borderRadius: sVars.radius,
	},

	icon: {
		...sVars.iconSmall,
		marginRight: half,
	},

	input: {
		fontWeight: 'bold',
		fontSize: sVars.baseFontSz
	}
})

export default SearchBar;

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { styleVariables as sVars } from '../utils';
import Icons from '../images/icons';


function PetCard ({name, type, age, location, photo, style}) {

	return (
		<View style={[styles.card, style]}>
			<Image style={styles.image} source={photo} />

			<View style={styles.info}>
				<Text style={styles.title}>
					{name}
				</Text>
				<Text style={styles.text}>
					{type}
				</Text>
				<Text style={styles.text}>
					{`${age} year${age === 1 ? '' : 's'} old`}
				</Text>
				<View style={styles.location}>
					<Image
						source={Icons.marker}
						style={[sVars.iconSmall, {marginRight: 5}]}
					/>
					<Text style={[styles.text, styles.textLong]} numberOfLines={1}>
						{location}
					</Text>
				</View>
			</View>
		</View>
	)
};


const [
	size,
	spaceHalf
] = [
	170,
	Math.floor(sVars.spacing / 2)
]

const imgSz = Math.floor(size + size * .05)

const styles = StyleSheet.create({

	card: {
		flexDirection: 'row',
		alignItems: 'center',
		height: imgSz,
	},

	image: {
		borderRadius: sVars.radius,
		height: imgSz,
		width: size,
	},

	info: {
		justifyContent: 'center',
		backgroundColor: '#fff',
		borderTopRightRadius: sVars.radius,
		borderBottomRightRadius: sVars.radius,
		paddingVertical: spaceHalf,
		paddingHorizontal: sVars.spacing,
		height: '75%',
		flexGrow: 1,
	},

	title: {
		fontSize: sVars.midFontSz,
		color: sVars.purple,
		fontWeight: 'bold',
	},

	text: {
		fontSize: sVars.baseFontSz,
		color: sVars.grey,
		marginVertical: 4,
	},

	textLong: {
		flex: 1
	},

	location: {
		flexDirection: 'row',
		alignItems: 'center',
	}
});

export default PetCard;

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		width: "100%",
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 5,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	loginButton: {
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 5,
		width: "100%",
		alignItems: "center",
		marginBottom: 10,
	},
	socialButton: {
		backgroundColor: "green",
		padding: 10,
		borderRadius: 5,
		width: "100%",
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
});

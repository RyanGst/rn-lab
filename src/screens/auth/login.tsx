import React from "react";
import { Text, View } from "react-native";
import { version } from "../../../package.json";
import { styles } from "./login-styles";

export const Login = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{version}</Text>
		</View>
	);
};

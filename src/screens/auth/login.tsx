import React from "react";
import { Text, View } from "react-native";
import { AnimatedText } from "react-native-reanimated/lib/typescript/reanimated2/component/Text";
import { version } from "../../../package.json";
import { styles } from "./login-styles";

export const Login = () => {
	return (
		<View style={styles.container}>
			<AnimatedText style={styles.title}>{version}</AnimatedText>
		</View>
	);
};

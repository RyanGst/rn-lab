import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Animated, { BounceIn, BounceOut } from "react-native-reanimated";
import { version } from "../../../package.json";
import { styles } from "./login-styles";

export const Login = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsVisible((prev) => !prev);
		}, 2000); // Toggle every 2 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			{isVisible && (
				<Animated.View
					style={styles.container}
					entering={BounceIn}
					exiting={BounceOut}
				>
					<Text style={styles.title}>{version} 🥳</Text>
				</Animated.View>
			)}
		</>
	);
};

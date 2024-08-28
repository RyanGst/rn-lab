import React from "react";
import { View } from "react-native";
import Login from "./screens/auth/Login";

export default function App() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Login />
		</View>
	);
}

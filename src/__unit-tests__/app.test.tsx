import { render } from "@testing-library/react-native";
import EntryPoint from "../index";

describe("<HomeScreen />", () => {
	test("Text renders correctly on HomeScreen", () => {
		const { getByText } = render(<EntryPoint />);
		getByText("Open up App.tsx to start your app!");
	});
});

import { render } from "@testing-library/react-native";
import EntryPoint from "../index";

describe("<HomeScreen />", () => {
	test("Text renders correctly on HomeScreen", () => {
		const { getAllByText } = render(<EntryPoint />);
		getAllByText("Login");
	});
});

import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"

// test("sum", () => expect(1 + 1).toBe(3))

// test("sum", () => {
// 	const { getByText } = render(<App />)

// 	expect(getByText("Hello World")).toBeInTheDocument()
// })

describe("App Component", () => {
	it("should render list items", () => {
		const { getByText } = render(<App />)

		expect(getByText("Nando")).toBeInTheDocument()
	})

	it("should be able to add new item to the list", () => {
		const { getByText, getByPlaceholderText } = render(<App />)

		const inputElement = getByPlaceholderText("New Item")
		const addButton = getByText("Add")

		userEvent.click(addButton)

		userEvent.type(inputElement, "New")
		userEvent.click(addButton)

		expect(getByText("New")).toBeInTheDocument()
	})
})

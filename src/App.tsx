import { useState } from "react"

function App() {
	const [newItem, setNewItem] = useState("")
	const [list, setList] = useState(["Nando", "Rodz", "Mayk"])

	function addToList() {
		setList((state) => [...state, newItem])
	}

	return (
		<>
			<h1>Hello World</h1>

			<>
				<input
					placeholder="Novo Item"
					value={newItem}
					onChange={(e) => setNewItem(e.target.value)}
				/>
				<button role="button" type="button" onClick={addToList}>
					Add
				</button>
				<ul>
					{list.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</>
		</>
	)
}

export default App

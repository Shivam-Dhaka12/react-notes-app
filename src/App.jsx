import { useState } from 'react';
import './App.css';

function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			title: 'Hi there',
			description: 'This is my description',
		},
		{
			id: 2,
			title: 'Go to GYM',
			description: 'GYM at 7 pm today full motivation',
		},
	]);

	function handleAddTodoClick() {
		const title = document.getElementById('title').value;
		const description = document.getElementById('description').value;

		setTodos([
			...todos,
			{
				id: todos.length + 1,
				title,
				description,
			},
		]);

		// console.log();
	}

	function handleMarkAsDoneClick(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}

	return (
		<>
			<div>
				<h1>Todo App</h1>
				<input type="text" id="title" placeholder="Title"></input>
				<br />
				<br />
				<input
					type="text"
					id="description"
					placeholder="Description"
				></input>
				<br />
				<br />
				<button onClick={handleAddTodoClick}>Add Todo</button>
				<h2>My Todos</h2>

				{todos.map((todo) => {
					return (
						<>
							<div>
								<div className="textbox">
									<span className="title">{todo.title}</span>
									<br />
									<span className="description">
										{todo.description}
									</span>
								</div>
								<button
									id={todo.id}
									onClick={() =>
										handleMarkAsDoneClick(todo.id)
									}
								>
									Mark as Done
								</button>
							</div>
							<br />
						</>
					);
				})}
			</div>
		</>
	);
}

export default App;

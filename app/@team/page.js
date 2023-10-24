const fetchTodos = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(
		(res) => res.json()
	);

	await new Promise((resolve) => setTimeout(resolve, 700));

	const todos = data.slice(0, 10);

	return todos;
};

const ParallelTeam = async () => {
	const todos = await fetchTodos();

	return (
		<>
			<p className="text-2xl text-center">Parallel Team</p>

			{todos.map(({ id, title }) => (
				<div className="w-72" key={id}>
					<p className="text-base">{title}</p>
				</div>
			))}
		</>
	);
};

export default ParallelTeam;

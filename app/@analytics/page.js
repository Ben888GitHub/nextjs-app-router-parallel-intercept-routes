const fetchPosts = async () => {
	const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(
		(res) => res.json()
	);

	await new Promise((resolve) => setTimeout(resolve, 700));

	const posts = data.slice(0, 10);

	return posts;
};

const ParallelAnalytics = async () => {
	const posts = await fetchPosts();
	// posts && console.log(posts);

	return (
		<>
			<p className="text-2xl">Parallel Analytics</p>

			{posts.map(({ id, title }) => (
				<div className="w-72" key={id}>
					<p className="text-base">{title}</p>
				</div>
			))}
		</>
	);
};

export default ParallelAnalytics;

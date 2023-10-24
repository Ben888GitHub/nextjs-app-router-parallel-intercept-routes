// import Image from 'next/image';

export default async function Home() {
	await new Promise((resolve) => setTimeout(resolve, 700));

	return (
		<main>
			<p className="text-3xl">Parallel & Intercept Routes</p>
		</main>
	);
}

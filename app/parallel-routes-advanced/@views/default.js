import Link from 'next/link';
export default function Default() {
	return (
		<div className="prose prose-sm prose-invert max-w-none">
			<h2 className="text-lg font-bold">Default UI</h2>

			<p>
				Default UI is rendered because the implicit <code>@children</code> slot{' '}
				<strong>does not</strong> contain a route segment that matches the
				current{' '}
			</p>

			<div className="not-prose flex">
				<Link
					href="/parallel-routes-advanced"
					className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
				>
					Home
				</Link>
			</div>
		</div>
	);
}

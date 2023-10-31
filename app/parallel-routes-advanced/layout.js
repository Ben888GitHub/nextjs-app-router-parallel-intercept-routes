export const metadata = {
	title: 'Advanced parallel routing'
};
export default function ParallelRoutingLayout({ children, audience, views }) {
	return (
		<div className="space-y-6">
			<div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
				{children}

				<div className="space-y-6">
					{audience}
					{views}
				</div>
			</div>
		</div>
	);
}

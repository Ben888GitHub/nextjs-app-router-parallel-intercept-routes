import TabGroup from '@/app/components/TabGroup';

export default function ViewsLayout({ children }) {
	return (
		<div className="space-y-8">
			<TabGroup
				path="/parallel-routes-advanced"
				items={[
					{
						text: 'Home'
					},
					{
						text: 'Impressions',
						slug: 'impressions'
					},
					{
						text: 'View Duration',
						slug: 'view-duration'
					}
				]}
			/>
			{children}
		</div>
	);
}

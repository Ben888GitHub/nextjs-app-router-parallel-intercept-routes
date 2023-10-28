export const generateMetadata = async ({ params: { dashboardId } }) => {
	return {
		title: `Dashboard ${dashboardId}`,
		description: `Dynamic Dashboard ${dashboardId}`
	};
};

const DashboardLayout = ({ children, overview, project }) => {
	return (
		<>
			{children}
			<div className="flex">
				<div className="mr-5">{overview}</div>
				<div>{project}</div>
			</div>
		</>
	);
};

export default DashboardLayout;

export const generateMetadata = async ({ params: { dashboardId } }) => {
	return {
		title: `Dashboard ${dashboardId} Setting`,
		description: `Dynamic Dashboard Setting`
	};
};

const SettingsLayout = ({ children }) => {
	return <>{children}</>;
};

export default SettingsLayout;

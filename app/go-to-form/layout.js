export const metadata = {
	title: 'Form Data'
	// description: 'Generated by create next app'
};

const FormLayout = ({ children, modal }) => (
	<div>
		{children}
		{modal}
	</div>
);

export default FormLayout;

// import Form from "@/app/components/Form";
import dynamic from 'next/dynamic';

const Form = dynamic(() => import('@/app/components/Form'), {
	ssr: false
});

const FormPage = () => {
	return <Form />;
};

export default FormPage;

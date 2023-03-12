import { useState } from 'react';
import AddAddressForm from './AddAddressForm';
import AddressVerification from './AddressVerification';
import FindAddress from './FindAddress';

const MultiStepAddressForm = () => {
	const [step, setStep] = useState(1);
	const [address, setAddress] = useState({});

	const nextStep = direction => {
		direction && setAddress(direction);
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	const onSubmit = direccion => {
		alert(`Tu dirección es: ${direccion}`);
	};

	const formByStep = {
		1: <FindAddress nextFn={nextStep} />,
		2: (
			<AddressVerification
				nextFn={nextStep}
				address={address}
				prevFn={prevStep}
			/>
		),
		3: (
			<AddAddressForm onSubmit={onSubmit} prevFn={prevStep} address={address} />
		),
	};

	return <div className='w-full h-full p-5'>{formByStep[step]}</div>;
};

export default MultiStepAddressForm;

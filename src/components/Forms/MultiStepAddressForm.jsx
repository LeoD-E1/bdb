import { useState } from 'react';
import { useModalStore } from '../../store/modalStore';
import AddAddressForm from './AddAddressForm';
import AddressVerification from './AddressVerification';
import FindAddress from './FindAddress';

const MultiStepAddressForm = () => {
	const [step, setStep] = useState(1);
	const [address, setAddress] = useState({});

	const updateVisibility = useModalStore(state => state.updateVisibility);

	const retrieveAddress = (address) => {
		setAddress(address)
	}

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	function stringify(obj) {
		let cache = [];
		const str = JSON.stringify(obj, function (key, value) {
			if (typeof value === 'object' && value !== null) {
				if (cache.indexOf(value) !== -1) {
					// Circular reference found, discard key
					return;
				}
				// Store value in our collection
				cache.push(value);
			}
			return value;
		});
		cache = null; // reset the cache
		return str;
	}

	const onSubmit = async direccion => {
		localStorage.setItem('addressData', stringify(direccion));
		// Guardar el dato en la direccion del usuario

		updateVisibility(false);
	};

	const formByStep = {
		1: <FindAddress retrieveAddress={retrieveAddress} title='Veamos que tenes cerca' nextFn={nextStep} />,
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

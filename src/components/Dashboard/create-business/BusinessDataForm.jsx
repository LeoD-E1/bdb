import { REQUIRED_FIELD } from '../../../constants/constants';
import Input from '../../input/Input';
import InputAutocomplete from '../../input/InputAutocomplete';

const BusinessDataForm = () => {
	const fields = [
		{
			label: 'Nombre del negocio',
			name: 'product_name',
			type: 'text',
			placeholder: 'ej. Lo de Rolo',
			constraints: {
				required: { value: true, message: REQUIRED_FIELD },
			},
		},
		{
			label: 'Dirección del negocio',
			name: 'business_address',
			type: 'text',
			placeholder: 'Av. rivadavia 17223',
			constraints: {
				required: { value: true, message: REQUIRED_FIELD },
			},
		},
		{
			label: 'Telefono',
			name: 'phone',
			type: 'tel',
			placeholder: '+541169502873',
		},
	];

	const retrieveAddress = place => {
		console.log(place);
	};

	return (
		<section className='m-1'>
			<h3 className='text-2xl font-kanit font-semibold text-dark-gray my-2 text-center'>
				Crear Negocio
			</h3>
			<div>
				{fields.map(field => {
					return field.name === 'business_address' ? (
						<InputAutocomplete
							key={field.name + field.title}
							label={true}
							retrieveAddress={retrieveAddress}
						/>
					) : (
						<Input key={field.name + field.title} field={field} />
					);
				})}
			</div>
		</section>
	);
};

export default BusinessDataForm;

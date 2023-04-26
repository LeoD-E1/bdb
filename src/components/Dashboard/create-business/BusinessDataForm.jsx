import Input from '../../input/Input';

const BusinessDataForm = () => {
	const fields = [
		{
			label: 'Nombre del negocio',
			name: 'product_name',
			type: 'text',
			placeholder: 'ej. Lo de Rolo',
			required: true,
		},
		{
			label: 'Descripción',
			name: 'product_description',
			type: 'text',
			placeholder: 'de pollo, con jamon y queso',
			required: false,
		},
		{
			label: 'Precio',
			name: 'price',
			type: 'number',
			placeholder: '580',
			required: true,
		},
	];

	return (
		<section className='m-1'>
			<h3 className='text-2xl font-kanit font-semibold text-dark-gray my-2 text-center'>
				Crear Negocio
			</h3>
			<div>
				{fields.map(field => (
					<Input key={field.name + field.title} field={field} />
				))}
			</div>
		</section>
	);
};

export default BusinessDataForm;

import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
	const items = [
		{
			title: 'Pedi de tus restaurantes favoritos',
			bgColor: '#FF7A45',
			description:
				'En BDB podrás encontrar una gran variedad de restaurantes y tipos de comidas. Tu restaurante favorito esta a un clic de distancia.',
			imageUrl:
				'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			title: 'Registra tu restaurante',
			bgColor: '#31B77E',
			description:
				'Asociate con Bocado de Barrio para atraer más clientes con facilidad y llevar tu negocio al siguiente nivel.',
			imageUrl:
				'https://images.pexels.com/photos/5920774/pexels-photo-5920774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			title: 'Pedi de tus restaurantes',
			bgColor: '#333740',
			description:
				'En BDB podrás encontrar una gran variedad de restaurantes y tipos de comidas. Tu restaurante favorito esta a un clic de distancia.',
			imageUrl:
				'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
	];

	return (
		<main className='md:layout-container'>
			<section className='w-full p-5 md:px-10 md:py-20'>
				<ul className='flex flex-col lg:grid gap-3 lg:grid-cols-3 lg:gap-8'>
					{items.map(item => (
						<FeatureCard key={`card:${item.title}`} item={item} />
					))}
				</ul>
			</section>
		</main>
	);
};

export default FeaturesSection;

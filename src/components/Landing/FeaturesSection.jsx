import FeatureCard from '../Content/cards/FeatureCard';

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
			title: 'Pedi sin complicaciones',
			bgColor: '#31B77E',
			description:
				'¿Quieres helado, una hamburguesa o una pizza? Con Bocado de Barrio pedir es fácil y rápido. ¿No tienes efectivo? No te preocupes, también podes pagar con mercado pago.',
			imageUrl: 'https://www.zonamovilidad.es/fotos/2/aumento-uso-movil.jpg',
		},
		{
			title: 'Entrega Express',
			bgColor: '#333740',
			description:
				'Con Bocado de Barrio no hace falta que pagues envios, estas a metros del tu restaurante favorito.',
			imageUrl:
				'https://images.pexels.com/photos/5953555/pexels-photo-5953555.jpeg',
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

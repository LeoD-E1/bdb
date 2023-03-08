import Navbar from '../components/Header/Navbar';

const Landing = () => {
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
			title: 'Pedi de tus restaurantes favoritos',
			bgColor: '#31B77E',
			description:
				'En BDB podrás encontrar una gran variedad de restaurantes y tipos de comidas. Tu restaurante favorito esta a un clic de distancia.',
			imageUrl:
				'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			title: 'Pedi de tus restaurantes favoritos',
			bgColor: '#333740',
			description:
				'En BDB podrás encontrar una gran variedad de restaurantes y tipos de comidas. Tu restaurante favorito esta a un clic de distancia.',
			imageUrl:
				'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
	];

	return (
		<>
			<Navbar />
			<div className='h-[50vh] w-full bg-accent mb-6'></div>
			<main className='layout-container'>
				<section className='w-full p-5 md:p-20'>
					<ul className='flex flex-col lg:grid gap-3 lg:grid-cols-3 lg:gap-8'>
						{items.map((item, i) => (
							<li key={i}>
								<article className='w-full lg:max-w-[348px] flex lg:flex-col '>
									<img
										src={item.imageUrl}
										alt=''
										className='hidden sm:block object-cover w-full max-w-[200px] md:max-w-full md:max-h-[330px] hover:translate-x duration-300'
									/>
									<div
										className=' p-4 md:p-8 rounded-lg sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg'
										style={{ background: item.bgColor }}
									>
										<h2 className='text-md md:text-2xl text-white text-center pb-5 font-semibold'>
											{item.title}
										</h2>
										<p className='text-sm text-center text-white pb-5 md:text-md'>
											{item.description}
										</p>
									</div>
								</article>
							</li>
						))}
					</ul>
				</section>
			</main>
		</>
	);
};

export default Landing;

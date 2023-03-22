import logo from '../../../public/favicon.png';
import {
	IconBrandInstagram,
	IconBrandFacebook,
	IconBrandTwitter,
	IconBrandYoutube,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Footer = () => {
	const topics = [
		{
			title: 'Asociate con nosotros',
			list: [
				{
					title: 'Converti tu local en un bodado de barrio',
					disabled: false,
					link: '',
				},
				{
					title: 'Hacete repartidor socio de Bocado de Barrio',
					disabled: true,
					link: '',
				},
			],
		},
		{
			title: 'Informacion de la empresa',
			list: [
				{
					title: 'Acerca de Bocado De Barrio',
					disabled: false,
					link: '',
				},
				{
					title: 'Contactanos',
					disabled: false,
					link: '',
				},
			],
		},
		{
			title: 'Seguinos en nuestrar redes',
			list: [
				{
					title: 'facebook',
					disabled: true,
					link: '',
					logo: <IconBrandFacebook />,
				},
				{
					title: 'instagram',
					disabled: true,
					link: '',
					logo: <IconBrandInstagram />,
				},
				{
					title: 'Youtube',
					disabled: true,
					link: '',
					logo: <IconBrandYoutube />,
				},
				{
					title: 'twitter',
					disabled: true,
					link: '',
					logo: <IconBrandTwitter />,
				},
			],
		},
	];

	return (
		<>
			<footer className='bg-white'>
				<div className='layout-container flex flex-col items-center md:items-start md:justify-around md:flex-row gap-4 p-11 border-b border-gray-light'>
					<div className='flex justify-center items-center max-w-sm w-full'>
						<img src={logo} alt='' className='w-7' />
					</div>

					{topics.map(topic => (
						<article key={topic.title} className='max-w-sm w-full px-3 '>
							<h3>{topic.title}</h3>
							<ul className={`${topic.list[0].logo && 'flex'} my-3 md:my-10`}>
								{topic.list.map(link => (
									<li
										key={link.title}
										className={`px-2 py-1 ${
											!link.logo && !link.disabled && 'hover:underline'
										} hover:text-green duration-300 md:text-sm`}
									>
										{!link.disabled ? (
											<Link to={link.link}>{link.logo ?? link.title}</Link>
										) : (
											<span className='text-gray-light'>
												{link.logo ?? link.title}
											</span>
										)}
									</li>
								))}
							</ul>
						</article>
					))}
				</div>

				<div className='text-center p-4'>
					© {new Date().getFullYear()} Copyright{' '}
					<a
						href='https://leoda.vercel.app/'
						className='hover:text-green underline duration-300'
					>
						Leoda
					</a>
				</div>
			</footer>
		</>
	);
};

export default Footer;

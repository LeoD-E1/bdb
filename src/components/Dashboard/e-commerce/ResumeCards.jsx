import Card from './Card';
import {
	faCartShopping,
	faCreditCard,
	faUsers,
	faDollar,
} from '@fortawesome/free-solid-svg-icons';

const ResumeCards = () => {
	const cards = [
		{
			number: '278',
			icon: faCartShopping,
			title: 'Total Orders',
			difference: 5,
			to: '/orders',
		},
		{
			number: '$564',
			icon: faCreditCard,
			title: 'Total sales',
			difference: -5,
			to: '/sales',
		},
		{
			number: 27,
			icon: faUsers,
			title: 'New clients',
			difference: 5,
			to: '/clients',
		},
		{
			number: '$3.3K',
			icon: faDollar,
			title: 'Total Revenue',
			difference: 15,
			to: '/revenue',
		},
	];

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 my-3'>
			{cards.map(card => (
				<Card item={card} key={`dashboard-card-${card.title}`} />
			))}
		</div>
	);
};

export default ResumeCards;

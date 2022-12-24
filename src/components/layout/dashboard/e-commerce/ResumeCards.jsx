import React from 'react';
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
			number: '$278',
			icon: faCartShopping,
			title: 'Total Orders',
			difference: 5,
			to: '/orders',
		},
		{
			number: '$564',
			icon: faCreditCard,
			title: 'Total sales',
			difference: 5,
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
			number: '$33421',
			icon: faDollar,
			title: 'Total Revenue',
			difference: 15,
			to: '/revenue',
		},
	];

	return (
		<>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-8'>
				{cards.map((card, i) => (
					<Card item={card} key={i} />
				))}
			</div>
		</>
	);
};

export default ResumeCards;

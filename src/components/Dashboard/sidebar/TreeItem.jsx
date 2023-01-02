import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item, pathname, open, opened, fillOpened }) => {
	return (
		<>
			<div className='flex flex-col'>
				{/*  First element or father element */}

				<div
					className={`flex items-center px-4 py-4  my-1 rounded-md hover:bg-darkBlue ${
						item.path === pathname && 'bg-darkBlue'
					}`}
				>
					<Link to={item.path} className='flex items-center'>
						{item.icon && (
							<FontAwesomeIcon icon={item.icon} className='w-5 h-5' />
						)}
						{open && (
							<div className='mx-5'>
								<span className='mx-4 text-white'>{item.name}</span>
							</div>
						)}
					</Link>

					{item.children ? (
						<FontAwesomeIcon
							icon={!opened.includes(item.id) ? faCaretDown : faCaretUp}
							className='w-4 h-4'
							onClick={() => fillOpened(item.id)}
						/>
					) : (
						<div></div>
					)}
				</div>
				{item.children &&
					opened.includes(item.id) &&
					item.children.map(child => (
						<Item
							key={child.id}
							item={child}
							pathname={pathname}
							open={open}
							opened={opened}
							fillOpened={fillOpened}
						/>
					))}
			</div>
		</>
	);
};

export default Item;

import React from 'react';
import MenuItem from '../../Sheared/MenuItem/MenuItem';
import Cover from '../../Sheared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}>

                    </MenuItem>)
                }
            </div>
            <div className='text-center' >
                <Link to={`/order/${title}`}><button className='btn btn-outline border-0 border-b-4 my-4 text-center'>Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;
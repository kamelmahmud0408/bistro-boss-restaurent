import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Sheared/Cover/Cover';
import menuImg from '../../../src/assets/menu/banner3.jpg'
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg'
import saladImg from '../../../src/assets/menu/salad-bg.jpg'
import soupImg from '../../../src/assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory/MenuCategory';
import SectionTitle from '../../components/SectionTitle/SectionTitle';


const Menu = () => {

    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title='our menu'></Cover>
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory
                items={dessert}
                title='desserts'
                img={dessertImg}
            ></MenuCategory>

            <MenuCategory
                items={pizza}
                title='pizza'
                img={pizzaImg}
            ></MenuCategory>

            <MenuCategory
                items={salad}
                title='salad'
                img={saladImg}
            ></MenuCategory>

            <MenuCategory
                items={soup}
                title='soup'
                img={soupImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;
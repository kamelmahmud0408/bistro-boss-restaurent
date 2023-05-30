import React, { useState } from 'react';
import coverOrder from '../../../assets/shop/banner2.jpg'
import Cover from '../../Sheared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories=['salad','pizza','soup', 'dessert','drinks']
    const {category} = useParams()
    const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex)
    const [menu] = useMenu()  
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover img={coverOrder} title='Order Food' ></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index)=> setTabIndex(index)}>
                <TabList>
                    <div className='text-center my-16 text-4xl font-bold text-yellow-500'>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </div>

                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                        {
                            salad.map(item => <FoodCard key={item._id} item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                        {
                            pizza.map(item => <FoodCard key={item._id} item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                        {
                            soup.map(item => <FoodCard key={item._id} item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                        {
                            dessert.map(item => <FoodCard key={item._id} item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                        {
                           drinks.map(item => <FoodCard key={item._id} item={item}
                            ></FoodCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;
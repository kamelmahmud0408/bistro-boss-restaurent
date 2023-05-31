import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe ,_id} = item;
    const { user } = useContext(AuthContext)
    const location = useLocation()
    const navigate= useNavigate()
    const handleAddToCart = (item) => {
        console.log(item)
        if (user && user.email) {
            const cartItem={menuItemId:_id, name, image, price ,email: user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
                
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'please login to the order food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'please login'
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login', {state: {from: location}}) 
                }
            })
        }
    }

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" /></figure>
            <p className='absolute right-0 mr-4 mt-4 p-2 bg-slate-900 text-white rounded'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="text-center ">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 bg-slate-100 text-black border-orange-500 ">Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default FoodCard;
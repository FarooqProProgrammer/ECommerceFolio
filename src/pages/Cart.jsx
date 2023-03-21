import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../Store/cartSlice';


const CartDisplay = () => {
    const [quantity, setQuantity] = useState(1);
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    console.log(cart)

    const handleReduceQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };


    const HandleRemove = (id) =>{
        dispatch(remove(id))
    }

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Your Cart</h2>
                        <div className="mt-4 sm:mt-0">
                            <Link to="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">Continue Shopping</Link>
                        </div>
                    </div>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                cart.map((item) => {
                                    return (
                                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                            <div className="h-48">
                                                <img src={item.image} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-xl font-medium text-gray-900">Product Name</h3>
                                                <p className="mt-2 text-base font-medium text-gray-500">Price: ${item.price}</p>
                                                <div className="mt-4 flex justify-between">
                                                    <div className="flex items-center">
                                                        <button className="rounded-l-lg p-2 border text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none" onClick={handleReduceQuantity}>
                                                            <span className="sr-only">Reduce quantity by 1</span>
                                                            <AiOutlineMinus className="h-5 w-5" />
                                                        </button>
                                                        <input className="appearance-none w-12 p-2 border-t border-b text-center text-gray-700 font-semibold focus:outline-none focus:border-gray-500" type="text" value={quantity} readOnly />
                                                        <button className="rounded-r-lg p-2 border text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none" onClick={handleIncreaseQuantity}>
                                                            <span className="sr-only">Increase quantity by 1</span>
                                                            <AiOutlinePlus className="h-5 w-5" />
                                                        </button>
                                                    </div>
                                                    <button className="text-red-500 hover:text-red-700 focus:outline-none">
                                                        <span className="sr-only">Remove</span>
                                                        <AiOutlineDelete className="h-5 w-5" onClick={()=> HandleRemove(item.id)} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )

                                })
                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartDisplay;

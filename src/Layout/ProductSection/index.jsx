import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../../Store/cartSlice';
import product from './product';



export default function ProductSection() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    const HandleAdd = (item) => {
        dispatch(add(item))
    }



    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };
        fetchData();
    }, []);



    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    {
                        products.map((item) => {
                            return (
                                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img src={item.image} alt="Product Image" className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h3 className="font-bold text-gray-700 text-lg">{item.title}</h3>
                                        <p className="text-gray-600 mt-2 h-[50px] overflow-hidden">{item.description}</p>
                                        <div className="mt-4 flex justify-between items-center">
                                            <span className="text-gray-900 font-bold">{item.price}</span>
                                            <button onClick={() => HandleAdd(item)} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        </div>

    )
}

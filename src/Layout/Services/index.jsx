import React from 'react'

export default function Services() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Our Services
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative">
                        <div className="rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                                alt=""
                                className="w-full h-[250px]  object-center object-cover group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Shipping & Delivery</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Get your products delivered to your doorstep in no time with our reliable shipping services.
                        </p>
                    </div>
                    <div className="group relative">
                        <div className="rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                                src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
                                alt=""
                                className="w-full h-[250px]  object-center object-cover group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Easy Returns</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Not satisfied with your purchase? No worries! Return it hassle-free and get a full refund.
                        </p>
                    </div>
                    <div className="group relative">
                        <div className="rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                                src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                                alt=""
                                className="w-full h-[250px]  object-center object-cover group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">24/7 Customer Support</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Have any questions or concerns? Our friendly customer support team is always here to help you.
                        </p>
                    </div>
                    <div className="group relative">
                        <div className="rounded-lg overflow-hidden aspect-w-1 aspect-h-1">
                            <img
                                src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
                                alt=""
                                className="w-full object-center h-[250px] object-cover group-hover:opacity-75"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">Secure Payments</h3>
                        <p className="mt-2 text-base text-gray-500">
                            Shop with confidence knowing that your payments are secured with the latest encryption technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

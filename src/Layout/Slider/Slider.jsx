import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import products from './Product';


const ProductSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="w-full px-20 py-10">
    <Carousel responsive={responsive} infinite={true} draggable={false}>
      {products.map((product) => (
        <div key={product.id} className="px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-gray-700 text-lg">{product.title}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-gray-900 font-bold">${product.price}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default ProductSlider;

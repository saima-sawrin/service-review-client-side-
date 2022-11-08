import React from 'react';

const Shop = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
            <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:mb-6 group">
                Visit Our Shop
              
              <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
            </h2>
            
          </div>
          <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
                  <p className="text-sm tracking-wide text-gray-300">
                    Price:
                  </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    The Starry Night
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                    Vincent Van Gogh’s most popular painting, The Starry Night was
                    created by Van Gogh at the asylum in Saint-Rémy, where he’d
                    committed himself in 1889.
                  </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
                  <p className="text-sm tracking-wide text-gray-300">
                    Opulently gilded and extravagantly patterned, The Kiss, Gustav
                    Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                    Symbolism and Vienna Jugendstil, the Austrian variant of Art
                    Nouveau.
                  </p>
                </div>
              </div>
            </a>
            <a href="/" aria-label="View Item">
              <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt=""
                />
                <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-4 text-lg font-bold text-gray-100">
                    The Harvesters
                  </p>
                  <p className="text-sm tracking-wide text-gray-300">
                    Bruegel’s fanfare for the common man is considered one of the
                    defining works of Western art. This composition was one of six
                    created on the theme of the seasons.
                  </p>
                </div>
              </div>
            </a>
          </div>
          
        </div>
      );
    };


export default Shop;



    
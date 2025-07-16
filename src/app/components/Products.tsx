export default function Products() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20 pb-20 p-12 bg-gray-100">
               <div className="pt-14">
               <h1 className="text-7xl tracking-wide mb-10">Discover Trending Products</h1>
               <button className="bg-black text-white px-5 py-2 rounded">View All</button>
               </div>
               {/* earphone */}
                 <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col">
                     <div className="flex-grow">
                        <p className="text-xs text-gray-500">Earphone</p>
                        <h3 className="text-lg font-semibold text-gray-900">JBL Live 200 BT</h3>
                    </div>
                    <div className="h-96 w-ful flex items-center justify-center mb-4">
                        <img src="earphones.png" alt="" />
                    </div>
                   
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-base font-medium text-gray-900">$36.99</p>
                        <button className="w-6 h-6 rounded-full bg-purple-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"></button>
                    </div>
                </div>

                {/* JBL GO4 */}
                 <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col">
                     <div className="flex-grow">
                        <p className="text-xs text-gray-500">Speakers</p>
                        <h3 className="text-lg font-semibold text-gray-900">JBL GO 4</h3>
                    </div>
                    <div className="h-96 w-ful flex items-center justify-center mb-4">
                        <img src="go4.png" alt="" />
                    </div>
                     <div className="flex justify-between items-center mt-4">
                        <p className="text-base font-medium text-gray-900">$46.66</p>
                        <button className="w-6 h-6 rounded-full bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"></button>
                    </div>
                </div>

                {/* Boombox */}
                 <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col">
                     <div className="flex-grow">
                        <p className="text-xs text-gray-500">Speakers</p>
                        <h3 className="text-lg font-semibold text-gray-900">JBL Boombox 3</h3>
                    </div>
                    <div className="h-96 w-ful flex items-center justify-center mb-4">
                        <img src="xtrme4.png" alt="" />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-base font-medium text-gray-900">$66.66</p>
                        <button className="w-6 h-6 rounded-full bg-red-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"></button>
                    </div>
                </div>

                {/* earbuds */}
                 <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col">
                    <div className="flex-grow">
                        <p className="text-xs text-gray-500">Earbuds</p>
                        <h3 className="text-lg font-semibold text-gray-900">JBL Sense Lite</h3>
                    </div>
                    <div className="h-96 w-ful flex items-center justify-center mb-4">
                        <img src="earbuds.png" alt="" />
                    </div>
                     <div className="flex justify-between items-center mt-4">
                        <p className="text-base font-medium text-gray-900">$39.99</p>
                        <button className="w-6 h-6 rounded-full bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"></button>
                    </div>
                </div>

                {/* extereme */}
                 <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex flex-col">
                    <div className="flex-grow">
                        <p className="text-xs text-gray-500">Speakers</p>
                        <h3 className="text-lg font-semibold text-gray-900">JBL Extreme 4</h3>
                    </div>
                    <div className="h-96 w-ful flex items-center justify-center mb-4">
                        <img src="charge5.png" alt="" />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-base font-medium text-gray-900">$99.99</p>
                        <button className="w-6 h-6 rounded-full bg-blue-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"></button>
                    </div>
                </div>
               
               
               

        
        </div>
    )
}

import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    // const {id} = useParams();
    // const serviceId = parseFloat(id);
    // const allServices = useLoaderData();
    // console.log(allServices);

    // const service = allServices.find(item => item.id === serviceId);

    // const {_id,image,itemName,categoryName,description,price,rating,customization,processingTime,stockStatus,userEmail,userName} = useLoaderData();


  
        const service = useLoaderData(); // Fetches single service object
        const {
            _id,
          image,
          itemName,
          categoryName,
          description,
          price,
          rating,
          customization,
          processingTime,
          stockStatus,
          userEmail,
          userName,
        } = service;
        console.log(service);
  

    return (
        <div className="bg-gray-50 min-h-screen pb-10">
            {/* Service Banner */}
            <div className="relative">
                <img
                    src={image}
                    alt="service banner"
                    className="w-full h-[450px] object-cover rounded-b-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center">
                    <div className="text-white">
                        <h1 className="text-4xl font-extrabold mb-4">{itemName}</h1>
                        <p className="text-xl font-semibold">{categoryName}</p>
                    </div>
                </div>
            </div>
  

            {/* Service Details */}

            <div className='px-2'>
                <div className="container mx-auto mt-8 p-6 max-w-6xl bg-white shadow-xl rounded-lg ">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">{}</h2>
                            <div className="grid grid-cols-2 gap-4 text-lg text-gray-700">
                                <div>
                                    <strong></strong>{itemName} 
                                    
                                </div>
                                <div>
                                    <strong></strong>{categoryName} 
                                    
                                </div>
                                <div>
                                    <strong>{description} </strong>
                                    <span className="text-green-600 font-semibold">More..</span>
                                </div>
                                <div>
                                    <strong>Price:</strong> <span>${price}</span>
                                </div>
                              
                                <div>
                                    <strong></strong> <span>{customization}</span>
                                </div>
                                <div>
                                    <strong>Rating:</strong>
                                    <span className="text-yellow-500 font-bold">{rating} ⭐</span>
                                </div>
                                <div>
                                    <strong>Product_id:</strong>{_id} 
                                    
                                </div>
                            </div>
                            <p className="text-base text-gray-600 leading-relaxed mt-4"><strong>Processing Time:  </strong>{processingTime}</p>
                            <p className="text-base text-gray-600 leading-relaxed mt-4"><strong>Stock Status:  </strong>{stockStatus}</p>
                            <p className="text-base text-gray-600 leading-relaxed mt-4"><strong>UserEmail:  </strong>{userEmail}</p>
                            <p className="text-base text-gray-600 leading-relaxed mt-4"><strong>UserName:  </strong>{userName}</p>
                           

                        </div>
                        <div className="bg-gray-100 rounded-lg p-4">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Features</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>Best Quality</li>
                                <li>Limited warranty</li>
                                <li>On store trial</li>
                                <li>Access to exclusive resources</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



    </div>
    );
};

export default Details;
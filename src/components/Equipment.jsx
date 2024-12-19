import { Link } from "react-router-dom";


const Equipment = ({equipment}) => {
    const {_id,image,itemName,categoryName,description,price,rating,customization,processingTime,stockStatus,userEmail,userName} = equipment;
    return (
        <div className = "bg-white p-4 shadow-md rounded-lg mb-8 my-11">
            <div className = "relative">
                <img src={image} alt={itemName} className = "w-full h-48 object-cover rounded-2xl"/>
                <div className = "absolute top-2 right-2 bg-black text-white p-2 rounded-full">
                    <span className = "text-sm font-semibold">{rating}</span>
                </div>
            </div>
            <div className = " flex flex-col mt-2">
                <h1 className = "text-xl font-semibold">{itemName}</h1>
                <p className = "text-sm text-gray-500">{description}</p>
                <p className = "text-sm text-gray-500">Price:  ${price}</p>
                <p className = "text-sm text-gray-500">Customization: {customization}</p>
                <p className = "text-sm text-gray-500">Processing Time: {processingTime}</p>
                <p className = "text-sm text-gray-500">Stock Status: {stockStatus}</p>
                <p className = "text-sm text-gray-500">User Email: {userEmail}</p>
                <p className = "text-sm text-gray-500">User Name: {userName}</p>
                <Link to={`/details/${_id}`} className = "bg-blue-500 text-white p-2 rounded-md">View Details</Link>
            </div>
        </div>
      
    );
};

export default Equipment;
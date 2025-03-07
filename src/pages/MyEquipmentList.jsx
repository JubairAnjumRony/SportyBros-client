import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const MyEquipmentList = () => {

     const {user} = useContext(AuthContext);
    const [equipments, setEquipments] = useState([]);
    // const user = 
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`https://server-side-alpha-rust.vercel.app/myequipments/${user.email}`)
        .then((res) => res.json())
        .then((data) => setEquipments(data))
        .catch((error) => toast.error("Failed to fetch your equipment list.",error.message));
    }, [user.email]);
  
//     const handleDelete = (id) => {
//       if (confirm("Are you sure you want to delete this equipment?")) {
//         fetch(`https://server-side-alpha-rust.vercel.app/deleteequipment/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then(data => {
//             if(data.deletedCount>0){
//             Swal.fire({
//                 title: "Deleted!",
//                 text: "Equipment deleted successfully",
//                 icon: "success",
//             });
//             setEquipments(equipments.filter((item) => item._id !== id));
//         }
//           })
          
//     };
//  }

const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
    // if (confirm("Are you sure you want to delete this equipment?")) 
      fetch(`https://server-side-alpha-rust.vercel.app/deleteequipment/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) { // Correct spelling of "deletedCount"
            Swal.fire({
              title: "Deleted!",
              text: "Equipment deleted successfully",
              icon: "success",
            });
            setEquipments(equipments.filter((item) => item._id !== id));
          } 
        })
    }
})
    
  };
  
  
    const handleUpdate = (id) => {
      navigate(`/updateequipment/${id}`);
    };
  
    return (
      <div className=" bg-gray-100 py-8 ">
        <div className="container  w-3/4 mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">My Equipment List</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipments.map((item) => (
              <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
                <img src={item.image} alt={item.itemName} className="w-full h-40 object-cover rounded-md mb-4" />
                <h2 className="text-xl font-bold">{item.itemName}</h2>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Stock: {item.stockStatus}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MyEquipmentList;
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';



const AddEquipment = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    // const form = e.target;
    // const image = form.image.value;
    // const itemName = form.itemName.value;
    // const categoryName = form.categoryName.value;
    // const description = form.description.value;
    // const price = form.price.value;
    // const rating = form.rating.value;
    // const customization = form.customization.value;
    // const processingTime = form.processingTime.value;
    // const stockStatus = form.stockStatus.value;
    // const userEmail = form.userEmail.value;
    // const userName = form.userName.value;

    // const data ={image,itemName,categoryName,description,price,rating,customization,processingTime,stockStatus,userEmail,userName};
    // console.log(data);
    


    fetch('http://localhost:3000/addequipments',{
        method:'POST',
        headers:{
        'Content-Type': 'application/json',
        },

        body:JSON.stringify(data)
    })

        .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Equipment added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                }
            })
   


  
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
      <div className="form-control mb-4">
        <label className="label">Image</label>
        <input type="url" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
      </div>

      <div className="form-control mb-4">
        <label className="label">Item Name</label>
        <input type="text" name="itemName" placeholder="Item Name" className="input input-bordered w-full" required />
      </div>

      <div className="form-control mb-4">
        <label className="label">Category Name</label>
        <input type="text" name="categoryName" placeholder="Category Name" className="input input-bordered w-full" required />
      </div>

      <div className="form-control mb-4">
        <label className="label">Description</label>
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required />
      </div>

      <div className="form-control mb-4">
        <label className="label">Price</label>
        <input type="number" name="price" placeholder="Price" className="input input-bordered w-full" required />
      </div>

      <div className="form-control mb-4">
        <label className="label">Rating</label>
        <input type="number" name="rating" placeholder="Rating (out of 5)" className="input input-bordered w-full" required />
      </div>

      <div className="form-control mb-4">
        <label className="label">Customization</label>
        <input type="text" name="customization" placeholder="Customization Details" className="input input-bordered w-full" />
      </div>

      <div className="form-control mb-4">
        <label className="label">Processing Time</label>
        <input type="text" name="processingTime" placeholder="Delivery Time" className="input input-bordered w-full" required />
      </div>

      <div className="form-control mb-4">
        <label className="label">Stock Status</label>
        <input type="number" name="stockStatus" placeholder="Available Product Quantity" className="input input-bordered w-full" required />
      </div>

      <div className="form-control mb-4">
        <label className="label">User Email</label>
        <input type="email" name="userEmail" value={user?.email || ""} readOnly className="input input-bordered w-full bg-gray-100" />
      </div>

      <div className="form-control mb-4">
        <label className="label">User Name</label>
        <input type="text" name="userName" value={user?.displayName || "Anonymous"} readOnly className="input input-bordered w-full bg-gray-100" />
      </div>

      <button data-tooltip-id="my-tooltip" data-tooltip-content="Submit to add to store!" type="submit" className="btn btn-primary w-full">Submit</button>
      <Tooltip id="my-tooltip" />
    </form>
  );
};

export default AddEquipment;

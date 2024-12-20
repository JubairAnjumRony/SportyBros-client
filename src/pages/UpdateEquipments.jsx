import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";



const UpdateEquipments = () => {

    const loadUser = useLoaderData();
    console.log(loadUser);
    const {user} = useContext(AuthContext);
    
    // const { id } = useParams();
    // const [equipment, setEquipment] = useState(null);
    const navigate = useNavigate();
  
    // useEffect(() => {
    //   fetch(`https://server-side-alpha-rust.vercel.app/details/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setEquipment(data));
    // }, [id]);
  
    const handleUpdate = (e) => {
      e.preventDefault();
    //   const formData = new FormData(e.target);
    //   const updatedData = Object.fromEntries(formData.entries());

           const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const updatedData ={image,itemName,categoryName,description,price,rating,customization,processingTime,stockStatus,userEmail,userName};
    console.log(updatedData);
  
      fetch(`https://server-side-alpha-rust.vercel.app/updateequipment/${loadUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then(() => {
        //   toast.success("Equipment updated successfully!");
        Swal.fire({
            title: "Updated successfully!",
            icon: "success",
            draggable: true
          });
          navigate("/myequipments");
        })
        .catch((error) => toast.error("Failed to update equipment.",error.message));
    };
  
      return (
        <form onSubmit={handleUpdate} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
        <div className="form-control mb-4">
          <label className="label">Image</label>
          <input type="url" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
        </div>
  
        <div className="form-control mb-4">
          <label className="label">Item Name</label>
          <input type="text" name="itemName" placeholder="Item Name"  className="input input-bordered w-full" required />
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
  
        <button data-tooltip-id="my-tooltip" data-tooltip-content="Update for better shopping!" type="submit" className="btn btn-primary w-full">Update</button>
        <Tooltip id="my-tooltip" />
      </form>
      );
  };
  
  export default UpdateEquipments;
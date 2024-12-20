import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateEquipments = () => {
    const { id } = useParams();
    const [equipment, setEquipment] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`http://localhost:3000/details/${id}`)
        .then((res) => res.json())
        .then((data) => setEquipment(data));
    }, [id]);
  
    const handleUpdate = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const updatedData = Object.fromEntries(formData.entries());
  
      fetch(`http://localhost:3000/updateequipments/${id}`, {
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
  
    return equipment  (
      <form onSubmit={handleUpdate} className="container mx-auto max-w-md p-4 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">Update Equipment</h1>
        <input
          name="itemName"
          defaultValue={equipment.itemName}
          className="border p-2 w-full mb-4"
          placeholder="Item Name"
        />
        <textarea
          name="description"
          defaultValue={equipment.description}
          className="border p-2 w-full mb-4"
          placeholder="Description"
        />
        <input
          name="price"
          defaultValue={equipment.price}
          className="border p-2 w-full mb-4"
          placeholder="Price"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Update</button>
      </form>
    )  (
      <div>Loading...</div>
    );
  };
  
  export default UpdateEquipments;
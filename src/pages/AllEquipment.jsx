import { Link,  useLoaderData } from "react-router-dom";
// import Equipment from "../components/Equipment";
import { useState } from "react";


const AllEquipment = () => {

    const loader = useLoaderData();
    console.log(loader);
    // const {_id,itemName,category,image,price,description} = loader; 
    console.log(loader);
    const [equipments,setEquipments] = useState(loader);

    const handleSort = () =>{
      const sortedEquipments = [...equipments].sort((a,b) => a.price - b.price);
      setEquipments(sortedEquipments);
    }
    return (
   <div className="px-1 md:px-4 py-6">
      <div className="flex justify-end w-full lg:w-3/4 mx-auto">
        <button onClick={handleSort} className="btn btn-primary">Sort By Price</button>
      </div>
      {/* <div className = "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4 mx-auto mt-8">
       {
         equipments.map((equipment) =>(
           <Equipment key={equipment._id} equipment = {equipment}>

           </Equipment>
           
       ))
       }  
       </div> */}
          

          <div className="overflow-x-auto mt-6 w-full lg:w-3/4 mx-auto">
  <table className="table table-Zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <th>ItemImage</th>
        <th>Description</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {equipments.map(item =>
        <tr key= {item._id}>
 

        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.itemName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
     {item.description}
        
        </td>
        <td>{item.price} USD</td>
        <th>
            {/* <Link to = {`/details/${item._id}`}>
          <button className="btn btn-primary btn-xs">ViewDetails</button>
          </Link> */}
            <Link to={`/details/${item._id}`} className = "bg-blue-500 btn btn-sm btn-outline btn-primary">View Details</Link>
        </th>
      </tr>
   ) }
  
     </tbody> 
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>ItemImage</th>
        <th>Description</th>
        <th>Price</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>

  </div>
    );

};

export default AllEquipment;
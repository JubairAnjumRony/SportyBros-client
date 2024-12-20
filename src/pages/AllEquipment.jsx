import { useLoaderData } from "react-router-dom";
import Equipment from "../components/Equipment";
import { useState } from "react";


const AllEquipment = () => {

    const loader = useLoaderData();
    console.log(loader);
    const [equipments,setEquipments] = useState(loader);
    return (
        <div>
            
      



  <div className = "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4 mx-auto mt-8">
   {
       equipments.map((equipment) =>(
           <Equipment key={equipment._id} equipment = {equipment}>

           </Equipment>
       ))
   }
</div>
   </div>
    );
};

export default AllEquipment;
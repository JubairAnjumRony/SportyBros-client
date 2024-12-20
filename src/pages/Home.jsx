import { useLoaderData } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import { useState } from "react";
import Equipment from "../components/Equipment";


const Home = () => {
    const loader = useLoaderData();
    console.log(loader);
    const [equipments,setEquipments] = useState(loader);
    return (
        <div>
     <div className = "mt-6 mb-6">
         <HeroSlider/>
     </div>

     <div>

         <div className = "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-3/4 mx-auto mt-8">
            {
                equipments.slice(0,6).map((equipment) =>(
                    <Equipment key={equipment._id} equipment = {equipment}>

                    </Equipment>
                ))
            }
         </div>
      </div>

     </div>

    );
};

export default Home;
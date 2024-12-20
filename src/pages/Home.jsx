import { useLoaderData } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import { useState } from "react";
import Equipment from "../components/Equipment";
import FeaturedCategories from "../components/FeaturedCategories";
import WhyChooseUs from "../components/WhyChooseUs";


const Home = () => {
    const loader = useLoaderData();
    console.log(loader);
    const [equipments,setEquipments] = useState(loader);
    return (
        <div className="w-3/4 mx-auto">
     <div className = "mt-6 mb-6">
         <HeroSlider/>
     </div>

     <div>

         <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto mt-8 w-full">
            {
                equipments.slice(0,6).map((equipment) =>(
                    <Equipment key={equipment._id} equipment = {equipment}>

                    </Equipment>
                ))
            }
         </div>

         <div className="mt-8 mb-8">
          <FeaturedCategories/>
         </div>
         <div className="mt-8 mb-8">
          <WhyChooseUs/>
         </div>
      </div>

     </div>

    );
};

export default Home;
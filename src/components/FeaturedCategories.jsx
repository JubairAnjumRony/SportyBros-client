const FeaturedCategories = () => {
    const categories = [
      { id: 1, name: "Sports Equipment", image: "https://i.ibb.co.com/3SmHT93/istockphoto-1064972966-1024x1024.jpg" },
      { id: 2, name: "Camping Gear", image: "https://i.ibb.co.com/ZKdjy3M/istockphoto-1422989430-1024x1024.jpg" },
      { id: 3, name: "Fitness Accessories", image: "https://i.ibb.co.com/JmDsL4q/istockphoto-1362266787-1024x1024.jpg" },
    ];
  
    return (
      <div className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
          {categories.map((category) => (
            <div key={category.id} className="bg-white shadow-md rounded-lg p-4">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturedCategories;
  
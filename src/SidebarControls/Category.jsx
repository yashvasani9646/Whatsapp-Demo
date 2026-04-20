import React, { useEffect, useState } from "react";

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories?limit=10")
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="p-4 bg-[#efeae2] dark:bg-[#0b141a] min-h-screen">

            <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
                Categories
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="bg-white dark:bg-[#202c33] rounded-xl p-3 shadow hover:shadow-md cursor-pointer"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-full h-32 object-cover rounded-lg"
                        />

                        <h3 className="mt-2 text-sm text-center text-gray-800 dark:text-gray-200">
                            {cat.name}
                        </h3>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Category;
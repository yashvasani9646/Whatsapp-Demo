import React, { useEffect, useState } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [detailLoading, setDetailLoading] = useState(false);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products?limit=10&offset=10")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="flex-1 flex items-center justify-center h-screen bg-[#efeae2]">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-500 text-sm">Loading products...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-1 h-screen">

            {/* LEFT SIDE */}
            <div className={`
                flex-1 p-4 bg-[#efeae2] overflow-y-auto
                ${selectedProduct ? "hidden md:block" : "block"}
            `}>

                <h2 className="text-xl font-semibold mb-4">Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                    {products.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => {
                                setDetailLoading(true);
                                setTimeout(() => {
                                    setSelectedProduct(item);
                                    setDetailLoading(false);
                                }, 500);
                            }}
                            className="bg-white rounded-xl shadow p-3 hover:shadow-md transition cursor-pointer"
                        >
                            <img
                                src={item.images?.[0]}
                                alt={item.title}
                                className="w-full h-40 object-cover rounded-lg"
                            />

                            <h3 className="mt-2 font-medium text-sm line-clamp-2">
                                {item.title}
                            </h3>

                            <p className="text-green-600 font-semibold mt-1">
                                ₹ {item.price}
                            </p>
                        </div>
                    ))}

                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className={`
                flex-1 md:w-[420px] bg-[#f0f2f5] border-l p-4
                ${selectedProduct ? "block" : "hidden md:flex"}
            `}>

                {detailLoading ? (
                    <div className="flex items-center justify-center w-full">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-gray-400 text-sm">Loading...</p>
                        </div>
                    </div>
                ) : !selectedProduct ? (
                    <div className="flex items-center justify-center w-full text-gray-400">
                        Select a product
                    </div>
                ) : (
                    <div className="w-full bg-white rounded-2xl shadow p-4 overflow-y-auto h-full">

                        {/* 🔙 BACK BUTTON (mobile only) */}
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="md:hidden mb-3 text-green-600 text-sm"
                        >
                            ← Back
                        </button>

                        <img
                            src={selectedProduct.images?.[0]}
                            className="w-full h-56 object-cover rounded-xl"
                        />

                        <h2 className="text-lg font-semibold mt-4">
                            {selectedProduct.title}
                        </h2>

                        <p className="text-green-600 text-xl font-bold mt-2">
                            ₹ {selectedProduct.price}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                            {selectedProduct.category?.name}
                        </p>

                        <p className="text-gray-600 mt-4 text-sm">
                            {selectedProduct.description}
                        </p>

                    </div>
                )}

            </div>

        </div>
    );
};

export default Product;
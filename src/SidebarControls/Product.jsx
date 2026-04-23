import React from "react";
import { useProduct } from "../Context/ProductContext";

const Product = () => {

    const {
        products,
        categories,
        selectedCategory,
        setSelectedCategory,
        loading,
        selectedProduct,
        setSelectedProduct,
        detailLoading,
        setDetailLoading,
        fetchProducts
    } = useProduct();

    const getImage = (img) => {
        if (!img || !img.startsWith("http")) {
            return "https://picsum.photos/300/200";
        }
        return img;
    };

    return (
        <div className="flex flex-1 h-full bg-gray-100 dark:bg-[#0b141a] text-black dark:text-white">

            {/* LEFT */}
            <div className={`w-full md:w-[45%] lg:w-[50%] p-2 md:p-4 overflow-y-auto bg-white dark:bg-[#111b21] ${selectedProduct ? "hidden md:block" : "block"}`}>

                <h2 className="text-xl font-semibold mb-4">
                    Products ({products.length})
                </h2>

                <div className="sticky top-0 z-10 bg-white dark:bg-[#111b21] pb-2 border-b border-gray-200 dark:border-gray-700">

                    <div className="flex items-center gap-2">

                        {/* LEFT ARROW */}
                        <button
                            onClick={() => {
                                document.getElementById("catScroll")?.scrollBy({
                                    left: -200,
                                    behavior: "smooth",
                                });
                            }}
                            className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full 
            bg-white dark:bg-[#2a3942]
            border border-gray-300 dark:border-gray-600
            shadow hover:shadow-md hover:scale-105 transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* CATEGORY LIST */}
                        <div
                            id="catScroll"
                            className="flex gap-3 overflow-x-auto scroll-smooth no-scrollbar flex-1"
                        >

                            {/* ALL */}
                            <button
                                onClick={() => {
                                    setSelectedCategory(null);
                                    fetchProducts();
                                }}
                                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${!selectedCategory
                                    ? "bg-green-500 text-white"
                                    : "bg-gray-200 dark:bg-[#202c33] text-black dark:text-gray-300"
                                    }`}
                            >
                                All
                            </button>

                            {/* CATEGORY MAP */}
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => {
                                        setSelectedCategory(cat.id);
                                        fetchProducts(cat.id);
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition ${selectedCategory === cat.id
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-200 dark:bg-[#202c33] text-black dark:text-gray-300"
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* RIGHT ARROW */}
                        <button
                            onClick={() => {
                                document.getElementById("catScroll")?.scrollBy({
                                    left: 200,
                                    behavior: "smooth",
                                });
                            }}
                            className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full 
            bg-white dark:bg-[#2a3942]
            border border-gray-300 dark:border-gray-600
            shadow hover:shadow-md hover:scale-105 transition"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                    </div>
                </div>

                {/* GRID */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 mt-3 ${loading ? "opacity-50" : ""}`}>

                    {loading
                        ? Array(8).fill(0).map((_, i) => (
                            <div key={i} className="bg-white dark:bg-[#202c33] p-2 rounded-xl animate-pulse">
                                <div className="w-full h-40 bg-gray-300 dark:bg-[#2a3942] rounded-lg"></div>
                            </div>
                        ))
                        : products.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => {
                                    setDetailLoading(true);
                                    setTimeout(() => {
                                        setSelectedProduct(item);
                                        setDetailLoading(false);
                                    }, 300);
                                }}
                                className={`rounded-xl p-2 cursor-pointer transition-all duration-300 ${selectedProduct?.id === item.id
                                    ? "bg-green-100 dark:bg-[#1f2c33] border border-green-500 shadow-lg scale-[1.02]"
                                    : "bg-white dark:bg-[#202c33] hover:bg-gray-100 dark:hover:bg-[#2a3942]"
                                    }`}
                            >
                                <img
                                    src={getImage(item.images?.[0])}
                                    alt={item.title}
                                    className="w-full h-[220px] sm:h-[240px] object-cover rounded-lg"
                                />

                                <h3 className="mt-2 text-sm line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                                    ₹ {item.price}
                                </p>
                            </div>
                        ))}
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-full md:w-[55%] lg:w-[50%] px-4 md:px-6 py-4 border-l border-gray-200 dark:border-gray-700 flex justify-center items-start pt-6 bg-gray-100 dark:bg-[#0b141a]">

                {detailLoading ? (
                    <div className="w-full flex flex-col items-center justify-center mt-10 gap-4">

                        <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>

                        <div className="w-full max-w-2xl bg-white dark:bg-[#202c33] p-4 md:p-5 rounded-2xl shadow animate-pulse">

                            <div className="w-full h-64 bg-gray-300 dark:bg-[#2a3942] rounded-xl"></div>

                            <div className="mt-4 h-5 bg-gray-300 dark:bg-[#2a3942] rounded w-3/4"></div>

                            <div className="mt-2 h-5 bg-gray-300 dark:bg-[#2a3942] rounded w-1/4"></div>

                            <div className="mt-2 h-4 bg-gray-300 dark:bg-[#2a3942] rounded w-1/3"></div>

                            <div className="mt-4 space-y-2">
                                <div className="h-3 bg-gray-300 dark:bg-[#2a3942] rounded"></div>
                                <div className="h-3 bg-gray-300 dark:bg-[#2a3942] rounded"></div>
                                <div className="h-3 bg-gray-300 dark:bg-[#2a3942] rounded w-5/6"></div>
                            </div>

                        </div>

                        <p className="text-sm text-gray-400">Loading product details...</p>
                    </div>

                ) : !selectedProduct ? (
                    <div className="flex items-center justify-center h-full text-gray-400">
                        Select a product
                    </div>
                ) : (
                    <div className="max-w-2xl w-full bg-white dark:bg-[#202c33] p-4 md:p-5 rounded-2xl shadow max-h-[90%] overflow-y-auto">

                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="md:hidden mb-3 text-green-600 dark:text-green-400 text-sm"
                        >
                            ← Back
                        </button>

                        <div className="w-full h-64 bg-gray-100 dark:bg-[#111b21] rounded-xl flex items-center justify-center overflow-hidden">
                            <img
                                src={getImage(selectedProduct.images?.[0])}
                                alt={selectedProduct.title}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <h2 className="mt-4 font-semibold text-lg">
                            {selectedProduct.title}
                        </h2>

                        <p className="text-green-600 dark:text-green-400 mt-2 text-lg font-semibold">
                            ₹ {selectedProduct.price}
                        </p>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {selectedProduct.category?.name}
                        </p>

                        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {selectedProduct.description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Product;
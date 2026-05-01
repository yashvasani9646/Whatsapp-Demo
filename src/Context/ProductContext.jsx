import { createContext, useContext, useEffect, useState } from "react";

// 1. Context create
const ProductContext = createContext();

// 2. Provider banate hai
export const ProductProvider = ({ children }) => {


    // 🔹 STATES (same jo tu use kar raha tha)
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    console.log("hello")

    const [loading, setLoading] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [detailLoading, setDetailLoading] = useState(false);

    // 🔹 PRODUCTS FETCH
    const fetchProducts = async (categoryId = null) => {
        try {
            setLoading(true);

            let url = "https://api.escuelajs.co/api/v1/products?limit=10&offset=10";

            if (categoryId) {
                url = `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`;
            }

            const res = await fetch(url);
            const data = await res.json();

            setProducts(data);
            setSelectedProduct(null);

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    // 🔹 CATEGORIES FETCH
    const fetchCategories = async () => {
        try {
            const res = await fetch("https://api.escuelajs.co/api/v1/categories?limit=10");
            const data = await res.json();
            setCategories(data);
        } catch (err) {
            console.log(err);
        }
    };

    // 🔹 AUTO LOAD (important)
    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    return (
        <ProductContext.Provider value={{
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
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);
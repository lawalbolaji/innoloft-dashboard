import { useParams } from "react-router-dom";
import { MainContent } from "../components/main-content/MainContent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProduct } from "./Product.slice";
import { AppDispatch } from "../store";

// eslint-disable-next-line react-refresh/only-export-components
export function useProductDetails() {
    const { productId } = useParams<"productId">();
    const dispatch = useDispatch<AppDispatch>();

    if (productId === undefined) {
        // delegate to route error handler
        throw new Error("invalid url path");
    }

    useEffect(() => {
        dispatch(loadProduct(+productId));
    }, [productId, dispatch]);

    return { productId };
}

export function ProductDetailsScene() {
    const { productId } = useProductDetails();

    return <MainContent productId={+productId} />;
}

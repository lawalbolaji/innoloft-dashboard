import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import { Profile } from "./components/profile/Profile";
import { ProductDetailsScene } from "./scenes/ProductViewScene";
import { ProductListScene } from "./scenes/ProductListScene";
import { ErrorComponent } from "./components/errors/Error";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { loadConfig } from "./config/app.config.slice";

// this is where router will earn its money
const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListScene />,
        errorElement: <ErrorComponent is404={true} />,
    },
    {
        path: "/:productId/:mode",
        element: <ProductDetailsScene />,
        errorElement: <ErrorComponent is404={true} />,
    },
]);

function App() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (import.meta.env.VITE_APP_ID !== undefined) {
            dispatch(loadConfig(+import.meta.env.VITE_APP_ID));
        }
    }, [dispatch]);

    return (
        <div className="h-screen w-screen min-w-fit bg-[#F9FAFB]">
            <NavBar />
            <div className="container m-auto flex flex-row w-full" style={{ height: "calc(100% - 55px)" }}>
                <Profile />
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;

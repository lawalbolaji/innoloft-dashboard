import { NavLink } from "react-router-dom";
import { MainContentHeader } from "../components/main-content/header/MainContentHeader";

const products: Array<{ id: number; name: string }> = [{ id: 6781, name: "LoftOS" }];

export function ProductListScene() {
    return (
        <div className="w-full">
            <div className="flex-auto py-4 px-2 h-full">
                <div className="flex flex-col gap-y-4 h-full w-full overflow-auto hide-scroll">
                    <div className="sticky z-50 top-0 bg-[#F9FAFB]">
                        <MainContentHeader paths={[{ label: "Products", url: "/" }]} />
                    </div>

                    <div className="p-4 h-full w-full bg-white">
                        <div className="flex flex-col gap-y-2">
                            {products.map((product) => (
                                <div key={product.id} className="flex flex-row">
                                    &gt; &nbsp;
                                    <div className="transition ease-in-out delay-0 hover:font-bold hover:scale-110 duration-300">
                                        <NavLink
                                            to={`${product.id}/view`}
                                            className={({ isActive, isPending }) =>
                                                isActive ? "active-link" : isPending ? "pending-link" : ""
                                            }
                                        >
                                            {product.name}
                                        </NavLink>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

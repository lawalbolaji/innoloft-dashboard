import { useSelector } from "react-redux";
import { ProductCoreEdit } from "./ProductCoreEdit";
import { ProductOwnerInfo } from "./ProductOwnerInfo";
import { Product } from "../../../../scenes/Product.slice";
import { RootState } from "../../../../store";
import { LocalEditor } from "../../../editor/Editor";
import { RibbonIcon } from "../../../shared/icons/RibbonIcon";

export type ProductViewProps = {
    productDetails: Product;
    isView: boolean;
};

export function ProductCore({ productDetails, isView }: ProductViewProps) {
    const { hasUserSection } = useSelector((state: RootState) => state.configs.entity);

    return (
        <div className="w-full">
            <div className="flex flex-row flex-wrap md:flex-nowrap">
                <div className="w-full md:min-w-[460px]">
                    <div className="flex flex-col gap-y-2 bg-white">
                        <div className="w-full min-h-[300px] relative border-b">
                            <div className="absolute top-0 left-0 h-[40px] z-10">
                                <div className="flex flex-row h-full w-fit border border-t-0 border-l-0 rounded-br-lg">
                                    <div className="bg-[#272E71] w-[40px] h-full flex flex-col justify-center border-r rounded-br-lg">
                                        <div className="m-auto w-[14px] h-[16px]">
                                            <RibbonIcon />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center bg-white">
                                        <div className="py-2 px-4">Patent</div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="object-contain w-full max-h-[300px]"
                                src={productDetails.picture}
                                alt="product image"
                            />
                        </div>
                        {isView ? (
                            <div>
                                <div className="px-2">
                                    <div className="">
                                        <h3 className="py-2 px-4 block w-full font-semibold text-black bg-white text-sm ">
                                            {productDetails.name}
                                        </h3>
                                    </div>
                                    <div className="h-[200px]">
                                        {/* <!-- WYSIWYG --> */}
                                        <div className="h-full">
                                            <LocalEditor htmlString={productDetails.description} readonly={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <ProductCoreEdit
                                productDescription={productDetails.description}
                                productName={productDetails.name}
                            />
                        )}
                    </div>
                </div>
                {hasUserSection && (
                    <ProductOwnerInfo
                        profileImageUrl={productDetails.user.profilePicture}
                        address={productDetails.company.address}
                        companyName={productDetails.company.name}
                        companyLogoUrl={productDetails.company.logo}
                        userFirstName={productDetails.user.firstName}
                        userLastName={productDetails.user.lastName}
                    />
                )}
            </div>
        </div>
    );
}

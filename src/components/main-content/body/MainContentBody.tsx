import { Product } from "../../../scenes/Product.slice";
import { OfferView } from "./offer/OfferView";
import { ProductCore } from "./product/ProductCore";
import { VideoView } from "./video/VideoView";

function convertYoutubeViewUrlToEmbed(url: string) {
    if (url.match(/^(https?:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/)) {
        const urlObj = new URL(url);
        const videoId = urlObj.searchParams.get("v");

        if (videoId !== null) {
            return `https://${urlObj.hostname}/embed/${videoId}`;
        }
    }

    return url;
}

export function MainContentBody({ isView, productDetails }: { isView: boolean; productDetails: Product }) {
    return (
        <>
            <div className="bg-white">
                <div className="h-full border">
                    <ProductCore isView={isView} productDetails={productDetails} />
                </div>
            </div>
            <div className="w-full bg-white border">
                <div className="">
                    <VideoView videoUrl={convertYoutubeViewUrlToEmbed(productDetails.video)} isView={isView} />
                </div>
            </div>
            <div className="bg-white border">
                <div className="h-full">
                    <OfferView
                        trl={productDetails.trl}
                        type={productDetails.type}
                        categories={productDetails.categories}
                        businessModels={productDetails.businessModels}
                        investmentEffort={productDetails.investmentEffort}
                    />
                </div>
            </div>
        </>
    );
}

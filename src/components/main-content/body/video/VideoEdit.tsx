import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProductVideoUrl } from "../../../../scenes/Product.slice";
import { AppDispatch } from "../../../../store";

type UrlDispatchFunction = (url: string, dispatch: AppDispatch) => void;
function debounce<F extends UrlDispatchFunction>(fn: F, delay: number) {
    let timeoutID: number | undefined;
    return function (this: unknown, ...args: Parameters<F>) {
        window.clearTimeout(timeoutID);
        timeoutID = window.setTimeout(() => fn.apply(this, args), delay);
    } as F;
}

function updateProductVideo(url: string, dispatch: AppDispatch) {
    dispatch(updateProductVideoUrl({ video: url as string }));
}
// This has to be called once for the debounce to work
const debouncedDispatch = debounce(updateProductVideo, 1000);

export function VideoEdit({ videoSourceUrl }: { videoSourceUrl: string }) {
    const dispatch = useDispatch<AppDispatch>();
    const [videoUrl, setVideoUrl] = useState(videoSourceUrl);

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVideoUrl(e.currentTarget.value);
        debouncedDispatch(videoUrl, dispatch);
    };

    return (
        <div>
            <div className="p-4">
                <input
                    type="text"
                    value={videoUrl}
                    className="py-2 px-3 block w-full text-black bg-white border border-[#D1D5DB] rounded text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Add a youtube or vimeo link"
                    onChange={handleUrlChange}
                />
            </div>
        </div>
    );
}

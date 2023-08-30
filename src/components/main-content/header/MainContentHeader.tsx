import { BreadCrumbs } from "./BreadCrumbs";
import { Link } from "react-router-dom";

export type MainContentHeaderProps = {
    paths: Array<{ label: string; url: string }>;
    callToActionLabel?: string;
    toUrl?: string;
};

export function MainContentHeader({ paths, callToActionLabel, toUrl }: MainContentHeaderProps) {
    return (
        <div className="w-full px-4">
            <div className="flex flex-row items-center flex-wrap md:flex-nowrap">
                <BreadCrumbs paths={paths} />
                {callToActionLabel !== undefined && toUrl !== undefined && (
                    <div>
                        <Link to={toUrl}>
                            <button
                                type="button"
                                className="py-2 px-3 h-[30px] box-border inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#272E71] text-white hover:bg-[#9f8eed] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                            >
                                {callToActionLabel}
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

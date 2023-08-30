import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";
import { HomeIcon } from "../../shared/icons/HomeIcon";
import { MainContentHeaderProps } from "./MainContentHeader";
import { Link } from "react-router-dom";

export function BreadCrumbs({ paths }: { paths: MainContentHeaderProps["paths"] }) {
    return (
        <div className="flex-auto py-4">
            <ol className="flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
                <li className="text-sm">
                    <Link className="flex items-center text-gray-500 hover:font-bold select-none cursor-pointer" to="/">
                        <div className="">
                            <HomeIcon />
                        </div>

                        <ArrowRightIcon />
                    </Link>
                </li>
                {paths.map((path, idx) => {
                    if (idx === paths.length - 1) {
                        return (
                            <li
                                className="text-sm text-gray-500 font-semibold truncate select-none"
                                aria-current="page"
                                key={idx}
                            >
                                {path.label}
                            </li>
                        );
                    }

                    return (
                        <li className="text-sm" key={idx}>
                            <Link
                                className="flex items-center text-gray-500 hover:font-bold hover:underline select-none cursor-pointer"
                                to={path.url}
                            >
                                {path.label}
                                <ArrowRightIcon />
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

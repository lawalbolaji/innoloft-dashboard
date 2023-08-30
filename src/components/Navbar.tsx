import { useSelector } from "react-redux";
import { RootState } from "../store";

export function NavBar() {
    const { mainColor, logo } = useSelector((state: RootState) => state.configs.entity);

    return (
        <header
            style={{ background: `${mainColor}` }}
            className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full h-[55px] border-b border-gray-200 text-sm py-3 sm:py-0"
        >
            <nav
                className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-12 lg:px-20"
                aria-label="Global"
            >
                <div className="flex items-center justify-between">
                    <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">
                        {/* <!-- Main Company Logo --> */}
                        <div className="h-[30px] w-[200px]">
                            <img className="h-full w-full object-contain" src={logo} alt="main logo" />
                        </div>
                    </a>
                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                            data-hs-collapse="#navbar-collapse-with-animation"
                            aria-controls="navbar-collapse-with-animation"
                            aria-label="Toggle navigation"
                        >
                            <svg
                                className="hs-collapse-open:hidden w-4 h-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                            <svg
                                className="hs-collapse-open:block hidden w-4 h-4"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    id="navbar-collapse-with-animation"
                    className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
                >
                    <div className="hidden md:flex md:flex-row md:items-center md:justify-end md:ml-28">
                        <div className="w-[500px] pl-2">
                            <div className="w-full box-border h-[30px] relative">
                                <input
                                    type="text"
                                    className="py-2 pl-4 pr-8 block w-full h-full rounded border-gray-200 text-sm focus:border-blue-500 focus:ring-blue-500 bg-white text-black dark:border-gray-70"
                                    placeholder="Enter interests, keyword, company name, etc."
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_12987_1324)">
                                            <path
                                                d="M0.5 16C0.401125 16 0.304476 15.9706 0.222271 15.9157C0.140066 15.8608 0.0759963 15.7827 0.0381613 15.6913C0.000326265 15.6 -0.00957522 15.4995 0.00970856 15.4025C0.0289923 15.3055 0.0765956 15.2164 0.1465 15.1465L3.9092 11.3838C2.82057 10.1395 2.2212 8.542 2.2227 6.8887C2.22171 5.45679 2.66696 4.06016 3.49652 2.89303C4.32608 1.72591 5.49873 0.846293 6.85139 0.376518C8.20404 -0.0932558 9.66947 -0.12984 11.0439 0.271852C12.4183 0.673545 13.6334 1.49355 14.5201 2.61783C15.4069 3.74211 15.9213 5.11478 15.9918 6.54495C16.0622 7.97513 15.6853 9.39172 14.9133 10.5977C14.1413 11.8037 13.0127 12.7392 11.6845 13.274C10.3562 13.8089 8.89428 13.9165 7.502 13.582C7.43779 13.5671 7.37715 13.5396 7.3236 13.5012C7.27004 13.4627 7.22461 13.4141 7.18993 13.358C7.15525 13.3019 7.13199 13.2396 7.12151 13.1745C7.11102 13.1094 7.11351 13.0429 7.12884 12.9788C7.14416 12.9146 7.17201 12.8542 7.21078 12.8009C7.24956 12.7476 7.2985 12.7024 7.35478 12.6681C7.41106 12.6338 7.47358 12.6109 7.53873 12.6008C7.60388 12.5908 7.67038 12.5937 7.7344 12.6094C9.12686 12.953 10.5966 12.7806 11.8718 12.124C13.1469 11.4675 14.1411 10.3713 14.6703 9.0383C15.1995 7.70529 15.228 6.2257 14.7504 4.87333C14.2728 3.52095 13.3216 2.38734 12.0726 1.68226C10.8237 0.977178 9.36162 0.748359 7.95698 1.03814C6.55233 1.32793 5.30021 2.1167 4.43229 3.2585C3.56437 4.4003 3.13942 5.81784 3.23607 7.2488C3.33272 8.67976 3.94443 10.0273 4.958 11.042C5.05174 11.1358 5.10439 11.2629 5.10439 11.3955C5.10439 11.5281 5.05174 11.6552 4.958 11.749L0.8535 15.8535C0.807144 15.9 0.752047 15.9369 0.69138 15.9621C0.630712 15.9872 0.565671 16.0001 0.5 16Z"
                                                fill="#374151"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_12987_1324">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex-auto">
                            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-4 sm:mt-0 sm:pl-2">
                                <a
                                    className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
                                    href="#"
                                    aria-current="page"
                                >
                                    {/* <!-- contact --> */}
                                    <div className="">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_12987_1327)">
                                                <path
                                                    d="M4.3887 9.27734C4.19092 9.27734 3.99758 9.2187 3.83313 9.10881C3.66868 8.99893 3.54051 8.84275 3.46482 8.66003C3.38914 8.4773 3.36933 8.27623 3.40792 8.08225C3.4465 7.88827 3.54174 7.71009 3.6816 7.57024C3.82145 7.43039 3.99963 7.33514 4.19361 7.29656C4.38759 7.25797 4.58866 7.27778 4.77139 7.35346C4.95411 7.42915 5.11029 7.55733 5.22017 7.72177C5.33005 7.88622 5.3887 8.07956 5.3887 8.27734C5.38846 8.54249 5.28303 8.7967 5.09555 8.98419C4.90806 9.17167 4.65385 9.27711 4.3887 9.27734Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M7.7222 9.27734C7.52442 9.27734 7.33108 9.2187 7.16663 9.10881C7.00218 8.99893 6.87401 8.84275 6.79832 8.66003C6.72263 8.4773 6.70283 8.27623 6.74141 8.08225C6.78 7.88827 6.87524 7.71009 7.01509 7.57024C7.15494 7.43039 7.33313 7.33514 7.52711 7.29656C7.72109 7.25797 7.92216 7.27778 8.10488 7.35346C8.28761 7.42915 8.44379 7.55733 8.55367 7.72177C8.66355 7.88622 8.7222 8.07956 8.7222 8.27734C8.72196 8.54249 8.61653 8.7967 8.42904 8.98419C8.24156 9.17167 7.98734 9.27711 7.7222 9.27734Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M11.0557 9.27734C10.8579 9.27734 10.6646 9.2187 10.5002 9.10881C10.3357 8.99893 10.2075 8.84275 10.1318 8.66003C10.0562 8.4773 10.0364 8.27623 10.0749 8.08225C10.1135 7.88827 10.2088 7.71009 10.3486 7.57024C10.4885 7.43039 10.6667 7.33514 10.8606 7.29656C11.0546 7.25797 11.2557 7.27778 11.4384 7.35346C11.6211 7.42915 11.7773 7.55733 11.8872 7.72177C11.9971 7.88622 12.0557 8.07956 12.0557 8.27734C12.0555 8.54249 11.9501 8.7967 11.7626 8.98419C11.5751 9.17167 11.3209 9.27711 11.0557 9.27734Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M8 16H2.1665C2.03389 16 1.90671 15.9473 1.81295 15.8536C1.71918 15.7598 1.6665 15.6326 1.6665 15.5C1.6665 15.3674 1.71918 15.2402 1.81295 15.1465C1.90671 15.0527 2.03389 15 2.1665 15H8C9.38447 15 10.7378 14.5895 11.889 13.8203C13.0401 13.0511 13.9373 11.9579 14.4672 10.6788C14.997 9.39971 15.1356 7.99224 14.8655 6.63437C14.5954 5.2765 13.9287 4.02922 12.9497 3.05026C11.9708 2.07129 10.7235 1.4046 9.36563 1.13451C8.00776 0.86441 6.6003 1.00303 5.32122 1.53285C4.04213 2.06266 2.94888 2.95987 2.17971 4.11101C1.41054 5.26216 1 6.61553 1 8V13.833C1 13.9656 0.947322 14.0928 0.853553 14.1866C0.759785 14.2803 0.632608 14.333 0.5 14.333C0.367392 14.333 0.240215 14.2803 0.146447 14.1866C0.0526784 14.0928 0 13.9656 0 13.833V8C0 6.41775 0.469192 4.87103 1.34824 3.55544C2.22729 2.23985 3.47672 1.21447 4.93853 0.608967C6.40034 0.00346625 8.00887 -0.15496 9.56072 0.153721C11.1126 0.462403 12.538 1.22433 13.6569 2.34315C14.7757 3.46197 15.5376 4.88743 15.8463 6.43928C16.155 7.99113 15.9965 9.59966 15.391 11.0615C14.7855 12.5233 13.7602 13.7727 12.4446 14.6518C11.129 15.5308 9.58225 16 8 16Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_12987_1327">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </a>

                                <div className="sm:py-4">
                                    <button
                                        type="button"
                                        className="flex items-center w-full text-white hover:text-gray-400 font-medium"
                                    >
                                        EN
                                        <svg
                                            className="ml-2 w-2.5 h-2.5 text-white"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>

                                <a className="font-medium text-white hover:text-gray-400 sm:py-6" href="#">
                                    {/* <!-- Notifications--> */}
                                    <div className="">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_12987_1332)">
                                                <path
                                                    d="M7.99999 15.9824C7.32856 15.9798 6.68103 15.7329 6.17837 15.2878C5.67571 14.8426 5.35231 14.2297 5.26859 13.5635C5.25963 13.498 5.26375 13.4314 5.28071 13.3675C5.29766 13.3036 5.32712 13.2437 5.36738 13.1912C5.40764 13.1388 5.45789 13.0949 5.51524 13.062C5.57259 13.0291 5.63588 13.0079 5.70147 12.9996C5.76706 12.9914 5.83364 12.9962 5.89735 13.0138C5.96106 13.0315 6.02065 13.0616 6.07265 13.1024C6.12466 13.1432 6.16805 13.1939 6.20033 13.2516C6.23261 13.3093 6.25312 13.3728 6.26069 13.4385C6.31159 13.864 6.51671 14.2561 6.83724 14.5406C7.15776 14.825 7.57144 14.9821 7.99999 14.9821C8.42854 14.9821 8.84222 14.825 9.16275 14.5406C9.48327 14.2561 9.68839 13.864 9.73929 13.4385C9.74686 13.3728 9.76737 13.3093 9.79965 13.2516C9.83193 13.1939 9.87532 13.1432 9.92733 13.1024C9.97933 13.0616 10.0389 13.0315 10.1026 13.0138C10.1663 12.9962 10.2329 12.9914 10.2985 12.9996C10.3641 13.0079 10.4274 13.0291 10.4847 13.062C10.5421 13.0949 10.5923 13.1388 10.6326 13.1912C10.6729 13.2437 10.7023 13.3036 10.7193 13.3675C10.7362 13.4314 10.7403 13.498 10.7314 13.5635C10.6477 14.2297 10.3243 14.8426 9.82161 15.2878C9.31895 15.7329 8.67142 15.9798 7.99999 15.9824Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M15.5 12.586H0.5C0.367392 12.586 0.240215 12.5333 0.146447 12.4395C0.0526784 12.3457 0 12.2186 0 12.086C0 11.9533 0.0526784 11.8262 0.146447 11.7324C0.240215 11.6386 0.367392 11.586 0.5 11.586C0.967607 11.5855 1.41593 11.3996 1.74659 11.0689C2.07725 10.7383 2.26322 10.29 2.2637 9.82235V5.57715C2.2664 4.36593 2.64256 3.18501 3.34089 2.19536C4.03922 1.20571 5.02575 0.455485 6.166 0.0469529C6.22832 0.0226152 6.29489 0.0110314 6.36176 0.0128878C6.42864 0.0147442 6.49446 0.030003 6.55534 0.0577603C6.61621 0.0855177 6.67089 0.125209 6.71615 0.174483C6.7614 0.223758 6.79631 0.281613 6.81879 0.344622C6.84128 0.407631 6.8509 0.474513 6.84707 0.541306C6.84324 0.608098 6.82605 0.673444 6.79651 0.733471C6.76697 0.793498 6.72568 0.846986 6.67509 0.890767C6.62451 0.934549 6.56565 0.967732 6.502 0.988353C5.55585 1.32737 4.73724 1.94988 4.15774 2.77105C3.57825 3.59222 3.26605 4.5721 3.2637 5.57715V9.82235C3.26454 10.4668 3.03882 11.0911 2.626 11.586H13.374C12.9612 11.0911 12.7355 10.4668 12.7363 9.82235V5.57715C12.734 4.5721 12.4218 3.59222 11.8423 2.77105C11.2628 1.94988 10.4442 1.32737 9.498 0.988353C9.37686 0.941042 9.27891 0.84839 9.22495 0.730057C9.171 0.611725 9.16527 0.477024 9.20899 0.354537C9.2527 0.232051 9.34243 0.131418 9.45912 0.0739923C9.5758 0.0165667 9.71028 0.00686751 9.834 0.0469529C10.9742 0.455473 11.9607 1.20567 12.6591 2.19527C13.3574 3.18488 13.7336 4.36576 13.7363 5.57695V9.82235C13.7368 10.29 13.9228 10.7383 14.2534 11.0689C14.5841 11.3996 15.0324 11.5855 15.5 11.586C15.6326 11.586 15.7598 11.6386 15.8536 11.7324C15.9473 11.8262 16 11.9533 16 12.086C16 12.2186 15.9473 12.3457 15.8536 12.4395C15.7598 12.5333 15.6326 12.586 15.5 12.586Z"
                                                    fill="white"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_12987_1332">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </a>

                                <div className="sm:py-4">
                                    <button
                                        type="button"
                                        className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 "
                                    >
                                        {/* <!-- Profile --> */}
                                        <div className="my-auto px-[5%]">
                                            <div className="relative inline-block">
                                                <img
                                                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-800"
                                                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                                    alt="Image Description"
                                                />
                                            </div>
                                        </div>

                                        <svg
                                            className="ml-2 w-2.5 h-2.5 text-white"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
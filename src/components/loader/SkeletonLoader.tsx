import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export function SkeletonLoader() {
    return (
        <SkeletonTheme baseColor="#fff" highlightColor="#c0c0c0">
            <div className="sm:hidden p-4 w-[100vw]">
                <Skeleton count={25} className="h-[24px] w-full" />
            </div>
            <div className="w-full hidden sm:flex sm:flex-col gap-y-8 justify-center">
                <div className="">
                    <Skeleton count={1} className="h-[24px] w-full" />
                </div>
                <div className="flex flex-row align-middle gap-x-4">
                    <div className="w-[60%]">
                        <Skeleton count={14} className="h-[24px] w-full" />
                    </div>
                    <div className="flex-auto">
                        <Skeleton count={8} className="h-[24px] w-full" />
                    </div>
                </div>
                <div className="">
                    <Skeleton count={5} className="h-[24px] w-full" />
                </div>
                <div className="">
                    <Skeleton count={8} className="h-[24px] w-full" />
                </div>
            </div>
        </SkeletonTheme>
    );
}

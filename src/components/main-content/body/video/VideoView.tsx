import { VideoEdit } from "./VideoEdit";

export function VideoView({ videoUrl, isView }: { videoUrl: string; isView: boolean }) {
    return (
        <div className="w-full">
            <div className="w-full">
                <div className="py-3 px-3">Video</div>
                {isView ? (
                    <div className="pt-4 pb-12 flex flex-row w-full items-center justify-center">
                        <iframe className="h-96 w-full md:w-[75%]" src={videoUrl}></iframe>
                    </div>
                ) : (
                    <VideoEdit videoSourceUrl={videoUrl} />
                )}
            </div>
        </div>
    );
}

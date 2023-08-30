type ProfileHeroProps = {
    name: string;
    company: string;
    imageUrl: string;
};

export function ProfileHero({ name, company, imageUrl }: ProfileHeroProps) {
    return (
        <div className="flex flex-row min-w-9/12">
            <div className="my-auto px-[5%]">
                <div className="relative inline-block">
                    <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
                        src={imageUrl}
                        alt="profile picture"
                    />
                    <span className="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-gray-400"></span>
                </div>
            </div>
            <div className="flex flex-col flex-auto">
                <h2 className="font-bold">{name}</h2>
                <p className="text-sm">{company}</p>
            </div>
        </div>
    );
}

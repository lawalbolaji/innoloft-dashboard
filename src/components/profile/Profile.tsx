import { ProfileHero } from "./ProfileHero";
import { HomeIcon } from "../shared/icons/HomeIcon";
import { MembersIcon } from "../shared/icons/MembersIcon";
import { OrganizationsIcon } from "../shared/icons/OrganizationsIcon";

type MenuItem = {
    label: string;
    icon: JSX.Element;
    toUrl: string;
};

const menuItems: Array<MenuItem> = [
    {
        label: "Home",
        icon: <HomeIcon />,
        toUrl: "/",
    },
    {
        label: "Members",
        icon: <MembersIcon />,
        toUrl: "#",
    },
    {
        label: "Organizations",
        icon: <OrganizationsIcon />,
        toUrl: "#",
    },
];

export function Profile() {
    return (
        <div className="min-w-[25%] text-base hidden md:block">
            <div className="mt-[10%] w-full px-4">
                {/* <!-- User Profile --> */}
                <ProfileHero
                    name="Rasheed Lawal"
                    company="Innoloft Gmbh"
                    imageUrl="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                />

                {/* <!-- Menu links --> */}
                <div className="list-style-none mt-8 pl-[5%]">
                    <div className="flex flex-col gap-y-4">
                        {menuItems.map((menuItem, idx) => (
                            <div key={idx} className="flex flex-row gap-x-4">
                                <div className="my-auto select-none">{menuItem.icon}</div>
                                <div className="select-none cursor-pointer transition ease-in-out delay-0 hover:font-bold hover:scale-110 duration-300">
                                    <a href={menuItem.toUrl} className="no-underline">
                                        {menuItem.label}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

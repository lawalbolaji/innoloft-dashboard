import { Product } from "../../../../scenes/Product.slice";
import { ClockIcon } from "../../../shared/icons/ClockIcon";
import { KnightIcon } from "../../../shared/icons/KnightIcon";
import { MoneyBagIcon } from "../../../shared/icons/MoneyBagIcon";
import { SettingsIcon } from "../../../shared/icons/SettingsIcon";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type OfferViewProps = {
    trl: {
        id: number;
        name: string;
    };
    categories: Product["categories"];
    type: Product["type"];
    businessModels: Product["businessModels"];
    investmentEffort: Product["investmentEffort"];
};

export function Banner({ label }: { label: string }) {
    return (
        <div>
            <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-full text-xs bg-[#E5E7EB] text-[#6B7280]">
                {label}
            </span>
        </div>
    );
}

export function OfferView({ trl, categories, type, businessModels, investmentEffort }: OfferViewProps) {
    return (
        <div className="w-full">
            <div className="w-full">
                <div className="py-2 px-3 h-[30%]">Offer Details</div>
                <div className="p-4">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2">
                        <div className="w-full">
                            <div className="flex flex-row w-full">
                                <div>
                                    <SettingsIcon />
                                </div>
                                <div className="px-3">
                                    <div className="flex flex-col gap-1">
                                        <div>{type.name}</div>
                                        <div className="flex flex-row gap-2 justify-start">
                                            {categories
                                                .map((category) => category.name)
                                                .slice(0, 3)
                                                .map((label, idx) => (
                                                    <Banner key={idx} label={label} />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row w-full">
                                <div>
                                    <KnightIcon />
                                </div>
                                <div className="px-3">
                                    <div className="flex flex-col gap-1">
                                        <div>Business Model</div>
                                        <div className="flex flex-row gap-2 justify-start">
                                            {businessModels
                                                .map((model) => model.name)
                                                .slice(0, 3)
                                                .map((label, idx) => (
                                                    <Banner key={idx} label={label} />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row w-full">
                                <div>
                                    <ClockIcon />
                                </div>
                                <div className="px-3 w-full">
                                    <div className="flex flex-col gap-1">
                                        <div>TRL</div>
                                        <div className="flex flex-row gap-2 justify-start w-full">
                                            <div className="w-full">
                                                <span className="inline-block whitespace-nowrap	overflow-hidden text-ellipsis w-[80%] py-1 px-2 rounded-full text-xs bg-[#E5E7EB] text-[#6B7280]">
                                                    {trl.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-row h-full w-full">
                                <div>
                                    <MoneyBagIcon />
                                </div>
                                <div className="px-3">
                                    <div className="flex flex-col gap-1">
                                        <div>Cost</div>
                                        <div className="flex flex-row gap-2 justify-start">
                                            <div>
                                                <Banner label={investmentEffort} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

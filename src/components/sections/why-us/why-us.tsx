import Title from "@/components/ui/title";
import Image from "next/image";

const features = [
    {
        title: "Achievement",
        desc: "More than two thousand business projects",
        icon: "/images/icons/featuresIcons/technology-integrated-circuits.svg",
    },
    {
        title: "Experience",
        desc: "More than three decades of collective experience of the founders",
        icon: "/images/icons/featuresIcons/command-window-line.svg",
    },
    {
        title: "Credibility",
        desc: "Operating on the basis of official licenses",
        icon: "/images/icons/featuresIcons/developer.svg",
    },
    {
        title: "Learning",
        desc: "Each project a new learning",
        icon: "/images/icons/featuresIcons/responsive.svg",
    },
    // {
    //     title: "Onboarding",
    //     desc: "Our onboarding process is designed to be simple and intuitive, so you can start using our platform right away",
    //     icon: "/images/icons/featuresIcons/repository.svg",
    // },
    // {
    //     title: "Support",
    //     desc: "Our commitment to exceptional support ensures that you receive the assistance you need, whenever you need it",
    //     icon: "/images/icons/featuresIcons/interface-settings.svg",
    // },
]

export default function WhyUs() {
    return (
        <section id={"aboutUs"} className="md:my-10 md:mx-30 my-5 mx-5 bg-transparent">
            <Title brand='MinKits Team' title='Why Kardan Customs?'
                   subTitle='Build faster, stay consistent, and focus on creating better products.'/>
            <div className="max-w-7xl mx-auto px-6">

                {/*/!* Header *!/*/}
                {/*<div className="text-center max-w-3xl mx-auto mb-20">*/}
                {/*    <h2 className="text-4xl font-bold text-zinc-900 mb-4">*/}
                {/*        Every feature designed for the user*/}
                {/*    </h2>*/}
                {/*    <p className="text-zinc-500 text-lg">*/}
                {/*        At every step of our process, we prioritize the user, ensuring that our*/}
                {/*        products and services are designed with their needs in mind.*/}
                {/*    </p>*/}
                {/*</div>*/}

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 content-center">
                    <div className="items-center">
                        <Image src={"/images/why-us/image.png"} width={400} height={200} alt={"features"}
                        />
                    </div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                            {features.map((item, i) => {
                                return (
                                    <div
                                        key={i}
                                        className={` cursor-pointer
                  m-5 p-5
                  border-1 rounded-[var(--radius-md)]
                  border-[var(--gray)]/50
                `}
                                    >
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="flex justify-center items-center">
                                                <div
                                                    className="bg-[var(--color-accent)]/10  border-0 rounded-[var(--radius-md)] p-3">
                                                    <svg
                                                        className="w-[48px] h-[48px] text-[var(--color-accent)]/50 dark:text-white"
                                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                                        width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                        <path fillRule="evenodd"
                                                              d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </div>

                                                {/*<Image src={"/images/icons/icons/banknotes.svg"} width={200} height={200} alt={"features"}*/}
                                                {/*       className="w-20 h-20"/>*/}
                                            </div>
                                            <div className="col-span-2 py-5">
                                                <div className="grid grid-flow-col grid-rows-2 gap-2">
                                                    <div>
                                                        <h4 className="font-bold">{item.title}</h4>
                                                    </div>
                                                    <div><h6 className="sub-heading-1">
                                                        {item.desc}
                                                    </h6></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<div className="flex justify-center">*/}
                                        {/*    <Image src={item.icon} width={200} height={200} alt={"features"}*/}
                                        {/*           className="w-20 h-20"/>*/}
                                        {/*</div>*/}

                                        {/*<h3 className="text-lg font-semibold text-zinc-900">*/}
                                        {/*    {item.title}*/}
                                        {/*</h3>*/}
                                        {/*<div*/}
                                        {/*    className='w-full h-px my-5 bg-linear-to-r from-white/25 via-zinc-500 to-white/25'></div>*/}
                                        {/*<p className="text-zinc-500 text-sm leading-relaxed">*/}
                                        {/*    {item.desc}*/}
                                        {/*</p>*/}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

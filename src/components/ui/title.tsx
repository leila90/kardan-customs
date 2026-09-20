import Image from "next/image";

type SectionTitleProps = {
    brand: string,
    title: string,
    subTitle?: string,
    description?: string,
    marginTop?: string
}

export default function Title(props: SectionTitleProps
) {
    const {brand, title, subTitle, description, marginTop} = props
    return (

            <div
                className={`mb-4 ${marginTop ? "mt-"+marginTop : "mt-20"}`}
                style={{opacity: 1, transform: 'none'}}
            >
                {/* Top small label */}
                <div className="flex items-center gap-2 overflow-visible">

                    <h3
                        className="
                            text-xl
                            font-bold
                            text-[var(--color-accent)]
                        "
                    >
                        {title}
                    </h3>
                    <div className="relative flex flex-col items-end w-full lg:w-[340px] h-full">
                        <div
                             className="h-px w-full from-[var(--color-text-primary)] via-[var(--color-text-primary)]/50 to-[var(--color-text-primary)]/0 rtl:bg-linear-to-l ltr:bg-linear-to-r">
                        </div>

                        <p className="m-0 lg:text-[9px] text-[7px] font-bold absolute bottom-1">
                            <Image src={"/images/logo/logo-f-w.png"} alt={brand} width={70} height={12} />
                        </p>
                    </div>
                </div>
                {subTitle ? (
                    <div className="font-light text-base flex items-center gap-2 overflow-visible mt-5">
                    {/* Divider SVG */}
                    <div className="icon-display">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="0" fill="var(--color-text-primary)">
                                <animate attributeName="r" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99"
                                         repeatCount="indefinite" values="0;11"></animate>
                                <animate attributeName="opacity" calcMode="spline" dur="1.2s"
                                         keySplines=".52,.6,.25,.99" repeatCount="indefinite" values="1;0"></animate>
                            </circle>
                        </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[var(--color-text-primary)]">
                    {subTitle}
                </h3>
                </div>) : null}
                {description ? (<div className="font-light text-base flex items-center gap-2 overflow-visible mt-5">
                    <h3 className="heading-4 text-[var(--color-text-primary)]">
                    {description}
                </h3>
                </div>) : null }
            </div>
    )
}

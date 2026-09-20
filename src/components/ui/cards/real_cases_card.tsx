import Image from "next/image";

type RealCasesCardProps = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    href?: string;
};

export function RealCasesCard({
                                  title,
                                  description,
                                  image,
                                  imageAlt,
                                  href = "#",
                              }: RealCasesCardProps) {
    return (
        <a
            href={href}
            className="

        group relative isolate block
        h-[200px] w-full
        overflow-hidden
        rounded-[var(--radius-md)]
        border border-white/[0.10]
        bg-[var(--kardan-black)]
        {/*bg-black*/}
        shadow-[0_8px_30px_rgba(0,0,0,0.18)]
        transition-all duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        p-2
        hover:-translate-y-[2px]
        {/*hover:border-[color:color-mix(in_srgb,var(--amber)_35%,transparent)]*/}
        hover:shadow-[0_14px_45px_rgba(0,0,0,0.30)]
      "
        >
            {/* Ambient glow */}
            <span
                aria-hidden="true"
                className="
          pointer-events-none
          absolute -inset-10 -z-10
          rounded-full
          {/*bg-[radial-gradient(circle,var(--amber)_0%,transparent_68%)]*/}
          bg-transparent
          opacity-0
          blur-2xl
          transition-opacity duration-500
          group-hover:opacity-[0.07]
        "
            />

            {/* Light sweep */}
            <span
                aria-hidden="true"
                className="
          pointer-events-none
          absolute -top-1/2 -left-[45%] z-30
          h-[200%] w-[28%]
          rotate-[18deg]
          bg-gradient-to-r
          from-transparent
          via-white/[0.07]
          to-transparent
          opacity-0
          transition-all duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:left-[120%]
          group-hover:opacity-100
        "
            />

            <div
                className="
          relative flex h-full w-full
          flex-row
          rtl:flex-row
          ltr:flex-row-reverse
        "
            >
                {/* ─────────────────────────────
            IMAGE
        ───────────────────────────── */}
                <div
                    className="
            relative
            h-full
            w-[60%]
            shrink-0
            overflow-hidden
            {/*bg-blue-500*/}
            {/*-mr-10*/}

          "
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 768px) 38vw, 220px"
                        className="
                        -mr-5 py-4
                        rounded-[var(--radius-md)]
                         mask-[radial-gradient(ellipse_at_center,black_25%,transparent_100%)]
              object-cover
              scale-[1.01]
              transition-transform
              duration-1000
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.12]
            "
                    />

                    {/*
            FA:
            image سمت چپ
            fade از سمت راست تصویر

            EN:
            image سمت راست
            fade از سمت چپ تصویر
          */}
                    <div
                        aria-hidden="true"
                        className="
              pointer-events-none absolute inset-0

              bg-gradient-to-l
              from-transparent
              via-[var(--kardan-black)]/[0.9]
              to-[var(--kardan-black)]

              {/*ltr:bg-gradient-to-l*/}
              {/*ltr:from-transparent*/}
              {/*ltr:via-[var(--carbon-black)]/[0.18]*/}
              {/*ltr:to-[var(--carbon-black)]*/}
            "
                    />

                    {/* Image darkening */}
                    <div
                        aria-hidden="true"
                        className="
              pointer-events-none absolute inset-0
              {/*bg-black/[0.12]*/}
              transition-opacity duration-500
              {/*group-hover:bg-black/[0.02]*/}
            "
                    />
                </div>

                {/* ─────────────────────────────
            CONTENT
        ───────────────────────────── */}
                <div
                    className="
            relative z-10
            flex min-w-0 flex-1
            flex-col
            justify-center
            min-w-0 flex-1 px-3 py-3 text-center sm:px-4
          "
                >
                    <h3
                        className="
              line-clamp-2
              text-[13px]
              font-semibold
              leading-[1.65]
              tracking-[-0.01em]
              text-[var(--color-text-primary)]
              transition-colors duration-300
              group-hover:text-[var(--bright-snow)]
            "
                    >
                        {title}
                    </h3>

                    <p
                        className="
              mt-1.5
              line-clamp-2
              text-[10px]
              leading-[1.8]
              text-[var(--color-text-muted)]
              transition-colors duration-300
              group-hover:text-[var(--charcoal)]
            "
                    >
                        {description}
                    </p>

                    {/* Arrow */}
            {/*        <div*/}
            {/*            className="*/}
            {/*  mt-2*/}
            {/*  flex items-center*/}
            {/*  text-[var(--amber)]*/}
            {/*  opacity-60*/}
            {/*  transition-all duration-400*/}
            {/*  group-hover:translate-x-0*/}
            {/*  group-hover:opacity-100*/}
            {/*"*/}
            {/*        >*/}
            {/*            /!* Persian *!/*/}
            {/*            <ArrowUpLeft*/}
            {/*                aria-hidden="true"*/}
            {/*                className="*/}
            {/*    hidden h-3.5 w-3.5*/}
            {/*    rtl:block*/}
            {/*    transition-transform duration-500*/}
            {/*    group-hover:-translate-x-1*/}
            {/*    group-hover:-translate-y-1*/}
            {/*  "*/}
            {/*            />*/}

            {/*            /!* English *!/*/}
            {/*            <ArrowUpRight*/}
            {/*                aria-hidden="true"*/}
            {/*                className="*/}
            {/*    rtl:hidden h-3.5 w-3.5*/}
            {/*    ltr:block*/}
            {/*    transition-transform duration-500*/}
            {/*    group-hover:translate-x-1*/}
            {/*    group-hover:-translate-y-1*/}
            {/*  "*/}
            {/*            />*/}
            {/*        </div>*/}
                </div>
            </div>

            <span
                aria-hidden="true"
                className="
          pointer-events-none
          absolute bottom-0 start-0
          h-px w-0
          {/*bg-gradient-to-r*/}
          {/*from-transparent*/}
          {/*via-[var(--amber)]*/}
          {/*to-transparent*/}
          opacity-0
          transition-all duration-500
          group-hover:w-full
          group-hover:opacity-60
        "
            />
        </a>
    );
}
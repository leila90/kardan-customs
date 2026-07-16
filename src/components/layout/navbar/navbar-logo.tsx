import Image from "next/image";

export default function NavbarLogo() {
    return (
        <div>
            <Image
                src="/images/logo/logo-f-w.png"
                alt={"logo"}
                width={150}
                height={100}
            ></Image>
        </div>
    );
}
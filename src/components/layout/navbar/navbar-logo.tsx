import Image from "next/image";

export default function NavbarLogo() {
    return (
        <div>
            <Image
                src="/images/logo/logo-f-w.png"
                alt="Kardan Customs"
                width={150}
                height={26}
            ></Image>
        </div>
    );
}
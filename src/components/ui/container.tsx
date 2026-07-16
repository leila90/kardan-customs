import { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
};

export default function Container({
                                      children,
                                      className = "",
                                  }: ContainerProps) {
    return (
        <div
            className={`mx-auto w-full px-4 lg:px-8 ${className}`}
            style={{
                maxWidth: "var(--container-max-width)",
            }}
        >
            {children}
        </div>
    );
}
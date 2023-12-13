import Header from "./Header";
import Footer from "./Footer";
import React, {useEffect, useState} from "react";
import {multiColorsOnHover} from "../colors";

interface LayoutProps {
    children: React.ReactNode;
    isHovered: boolean;
    onMouseOver: () => void;
    onMouseOut: () => void;
}

export default function Layout({ children }: LayoutProps) {

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const color = multiColorsOnHover();
        document.documentElement.style.setProperty('--dynamic-color', color.toString());
    }, [isHovered]);



    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                //@ts-ignore
                isHovered: isHovered,
                onMouseOver: handleMouseOver,
                onMouseOut: handleMouseOut,
            });
        }
        return child;
    });

    return (
        <>
            <Header />
                {childrenWithProps}
            <Footer />
        </>
    );
}

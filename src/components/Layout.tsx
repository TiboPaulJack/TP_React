import Header from "./Header";
import Footer from "./Footer";
import React, {useEffect, useState} from "react";
import {multiColorsOnHover} from "../utils/colors";

interface LayoutProps {
    children?: React.ReactNode;
    isHovered?: boolean;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
}

export default function Layout({ children }: LayoutProps) {


    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const color = multiColorsOnHover();
        document.documentElement.style.setProperty('--dynamic-color', color.toString());
    }, [isHovered]);


// Function to set isHovered state to true on mouse over
    const handleMouseOver = () => {
        setIsHovered(true);
    };

// Function to set isHovered state to false on mouse out
    const handleMouseOut = () => {
        setIsHovered(false);
    };

// Mapping over children to clone elements and pass hover-related props
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                // Passing isHovered state and mouse event handlers as props
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

import Layout from "./Layout";
import { Cocktail } from "../App";
import { FC, useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";
import {Link} from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

interface HomeProps {
    cocktails: Cocktail[];
    categories: { strCategory: string }[];
    isHovered?: boolean;
    handleMouseOver?: () => void;
    handleMouseOut?: () => void;
}



const Home: FC<HomeProps> = ({ cocktails, categories, handleMouseOver, handleMouseOut, isHovered }) => {


    const [last4Cocktails, setLast4Cocktails] = useState<Cocktail[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (cocktails.length > 0) {
            setLast4Cocktails(cocktails.slice(-4));
        }
        if (categories.length > 0) {
            setIsLoaded(true);
        }
    }, [cocktails, categories]);



// Mapping through the last 4 cocktails to generate corresponding JSX elements
    const last4CocktailsList = last4Cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
    ));

// Selecting a random category if available
    const randomCategory = categories.length > 0
        ? categories[Math.floor(Math.random() * categories.length)]
        : null;

// Extracting the name of the random category (or an empty string if none)
    const randomCategoryName = randomCategory ? randomCategory.strCategory : '';

// Formatting the random category name by replacing spaces and slashes with underscores
    const randomCategoryNameFormatted = randomCategoryName.replace(/[\s/]+/g, "_");

    return (
        // @ts-ignore
        <Layout isHovered={isHovered} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="Home">
                <section className="Home__section">
                    {isLoaded && randomCategory && (
                        <Link to={`/cocktails/category/${randomCategoryNameFormatted}`}
                              onMouseOver={handleMouseOver}
                              onMouseOut={handleMouseOut}
                              className={isHovered ? 'hovered' : ''}>
                            <h2>{randomCategoryName}</h2>
                        </Link>
                    )}
                </section>
                <div className="CocktailsGrid">
                    {last4CocktailsList}
                </div>
            </div>
        </Layout>

    );

};

export default Home;

import React, { FC, useEffect, useState } from "react";
import Layout from "./Layout";
import CocktailCard from "./CocktailCard";
import { useParams } from "react-router-dom";
import {getCocktailsByCategory, getCocktailsByGlass, getCocktailsByIngredient} from "../api/GetCocktails";
import { Cocktail } from "../App";

interface CocktailsProps {
    cocktails: Cocktail[];
}

const Cocktails: FC<CocktailsProps> = ({ cocktails }) => {

    const [error, setError] = useState<string>("");
    const [filteredCocktails, setFilteredCocktails] = useState<Cocktail[]>([]);
    const { dynamicParam, value } = useParams();

    if (error) throw error;


// Fetching filtered cocktails based on the dynamic parameter (glass, category, or ingredient)
    useEffect(() => {
        if (dynamicParam === "glass") {
            const formattedValue = value?.replace(/ /g, "_");
            // @ts-ignore
            getCocktailsByGlass(formattedValue)
                .then((data) => setFilteredCocktails(data))
                .catch((error) => setError(error))
        }
        if (dynamicParam === "category") {
            const formattedValue = value?.replace(/ /g, "_");
            // @ts-ignore
            getCocktailsByCategory(formattedValue)
                .then((data) => setFilteredCocktails(data))
                .catch((error) => setError(error));
        }
        if (dynamicParam === "ingredient") {
            const formattedValue = value?.replace(/ /g, "_");
            // @ts-ignore
            getCocktailsByIngredient(formattedValue)
                .then((data) => setFilteredCocktails(data))
                .catch((error) => setError(error));
        }
    }, [dynamicParam, value]);

// Displaying either filtered cocktails or the entire cocktail list
    const displayCocktails = dynamicParam ? filteredCocktails : cocktails;

// Mapping through the displayed cocktails to generate corresponding JSX elements
    const cocktailList = displayCocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
    ));


    return (
        <Layout>
            <div className="Cocktails">
                <div className="CocktailsGrid">{cocktailList}</div>
            </div>
        </Layout>
    );
};

export default Cocktails;

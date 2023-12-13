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
    const [filteredCocktails, setFilteredCocktails] = useState<Cocktail[]>([]);
    const { dynamicParam, value } = useParams();


    useEffect(() => {
        if (dynamicParam === "glass") {
            const formattedValue = value?.replace(/ /g, "_");
            // @ts-ignore
            getCocktailsByGlass(formattedValue).then((data) => setFilteredCocktails(data));
        }
        if (dynamicParam === "category") {
            const formattedValue = value?.replace(/ /g, "_");
            // @ts-ignore
            getCocktailsByCategory(formattedValue).then((data) => setFilteredCocktails(data));
        }
        if (dynamicParam === "ingredient") {
            const formattedValue = value?.replace(/ /g, "_");
            // @ts-ignore
            getCocktailsByIngredient(formattedValue).then((data) => setFilteredCocktails(data));
        }


    }, [dynamicParam, value]);

    const displayCocktails = dynamicParam ? filteredCocktails : cocktails;

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

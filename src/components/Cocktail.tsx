import React, {useEffect} from "react";
import Layout from "./Layout";
import {useParams} from "react-router-dom";
import {getCocktailsById} from "../api/GetCocktails";


const Cocktail: React.FC = () => {

    const { id }  = useParams();

    const [cocktail, setCocktail] = React.useState<any>([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);

    if (error) throw error;

    useEffect(() => {
            getCocktailsById(id)
                .then((response) => setCocktail(response[0]))
                .catch((error) => {setError(error)});
        if (cocktail) setIsLoaded(true);
    }, []);



    // Construct an array 'ingredients' from the 'cocktail' object's properties
    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        // Check if 'ingredient' exists, then push a formatted string to 'ingredients' array
        if (ingredient) {
            ingredients.push(`${ingredient} - ${measure}`);
        }
    }
    // Map the 'ingredients' array to HTML paragraphs with a class of "ingredients"
    const ingredientsList = ingredients.map((ingredient) => (
        <p className={"ingredients"} key={ingredient}>{ingredient}</p>
    ));


    return (
        <Layout>
            <div className="Cocktail">
                {isLoaded ? (
                    <>
                        <div className="Cocktail-image">
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        </div>
                        <div className="cocktail-content">
                            <h1>{cocktail.strDrink}</h1>
                            <p className={"instructions"}>{cocktail.strInstructions}</p>
                            {ingredientsList}
                            <p className={"glass"}> {cocktail.strGlass}</p>
                        </div>
                    </>
                ) : (
                    <span className="loader"></span>
                )}
            </div>
        </Layout>

    )
}


export default Cocktail;
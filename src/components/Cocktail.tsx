import React, {useEffect} from "react";
import Layout from "./Layout";
import {useParams} from "react-router-dom";
import {getCocktailsById} from "../api/GetCocktails";


const Cocktail: React.FC = () => {

    // @ts-ignore
    const { id }  = useParams();

    const [cocktail, setCocktail] = React.useState<any>([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        // @ts-ignore
        getCocktailsById(id).then((response) => {
            setCocktail(response[0]);
        });
        if (cocktail) setIsLoaded(true);
    }, []);




    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        const measure = cocktail[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${ingredient} - ${measure}`);
        }
    }

    const ingredientsList = ingredients.map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
    ));

    return (
        // @ts-ignore
        <Layout>
            <div className="Cocktail">
                {isLoaded ? (
                    <>
                        <div className="Cocktail-image">
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        </div>
                        <div className="cocktail-content">
                            <h1>{cocktail.strDrink}</h1>
                            <p>{cocktail.strInstructions}</p>
                            {ingredientsList}
                            <p>{cocktail.strAlcoholic}</p>
                            <p>{cocktail.strGlass}</p>
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
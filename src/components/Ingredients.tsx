import Layout from "./Layout";
import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import CocktailCard from "./CocktailCard";
import {getIngredients} from "../api/GetCocktails";

type Ingredient = {
    strIngredient1: string;

}

const Ingredients : React.FC = () => {

    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState<Error | null>(null);

    if (error) throw error;

    useEffect(() => {
        getIngredients().then((ingredients) => setIngredients(ingredients)).catch((error) => setError(error));
    }, []);

    useEffect(() => {
        if (ingredients) {
            setIsLoaded(true);
        }
    }, [ingredients]);


// Mapping through the list of ingredients to create links for each ingredient
    const ingredientsList = ingredients.map((ingredient) => (
        <Link to={`/cocktails/ingredient/${ingredient.strIngredient1}`}>
            {/* Displaying the ingredient name */}
            <h2 key={ingredient.strIngredient1}> {ingredient.strIngredient1}</h2>
        </Link>
    ));


    return (
        //@ts-ignore
        <Layout>
        <div className={"Ingredients"}>
            <div className="IngredientList">
                {isLoaded !? ingredientsList : <span className={"loader"} ></span> }
            </div>
        </div>
        </Layout>
    )
}


export default Ingredients;
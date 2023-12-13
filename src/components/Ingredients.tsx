import Layout from "./Layout";
import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

type Ingredient = {
    strIngredient1: string;

}

const Ingredients : React.FC = () => {

    const navigate = useNavigate();
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    useEffect(() => {
        getIngredients();
    }, []);

    useEffect(() => {
        if (ingredients) {
            setIsLoaded(true);
        }
    }, [ingredients]);

    const getIngredients = async () => {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
        const data = await response.json();
        await setIngredients(data.drinks)
    }

    const ingredientsList = ingredients.map((ingredient) => (
        <Link to={`/cocktails/ingredient/${ingredient.strIngredient1}`}> <h2 key={ingredient.strIngredient1}> {ingredient.strIngredient1}</h2> </Link>
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
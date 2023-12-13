import "./CocktailCard.css";
import { Cocktail } from "../App";
import {FC, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";

interface CocktailCardProps {
    cocktail: Cocktail;
}



const CocktailCard: FC<CocktailCardProps> = ({ cocktail }) => {
    const navigate = useNavigate();

    const [isLoaded, setIsLoaded] = useState(false);



    useEffect(() => {
        if (cocktail) {
            setTimeout(() => {
                setIsLoaded(true);
            }, 1000);
        }
    }, [cocktail]);

    return (

        <Link to={`/cocktail/${cocktail.idDrink}`} className = {isLoaded !? "CocktailCard" : "CocktailCardLoading"}>
            <div className={ isLoaded !? "Card" : ""}>
                <div className="image">
                    {isLoaded !? <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/> : <div className="image__placeholder"></div>}
                </div>
                <div className="content">
                    {isLoaded !? <h3>{cocktail.strDrink}</h3> : <div className="content__placeholder"></div>}
                    {isLoaded !? <h3>{cocktail.strCategory}</h3> : <div className="content__placeholder"></div>}
                </div>
            </div>

        </Link>
    );
};

export default CocktailCard;


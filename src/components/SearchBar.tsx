import React, {useEffect} from "react";
import {getCocktailByName, getIngredientByName} from "../api/GetCocktails";
import {useNavigate} from "react-router-dom";

interface SearchBarProps {
    searchResults: [];
    setSearchResults: (searchResults: []) => void;
}


const SearchBar: React.FC = () => {

    const [cocktailSearchResult, setCocktailSearchResult] = React.useState<[]>([]);
    const [ingredientsSearchResult, setIngredientsSearchResult] = React.useState<[]>([]);
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        if(searchTerm.length === 0) {
            setCocktailSearchResult([]);
        }
    }, [searchTerm]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);

        if (searchTerm.length >= 1) {
            Promise.all([
                getCocktailByName(searchTerm),
                getIngredientByName(searchTerm)
            ]).then(([cocktailResponse, ingredientResponse]) => {
                setCocktailSearchResult(cocktailResponse);
                setIngredientsSearchResult(ingredientResponse);
            });
        }
    };


    const handleResultClick = (clickedResult : string) => {
        navigate(`/cocktail/${clickedResult}`)
    };

    const CocktailResultlist = cocktailSearchResult?.map((result: any) => {
        return (
            <li key={result.idDrink} onClick={() => handleResultClick(result.idDrink)}>
                {result.strDrink}
            </li>
        )
    });

    const IngredientsResultlist = ingredientsSearchResult?.map((result: any) => {
        return (
            <li key={result.idIngredient} onClick={() => handleResultClick(result.idIngredient)}>
                {result.strIngredient}
            </li>
        )
    });



    return (
        <div className={"Searchbar"}>
            <input
                type="text"
                name={"search"}
                onChange={handleSearchChange}
                placeholder={"search cocktails"}
                value={searchTerm}
            />
            {searchTerm && (CocktailResultlist || IngredientsResultlist) && (
                <ul>
                    {CocktailResultlist && (
                        <>
                            <li className={"ul-name"}>Cocktails</li>
                            {CocktailResultlist}
                        </>
                    )}
                    {IngredientsResultlist && (
                        <>
                            <li className={"ul-name"}>Ingredients</li>
                            {IngredientsResultlist}
                        </>
                    )}
                </ul>
            )}
          {/*  {searchTerm && (CocktailResultlist || IngredientsResultlist) &&
                <ul>
                        <>
                            <li className={"ul-name"}>Cocktails</li>
                            {CocktailResultlist}
                        </>
                        <>
                            <li className={"ul-name"}>Ingredients</li>
                            {IngredientsResultlist}
                        </>
                </ul>
            }*/}
            {searchTerm && !CocktailResultlist && !IngredientsResultlist && (
                <ul>"No results"</ul>
            )}
        </div>
    );



}

export default SearchBar;

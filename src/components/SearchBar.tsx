import React, {useEffect} from "react";
import {getCocktailByName, getIngredientByName} from "../api/GetCocktails";
import {Link, useNavigate} from "react-router-dom";

interface SearchBarProps {
    searchResults: [];
    setSearchResults: (searchResults: []) => void;
}


const SearchBar: React.FC = () => {

    const [cocktailSearchResult, setCocktailSearchResult] = React.useState<[]>([]);
    const [searchTerm, setSearchTerm] = React.useState<string>("");
    const [error, setError] = React.useState<Error | null>(null);
    const navigate = useNavigate();

    if (error) throw error;

    useEffect(() => {
        if(searchTerm.length === 0) {
            setCocktailSearchResult([]);
        }
    }, [searchTerm]);

// Handling changes in the search input
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        // Fetching cocktails by name if the search term is at least one character long
        if (searchTerm.length >= 1) {
            getCocktailByName(searchTerm)
                .then((data) => setCocktailSearchResult(data))
                .catch((error) => setError(error));
        }
    };

// Mapping through the cocktail search results to generate corresponding JSX elements
    const CocktailResultlist = cocktailSearchResult?.map((result: any) => {
        return (
            <Link to={`/cocktail/${result.idDrink}`}>
                {/* Displaying the name of the cocktail */}
                <li key={result.idDrink}>
                    {result.strDrink}
                </li>
            </Link>
        );
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
            <Link to={`/search/${searchTerm}`} className={"Search-btn"} onClick={() => setSearchTerm(searchTerm)}>OK</Link>
            {searchTerm && (CocktailResultlist) && (
                <ul>
                    {CocktailResultlist && (
                        <>
                            {CocktailResultlist}
                        </>
                    )}
                </ul>
            )}
            {searchTerm && !CocktailResultlist && (
                <ul>"No results"</ul>
            )}
        </div>
    );



}

export default SearchBar;

import {FC, useEffect, useState} from "react";
import {getCocktailByName} from "../api/GetCocktails";
import {Link, useParams} from "react-router-dom";
import Layout from "./Layout";

interface SearchProps {
    searchTerm?: string;
    setSearchTerm?: (searchTerm: string) => void;
}

const Search : FC<SearchProps> = () => {

    const { searchTerm } = useParams()
    const [searchResults, setSearchResults] = useState<[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    if (error) throw error;

    useEffect(() => {
        if (searchTerm) {
            getCocktailByName(searchTerm).then((data) => setSearchResults(data)).catch((error) => setError(error));
        }
    }, []);

    useEffect(() => {
        setIsLoaded(false);
    }, [searchResults]);


    return (
        <Layout>
            <div className="Search">
                <h1>Search Results for {searchTerm}</h1>
                <ul className="Search-results">
                    {isLoaded !? (
                        <span className="loader"></span>
                    ) : searchResults ? (
                        searchResults.map((result: any) => (
                            <li key={result.idDrink}>
                                <Link to={`/cocktail/${result.idDrink}`}>
                                    {result.strDrink}
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </ul>
            </div>
        </Layout>
    );
};



export default Search;
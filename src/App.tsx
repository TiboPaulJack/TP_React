import './App.css'
import "./responsive.css";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Home from "./components/Home";
import Cocktails from "./components/Cocktails";
import Cocktail from './components/Cocktail';
import Ingredients from "./components/Ingredients";
import Glasses from './components/Glasses';
import {multiColorsOnHover} from "./utils/colors";
import {getAllCocktails, getCategories} from "./api/GetCocktails";
import Categories from './components/Categories';
import {isElement} from "react-dom/test-utils";
import Error404 from "./components/Error404";
import Search from "./components/Search";
import ErrorBoundary from "./components/ErrorBoundary";


export interface Cocktail {
    strDrinkThumb: string;
    strDrink: string;
    strInstructions: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strAlcoholic: string;
    strGlass: string;
    strCategory: string;
    dateModified: string;
    idDrink: string;
};

export interface Categories {
    strCategory: string;
};


const App: React.FC = () => {

    const [cocktails, setCocktails] = useState<Cocktail[]>([]);
    const [categories, setCategories] = useState<Categories[]>([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllCocktails().then((data) => setCocktails(data)).catch((error) => setError(error));
        getCategories().then((data) => setCategories(data)).catch((error) => setError(error));
    }, []);

    useEffect(() => {
        multiColorsOnHover();
    }, []);


    return (
        <div className="App">
            <BrowserRouter>
                <ErrorBoundary>
                <Routes>
                        <Route path="/" element={<Home cocktails={cocktails} categories={categories} />} />
                        <Route path="/categories" element={<Categories categories={categories} />} />
                        <Route path="/ingredients" element={<Ingredients />} />
                        <Route path={"/search/:searchTerm"} element={<Search />} />
                        <Route path="/glasses" element={<Glasses />} />
                        <Route path="/cocktails" element={<Cocktails cocktails={cocktails} />} />
                        <Route path="/cocktails/:dynamicParam/:value" element={<Cocktails cocktails={cocktails} />} />
                        <Route path="/cocktail/:id" element={<Cocktail />} />
                        <Route path={"*"} element={<Error404 />} />
                </Routes>
                </ErrorBoundary>
            </BrowserRouter>
        </div>
    );

};


export default App;
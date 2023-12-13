import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Layout from "./Layout";
import {getCategories} from "../api/GetCocktails";

interface CategoriesProps {
    categories: { strCategory: string }[];
}
// @ts-ignore
const Categories: React.FC<CategoriesProps> = ({ categories }) => {

    const [isLoaded, setIsLoaded] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (categories) {
            setIsLoaded(true)
        }
    }, [categories]);

    const handleCategoryClick = (clickedCategory: string) => {
        navigate(`/cocktails/category/${clickedCategory}`);
    }

    // @ts-ignore
    const categorieList = categories.map((categorie) => (
        <div key={categorie.strCategory}>
            <Link to={`/cocktails/category/${categorie.strCategory}`}>
                <h2>{categorie.strCategory}</h2>
            </Link>
        </div>
    ));

    return (
        // @ts-ignore
        <Layout>
        <div className={"Categories"}>
            <div className="CategoryList">
                {isLoaded !? categorieList : <span className={"loader"} ></span> }
            </div>

        </div>
        </Layout>
    )
}

export default Categories;
import Layout from "./Layout";
import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getGlasses} from "../api/GetCocktails";

interface Glasses {
    strGlass: string;
}

const Glasses: React.FC = () => {

    const [glasses, setGlasses] = React.useState<Glasses[]>([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [error, setError] = React.useState(null);

    if (error) throw error;


    useEffect(() => {
        getGlasses().then((data) => setGlasses(data)).catch((error) => setError(error));
    }, []);

    useEffect(() => {
        if (glasses) {
            setIsLoaded(true);
        }
    }, [glasses]);



    // Mapping through the list of glasses to create links for each glass
    const glassesList = glasses.map((glass) => (
        <Link to={`/cocktails/glass/${glass.strGlass}`}>
            {/* Displaying the glass name */}
            <h2 key={glass.strGlass}>{glass.strGlass}</h2>
        </Link>
    ));


    return (
        //@ts-ignore
        <Layout>
        <div className={"Glasses"}>
            <div className="GlassList">
                {isLoaded !? glassesList : <span className={"loader"} ></span> }
            </div>
        </div>
        </Layout>
    )
}




export default Glasses;
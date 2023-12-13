import Layout from "./Layout";
import React, {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

interface Glasses {
    strGlass: string;
}

const Glasses: React.FC = () => {

    const [glasses, setGlasses] = React.useState<Glasses[]>([]);
    const [isLoaded, setIsLoaded] = React.useState(false);

    const navigate = useNavigate();
    const getGlasses = async () => {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
        const data = await response.json();
        await setGlasses(data.drinks)
    }

    useEffect(() => {
        getGlasses();
    }, []);

    useEffect(() => {
        if (glasses) {
            setIsLoaded(true);
        }
    }, [glasses]);



    const glassesList = glasses.map((glass) => (
            <Link to={`/cocktails/glass/${glass.strGlass}`}><h2 key={glass.strGlass}>{glass.strGlass}</h2></Link>
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
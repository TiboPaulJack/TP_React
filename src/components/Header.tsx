import {Link} from "react-router-dom";
import SearchBar from "./SearchBar";


export default function Header () {


  return (
    <div className="Header">
        <Link className={"Title"} to={"/"}> <h1>Cocktailz</h1></Link>
        <nav>
            <ul>
                <Link to={"/cocktails"}>See All</Link>
                <Link to={"/categories"}>Categories</Link>
                <Link to={"/glasses"}>Glasses</Link>
                <Link to={"/ingredients"}>Ingredients</Link>
            </ul>
        </nav>
        <SearchBar />

    </div>
  )
}



export async function getIngredientByName(name: string) {

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`);
        const data = await response.json();

        console.log(data.drinks)
        return data.drinks;
    }
    catch (error : any) {
       throw Error(error.message)
    }
}

export async function getCocktailByName(name: string) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const data = await response.json();
        return data.drinks;
    }
    catch (error : any) {
        throw Error(error.message)
    }
}

export async function getCocktailsByGlass(glass: string) {

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`);
        const data = await response.json();
        return data.drinks;
    }
    catch (error : any) {
        throw Error(error.message)

    }

}


export async function getAllCocktails () {
    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
        const data = await response.json();
        return data.drinks;
    }
    catch (error : any) {
        throw Error(error.message)
    }
}

export async function getCocktailsByIngredient(ingredient: string) {

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.drinks;
    }
    catch (error : any) {
        throw Error(error.message)
    }

}

export async function getCocktailsByCategory(category: string) {

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();
        return data.drinks;
    }
    catch (error : any) {
        throw Error(error.message)
    }
}

export async function getCocktailsById(id: string | undefined) {

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        return data.drinks;
    }
    catch (error: any) {
        throw Error(error.message)
    }
}

export async function getCategories () {

    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
        const data = await response.json();
        return data.drinks;
    }
    catch (error : any) {
        throw Error(error.message)
    }
}

export async function getGlasses () {

    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list");
        const data = await response.json();
        return data.drinks;
    }
    catch (error : any) {
        throw Error(error.message)
    }
}

export async function getIngredients () {

    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list");
        const data = await response.json();
        return data.drinks;
    }
    catch (error : any) {
        throw Error(error.message)
    }
}
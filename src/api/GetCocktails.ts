

export async function getIngredientByName(name: string) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`);

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();
        return data.drinks;
    } catch (error) {
        //@ts-ignore
        console.error("Error fetching ingredients:", error.message);
        throw error;
    }
}


export async function getCocktailByName(name: string) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        const data = await response.json();
        return data.drinks;
    }
    catch (error) {
        console.error("Error fetching cocktails:", error);

    }
}

export async function getCocktailsByGlass(glass: string) {

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass}`);
        const data = await response.json();
        return data.drinks;
    }
    catch (error) {
        console.error("Error fetching cocktails:", error);
    }

}


export async function getAllCocktails () {
    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
        const data = await response.json();
        return data.drinks;
    }
    catch (error) {
        console.error("Error fetching cocktails:", error);
    }
}

export async function getCocktailsByIngredient(ingredient: string) {

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.drinks;
    }
    catch (error) {
        console.error("Error fetching cocktails:", error);
    }

}

export async function getCocktailsByCategory(category: string) {

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await response.json();
        return data.drinks;
    }
    catch (error) {
        console.error("Error fetching cocktails:", error);
    }
}

export async function getCocktailsById (id: string) {

    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        return data.drinks;
    }
    catch (error) {
        console.error("Error fetching cocktails:", error);
    }
}

export async function getCategories () {

    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");
        const data = await response.json();
        return data.drinks;
    }
    catch (error) {
        console.error("Error fetching cocktails:", error);
    }


}
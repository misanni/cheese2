const URL='http://localhost:5000';


export const cheeseLoader = async () => {
    const response = await fetch(URL + "/cheese");
    const cheese = await response.json();
    return cheese;
}

export const eachcheeseLoader = async ({params}) => {
    const response = await fetch(URL + "/cheese/" + params.id);
    const eachcheese = await response.json();
    return eachcheese;
}
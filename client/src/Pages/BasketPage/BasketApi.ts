export const getBasket = async ()=>{
    const response = await fetch("https://localhost:5001/api/basket", {
        credentials: "include"
    });
    console.log(response);
    const data = await response.json();
    return data;
}

export const addItemToBasket = async (productId: string | number, quantity: number)=>{
    const response = await fetch(`https://localhost:5001/api/basket?productId=${productId}&quantity=${quantity}`,{
        method: "POST",
        credentials: "include"
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export const removeItemFromBasket = async (productId: string | number, quantity: number)=>{
    const response = await fetch(`https://localhost:5001/api/basket?productId=${productId}&quantity=${quantity}`,{
        credentials: "include"
    });
    const data = await response.json();
    return data;
}

export const emptyBasket = async ()=>{
    const response = await fetch(`https://localhost:5001/api/basket/emptybasket`,{
        method: "DELETE",
        credentials: "include"
    });
    console.log(response);
    const data = await response.text();
    console.log(data);
    return data;
}
const BASE_URL="http://localhost:5000/";
export const fetcher = async (url) => {
    let responseObj = {errorMessage:'',data:[]}
    try{
    const response = await fetch(BASE_URL + url);
    if(!response.ok){
        throw new Error(`HTTP Error ${response.status}`)
    }
    const responseDate = await response.json();
    responseObj.errorMessage='';
    responseObj.data=responseDate;
    return responseObj;
    }
    catch(err){
        responseObj.errorMessage = err.message;
        return responseObj;
    }
   
    
}

export const getCategories = () =>
{
    return fetcher('categories');
}

export const getProducts = (id) =>
{
    return fetcher('products?catId='+id);
}
export const getProductById = (id) => {
    return fetcher('products/'+id);
}
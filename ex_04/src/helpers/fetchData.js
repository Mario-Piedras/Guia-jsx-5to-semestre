export const fetchdata = async (endPoint) => {
    try{
        const resp = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
        const data = await resp.json();
        console.log(data);
        return {data, isLoading: false};
    }catch(error){
        console.error(error);
        return { data: [], isLoading: false }; //Devuelve siempre un objeto
    }
}
export async function fetchCars(){
    const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars";
 
    const Headers = {
      "X-RapidAPI-Key": "2380a6b96bmshe73b6501b57c207p15d141jsnd3edf7c68147",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
 
    const response = await fetch(`${url}?model='Corolla'`,{headers:Headers});
 
    const result = await response.json();
 
    return result;
}
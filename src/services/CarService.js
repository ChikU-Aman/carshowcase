export function fetchCars(){
    const header ={
        "X-RapidAPI-Key":"cb28dbbbcbmsh743529ecf61f440p1e2690jsn1bcfa6df407b",
        "X-RapidAPI-Host":"cars-by-api-ninjas.p.rapidapi.com"
    }
    const response =  fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
                            {
                                headers : header 
                            }
    );

    const result = response.json();

    return result;
}
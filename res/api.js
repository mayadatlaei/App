export const basUrl= "https://shien-server.onrender.com"
export const logIn = async (phone) => {
    const url = "/logIn";

    return await fetchApi(url , "POST" , {phone});

};

export const fetchApi = async (route, method, body) => {
    const url = baseUrl + route;
    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: body,

    }).then(res => res.json())
    .catch((error) => {
        console.error("fetch Error", error?.message);
    });
}


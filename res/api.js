export const basUrl = "https://shien-server.onrender.com"

// export const logIn = async (body) => {
//     console.log(body);

//     const url = "/logIn";
//     return await fetchApi(url, "POST", JSON.stringify(body));
// };

export const logIn = async (body) => {
    const route = "/logIn"
    return fetchApi(route, "POST", JSON.stringify(body))
}

export const findprodact = async (body) => {
    console.log(body);
    const url = "/findprodact";
    return await fetchApi(url, "POST", JSON.stringify(body));

};

export const creatUsers = async (body) => {
    console.log(body);

    const url = "/createUser";
    return await fetchApi(url, "POST", JSON.stringify(body));

};


export const fetchApi = async (route, method, body) => {
    const url = basUrl + route;
    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body !== "GET" ? body : null,

    }).then(res => res.json())
        .catch((error) => {
            console.error("fetch Error", error?.message);
        });
}


import ApiRest from './rest';

export default function RequestApi(route, method = 'GET', data = null) {
    let json = null;
    if (data) {
        json = JSON.stringify(data);
    }
    return new Promise((resolve) => {
        fetch(ApiRest(route), {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        }).then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson)
        });
    });
};
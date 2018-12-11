'use strict';

export function authenticate(username, password) {
    return fetch('http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token', {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: 'r3dblr@gmail.com',
            password: 'Look4path'
        }),
    })
    .then(response => response.json())
    .then((response) => {
        if (response.message) {
            return Promise.reject(response.message);
        }
        return response;
    });
}
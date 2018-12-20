'use strict';

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget venenatis velit. In pretium lorem odio, sed auctor sem porta sed. Curabitur maximus vestibulum augue, ut rutrum nunc porttitor a. Integer porta eros a rutrum rutrum. Duis et libero ante. Maecenas auctor feugiat nibh non commodo. Curabitur eu elit bibendum, vehicula erat et, rutrum enim. Donec pellentesque aliquet diam vel sodales. Nunc sit amet diam sit amet orci consectetur pretium at eget turpis. Pellentesque ullamcorper maximus lorem eget aliquet.";

const icons = [
    require('../assets/img/map.png'),
    require('../assets/img/smiling-face.png'),
    require('../assets/img/star.png'),
    require('../assets/img/camera.png'),
    require('../assets/img/gift.png'),
    require('../assets/img/medic-sign.png'),
    require('../assets/img/cart.png'),
    require('../assets/img/rugby.png'),
];

export function getItems() {
    return icons.map((icon, idx) => ({ key:`${idx}`, icon, name: `Product #${idx + 1}`, description }));
}

export function fetchItems(options) {
    const { pageSize } = options;

    return fetch(`http://ecsc00a02fb3.epam.com/rest/V1/products?searchCriteria[pageSize]=${pageSize}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then((response) => {
        if (response.message) {
            return Promise.reject(response.message);
        }

        if (!response.items) {
            return [];
        }

        return response.items.map((item) => {
            const iconIdx = Math.floor(Math.random() * icons.length);
            return Object.assign({ icon: icons[iconIdx], description }, item);
        });
    });
}

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

function getIcon() {
    const iconIdx = Math.floor(Math.random() * icons.length);
    return icons[iconIdx];
}

export function fetchItemsMock(options) {
    const { pageIdx, pageSize } = options;
    const totalCount = 36;
    const items = (new Array(totalCount)).fill(null).map((item, idx) => {
        return {
            id: idx,
            icon: getIcon(),
            name: `Product #${idx + 1}`,
            description
        };
    });

    return new Promise((resolve, reject) => {
        const startIdx = pageIdx * pageSize;
        const page = items.slice(startIdx, startIdx + pageSize);
        resolve({ items: page, totalCount });
    });
}

export function fetchItems(options) {
    const { pageIdx, pageSize } = options;

    return fetch(`http://ecsc00a02fb3.epam.com/rest/V1/products?searchCriteria[pageSize]=${pageSize}&searchCriteria[currentPage]=${pageIdx + 1}`, {
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

        return {
            items: response.items.map(item => Object.assign({ icon: getIcon(), description }, item)),
            totalCount: response.total_count,
        };
    });
}

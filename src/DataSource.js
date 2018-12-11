'use strict';

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget venenatis velit. In pretium lorem odio, sed auctor sem porta sed. Curabitur maximus vestibulum augue, ut rutrum nunc porttitor a. Integer porta eros a rutrum rutrum. Duis et libero ante. Maecenas auctor feugiat nibh non commodo. Curabitur eu elit bibendum, vehicula erat et, rutrum enim. Donec pellentesque aliquet diam vel sodales. Nunc sit amet diam sit amet orci consectetur pretium at eget turpis. Pellentesque ullamcorper maximus lorem eget aliquet.";

const icons = [
    require('./assets/img/map.png'),
    require('./assets/img/smiling-face.png'),
    require('./assets/img/star.png'),
    require('./assets/img/camera.png'),
    require('./assets/img/gift.png'),
    require('./assets/img/medic-sign.png'),
    require('./assets/img/cart.png'),
    require('./assets/img/rugby.png'),
];

export function getItems() {
    return icons.map((icon, idx) => ({ icon, name: `Product #${idx + 1}`, description }));
}

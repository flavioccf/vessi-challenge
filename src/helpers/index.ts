import imgLinenAlt from '../assets/img/products/w-linen-alt.jpg';
import imgLinen from '../assets/img/products/w-linen.jpg';
import imgOnyxAlt from '../assets/img/products/w-onyx-alt.jpg';
import imgOnyx from '../assets/img/products/w-onyx.jpg';
import imgPolarAlt from '../assets/img/products/w-polar-alt.jpg';
import imgPolar from '../assets/img/products/w-polar.jpg';
import imgPurpleAlt from '../assets/img/products/w-purple-alt.jpg';
import imgPurple from '../assets/img/products/w-purple.jpg';
import imgSkyAlt from '../assets/img/products/w-sky-alt.jpg';
import imgSky from '../assets/img/products/w-sky.jpg';

export const formatToCad = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CAD',
    }).format(price);
};

export const imgAssets = (): Record<string, string> => {
    return {
        imgLinen,
        imgLinenAlt,
        imgOnyx,
        imgOnyxAlt,
        imgPolar,
        imgPolarAlt,
        imgPurple,
        imgPurpleAlt,
        imgSky,
        imgSkyAlt,
    };
};

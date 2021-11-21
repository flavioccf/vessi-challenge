export const formatToCad = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CAD',
    }).format(price);
};

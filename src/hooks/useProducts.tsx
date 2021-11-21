import React, {createContext, ReactNode, useContext, useState} from 'react';

export interface ProductInterface {
    id: number;
    title: string;
    style: string;
    colour: string;
    img: string;
    altImg: string;
    price: number;
    tag?: string;
    sizes: number[];
    quickAdd: boolean;
}

interface ProductsContextInterface {
    products: ProductInterface[];
    setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
    addQuickAdd: (id: number) => void;
}

interface ProductsProviderInterface {
    children: ReactNode;
}

const ProductContext = createContext<ProductsContextInterface>(
    {} as ProductsContextInterface,
);

export const ProductsProvider = ({children}: ProductsProviderInterface) => {
    const productsDefault: ProductInterface[] = [
        {
            id: 1,
            title: "women's everyday move",
            style: 'everyday',
            colour: 'sky blue',
            img: 'w-sky.jpg',
            altImg: 'w-sky-alt.jpg',
            price: 155,
            tag: 'new',
            sizes: [5, 6, 7, 8, 9, 10, 11],
            quickAdd: false,
        },
        {
            id: 2,
            title: "women's everyday move",
            style: 'everyday',
            colour: 'lavender purple',
            img: 'w-purple.jpg',
            altImg: 'w-purple-alt.jpg',
            price: 155,
            tag: 'new',
            sizes: [5, 6, 7, 8, 9, 10, 11],
            quickAdd: false,
        },
        {
            id: 3,
            title: "women's everyday move",
            style: 'everyday',
            colour: 'onyx black',
            img: 'w-onyx.jpg',
            altImg: 'w-onyx-alt.jpg',
            price: 155,
            tag: 'best seller',
            sizes: [5, 6, 7, 8, 9, 10, 11],
            quickAdd: false,
        },
        {
            id: 4,
            title: "women's everyday move",
            style: 'everyday',
            colour: 'linen beige',
            img: 'w-linen.jpg',
            altImg: 'w-linen-alt.jpg',
            price: 155,
            tag: 'new',
            sizes: [5, 6, 7, 8, 9, 10, 11],
            quickAdd: false,
        },
        {
            id: 5,
            title: "women's everyday move",
            style: 'everyday',
            colour: 'polar white',
            img: 'w-polar.jpg',
            altImg: 'w-polar-alt.jpg',
            price: 155,
            tag: 'new',
            sizes: [5, 6, 7, 8, 9, 10, 11],
            quickAdd: false,
        },
    ];
    const [products, setProducts] =
        useState<ProductInterface[]>(productsDefault);

    const addQuickAdd = (id: number) => {
        const quick = [...products].map((product) => {
            if (product.id === id) {
                product.quickAdd = true;
            } else {
                product.quickAdd = false;
            }
            return product;
        });
        setProducts(quick);
    };
    return (
        <ProductContext.Provider value={{products, setProducts, addQuickAdd}}>
            {children}
        </ProductContext.Provider>
    );
};

export function useProducts() {
    const context = useContext(ProductContext);
    return context;
}

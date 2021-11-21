import React from 'react';

import imgCategory from '../../assets/img/cat_everyday.jpg';
import imgAltCategory from '../../assets/img/cat_everyday_2.jpg';
import {ProductCard} from '../../components/ProductCard';
import {useProducts} from '../../hooks/useProducts';
import {CategoryCard} from '../CategoryCard';
import {ProductGridContainer} from './style';

export function ProductGrid() {
    const {products} = useProducts();

    return (
        <>
            <ProductGridContainer>
                <CategoryCard img={imgCategory} altImg={imgAltCategory}>
                    <ul className="details">
                        <li>
                            <strong>EVERYDAY MOVE</strong>
                        </li>
                        <li>Designed for the more active.</li>
                        <li>
                            <a href="">SHOP ALL</a>
                        </li>
                    </ul>
                </CategoryCard>
                {products.map((product) => {
                    return (
                        <ProductCard
                            product={product}
                            key={product.colour + product.style}
                        />
                    );
                })}
            </ProductGridContainer>
        </>
    );
}

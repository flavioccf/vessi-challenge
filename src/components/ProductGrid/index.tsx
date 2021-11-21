import React, {useState} from 'react';

import imgCategory from '../../assets/img/cat_everyday.jpg';
import imgAltCategory from '../../assets/img/cat_everyday_2.jpg';
import {ProductCard} from '../../components/ProductCard';
import {ProductInterface, useProducts} from '../../hooks/useProducts';
import {CategoryCard} from '../CategoryCard';
import {ProductFilter} from './ProductFilter';
import {ProductGridContainer} from './style';

export function ProductGrid() {
    const {products} = useProducts();
    const [productGrid, setProductGrid] =
        useState<ProductInterface[]>(products);
    return (
        <>
            <ProductFilter
                productGrid={productGrid}
                setProductGrid={setProductGrid}
            />
            <ProductGridContainer>
                <CategoryCard img={imgCategory} altImg={imgAltCategory}>
                    <ul className="details">
                        <li>
                            <strong>EVERYDAY MOVE</strong>
                        </li>
                        <li>Designed for the more active.</li>
                        <li>
                            <a href={process.env.PUBLIC_URL}>SHOP ALL</a>
                        </li>
                    </ul>
                </CategoryCard>
                {productGrid.map((product) => {
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

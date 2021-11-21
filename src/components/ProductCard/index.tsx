import React, {useEffect, useState} from 'react';

import {formatToCad} from '../../helpers';
import {ProductInterface, useProducts} from '../../hooks/useProducts';
import {QuickAdd} from './QuickAdd';
import {SizePicker} from './SizePicker';
import {ProductCardContainer} from './style';

interface ProductCardInterface {
    product: ProductInterface;
}

export function ProductCard({product}: ProductCardInterface) {
    const [isHovered, setIsHovered] = useState(false);
    const {addQuickAdd} = useProducts();
    const handleHover = (isHover: boolean): void => {
        setIsHovered(isHover);
    };
    const handleQuickAdd = (product: ProductInterface): void => {
        addQuickAdd(product.id);
    };
    const [windowSize, setWindowSize] = useState<number>(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    });
    return (
        <>
            <ProductCardContainer
                isHovered={isHovered}
                img={`${process.env.PUBLIC_URL}/img/products/${product.img}`}
                altImg={`${process.env.PUBLIC_URL}/img/products/${product.altImg}`}>
                <div className="tag">{product.tag?.toUpperCase()}</div>
                <div
                    className="imgContainer"
                    onMouseEnter={() => handleHover(true)}
                    onMouseLeave={() => handleHover(false)}></div>
                <div
                    className="quickAdd"
                    onClick={() =>
                        product.quickAdd ? null : handleQuickAdd(product)
                    }>
                    {product.quickAdd && windowSize > 480 ? (
                        <SizePicker sizes={product.sizes} />
                    ) : (
                        'QUICK ADD'
                    )}
                </div>
                <ul className="details">
                    <li>{product.title.toUpperCase()}</li>
                    <li>{product.colour.toUpperCase()}</li>
                    <li>{formatToCad(product.price)}</li>
                </ul>
            </ProductCardContainer>
            {product.quickAdd && windowSize <= 480 && (
                <QuickAdd product={product} />
            )}
        </>
    );
}

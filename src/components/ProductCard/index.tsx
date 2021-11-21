import {ProductInterface} from '../../hooks/useProducts';
import React, {useState} from 'react';
import {ProductCardContainer} from './style';
import {formatToCad} from '../../helpers';
import {useProducts} from '../../hooks/useProducts';
import {SizePicker} from './SizePicker';
import {QuickAdd} from './QuickAdd';
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
                    {product.quickAdd && window.screen.width > 480 ? (
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
            {product.quickAdd && window.screen.width <= 480 && (
                <QuickAdd product={product} />
            )}
        </>
    );
}

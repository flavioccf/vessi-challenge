import React, {useState} from 'react';
import {formatToCad} from '../../../helpers';
import {ProductInterface, useProducts} from '../../../hooks/useProducts';
import {QuickAddContainer} from './style';

export function QuickAdd({product}: {product: ProductInterface}) {
    const [selectedSize, setSelectedSize] = useState<number>();
    const {addQuickAdd} = useProducts();
    return (
        <>
            <QuickAddContainer>
                <div className="productDetails">
                    <button id="closeQuickAdd" onClick={() => addQuickAdd(-1)}>
                        X
                    </button>
                    <h4>QUICK ADD</h4>
                    <div className="metaData">
                        <img
                            src={`${process.env.PUBLIC_URL}/img/products/${product.altImg}`}
                            alt={product.title}
                        />
                        <div>
                            <h5>{product.title.toUpperCase()}</h5>
                            <p>
                                <strong>{formatToCad(product.price)}</strong>
                            </p>
                            <p>COLOUR: {product.colour.toUpperCase()}</p>
                            <p>SIZE: {selectedSize}</p>
                            <ul className="sizePicker">
                                {product.sizes.map((size) => {
                                    return (
                                        <li
                                            onClick={() =>
                                                setSelectedSize(size)
                                            }
                                            className={
                                                size === selectedSize
                                                    ? 'selected'
                                                    : ''
                                            }
                                            key={size.toString()}>
                                            {size}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <button className="addToCart">
                        ADD TO CART | {formatToCad(product.price)}
                    </button>
                </div>
            </QuickAddContainer>
        </>
    );
}

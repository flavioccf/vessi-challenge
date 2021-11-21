import React, {ReactNode, useState} from 'react';
import {ProductCardContainer} from '../ProductCard/style';

interface CategoryCardInterface {
    img: string;
    altImg: string;
    children: ReactNode;
}

export function CategoryCard({img, altImg, children}: CategoryCardInterface) {
    const [isHovered, setIsHovered] = useState(false);
    const handleHover = (isHover: boolean): void => {
        setIsHovered(isHover);
    };
    return (
        <>
            <ProductCardContainer
                isHovered={isHovered}
                img={img}
                altImg={altImg}>
                <div
                    className="imgContainer categoryCard"
                    onMouseEnter={() => handleHover(true)}
                    onMouseLeave={() => handleHover(false)}></div>
                {children}
            </ProductCardContainer>
        </>
    );
}

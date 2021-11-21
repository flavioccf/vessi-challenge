import React, {useState} from 'react';

import {SizePickerContainer} from './style';

export function SizePicker({sizes}: {sizes: number[]}) {
    const [selectedSize, setSelectedSize] = useState<number>();
    return (
        <>
            <SizePickerContainer>
                <ul>
                    {sizes.map((size) => {
                        return (
                            <li
                                onClick={() => setSelectedSize(size)}
                                className={
                                    size === selectedSize ? 'selected' : ''
                                }
                                key={size.toString()}>
                                {size}
                            </li>
                        );
                    })}
                </ul>
                <a href="">FIT GUIDE</a>
            </SizePickerContainer>
        </>
    );
}

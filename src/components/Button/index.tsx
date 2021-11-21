import React, {ReactNode} from 'react';
import {ButtonContainer} from './styles';

function Button({children}: {children: ReactNode}) {
    return (
        <>
            <ButtonContainer>{children}</ButtonContainer>
        </>
    );
}

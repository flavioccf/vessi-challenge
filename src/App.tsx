import React from 'react';
import {ProductGrid} from './components/ProductGrid';
import {ProductsProvider} from './hooks/useProducts';
import {GlobalStyle} from './styles/global';

const App: React.FC = () => (
    <>
        <div className="container">
            <ProductsProvider>
                <ProductGrid />
            </ProductsProvider>
        </div>
        <GlobalStyle />
    </>
);

export default App;

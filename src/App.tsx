import React from 'react';

import {Banner} from './components/Banner';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {ProductGrid} from './components/ProductGrid';
import {ProductsProvider} from './hooks/useProducts';
import {GlobalStyle} from './styles/global';

const App: React.FC = () => (
    <>
        <Header />
        <div className="container">
            <Banner />
            <Hero />
            <ProductsProvider>
                <ProductGrid />
            </ProductsProvider>
        </div>
        <GlobalStyle />
    </>
);

export default App;

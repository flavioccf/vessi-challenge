import React from 'react';
import {GlobalStyle} from './styles/global';
import {Header} from './components/Header';
import {Banner} from './components/Banner';
import {Hero} from './components/Hero';
import {ProductsProvider} from './hooks/useProducts';
import {ProductGrid} from './components/ProductGrid';
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

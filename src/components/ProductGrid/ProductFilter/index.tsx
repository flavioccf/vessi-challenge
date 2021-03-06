import React, {useEffect, useState} from 'react';
import {ProductInterface, useProducts} from '../../../hooks/useProducts';
import {Button} from '../../Button/styles';
import {
    ColorFilterDisplay,
    Dropdown,
    DropdownSection,
    ProductFilterContainer,
} from './style';
import {FiRefreshCcw} from 'react-icons/fi';

interface ProductFilterInterface {
    productGrid: ProductInterface[];
    setProductGrid: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
}

export function ProductFilter({
    productGrid,
    setProductGrid,
}: ProductFilterInterface) {
    const {products, addQuickAdd} = useProducts();
    const [isFilterDropdownVisible, setIsFilterDropdownVisible] =
        useState<boolean>(false);
    const [colorFilterOpen, setColorFilterOpen] = useState<boolean>(false);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [isFiltered, setIsFiltered] = useState<boolean>(false);

    const handleClearFilter = () => {
        addQuickAdd(-1);
        setSelectedColor('');
        setProductGrid(products);
    };
    const handleFilterProduct = (
        type: keyof ProductInterface,
        value: string,
    ) => {
        const filtered = products.filter((product: ProductInterface) => {
            return product[type] === value;
        });
        addQuickAdd(-1);
        setColorFilterOpen(false);
        setSelectedColor(value);
        setProductGrid(filtered);
    };
    useEffect(() => {
        setIsFiltered(products.length !== productGrid.length);
    }, [productGrid, products]);
    return (
        <>
            <ProductFilterContainer>
                <Dropdown
                    className="filterDrawer"
                    isDropdownOpen={isFilterDropdownVisible}
                    isVisibleByDefault={false}>
                    <Button
                        onClick={() => {
                            setIsFilterDropdownVisible(
                                !isFilterDropdownVisible,
                            );
                            setColorFilterOpen(false);
                        }}>
                        <span>FILTER</span>
                    </Button>
                </Dropdown>
                <DropdownSection
                    isVisibleByDefault={true}
                    isVisibleForMobile={isFilterDropdownVisible}>
                    <Button>
                        <span>SIZE</span> +
                    </Button>
                    <Dropdown
                        isDropdownOpen={colorFilterOpen}
                        isVisibleByDefault={true}>
                        <Button
                            onClick={() => {
                                setColorFilterOpen(!colorFilterOpen);
                                setIsFilterDropdownVisible(false);
                            }}>
                            <span>COLOUR</span>
                        </Button>
                    </Dropdown>
                    <Button>
                        <span>STYLE</span> +
                    </Button>
                    <Button
                        className={isFiltered ? '' : 'hidden'}
                        onClick={() => handleClearFilter()}>
                        <FiRefreshCcw />
                    </Button>
                </DropdownSection>
                <DropdownSection
                    isVisibleByDefault={colorFilterOpen}
                    isVisibleForMobile={colorFilterOpen}>
                    {products.map((product) => {
                        return (
                            <Button
                                onClick={() =>
                                    handleFilterProduct(
                                        'colour',
                                        product.colour,
                                    )
                                }
                                className={`small ${
                                    selectedColor === product.colour
                                        ? 'active'
                                        : ''
                                }`}
                                key={product.id.toString()}>
                                <span>{product.colour.toUpperCase()}</span>
                                <ColorFilterDisplay
                                    color={
                                        product.hexColour
                                    }></ColorFilterDisplay>
                            </Button>
                        );
                    })}
                </DropdownSection>
            </ProductFilterContainer>
        </>
    );
}

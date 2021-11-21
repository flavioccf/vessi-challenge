import styled from 'styled-components';

export const ProductGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 0;
    margin: 0 auto;
    @media only screen and (max-width: 1040px) {
        grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    }
    @media only screen and (max-width: 580px) {
        grid-template-columns: repeat(auto-fill, minmax(205px, 1fr));
    }
`;

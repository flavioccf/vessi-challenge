import styled from 'styled-components';

interface CardProps {
    isHovered: boolean;
    img: string;
    altImg: string;
}

export const ProductCardContainer = styled.div<CardProps>`
    position: relative;
    width: 100%;
    padding: 1rem;
    .imgContainer {
        height: 290px;
        border: 2.8px solid var(--v-dark-blue);
        border-bottom: 0;
        background: ${(props) =>
            props.isHovered ? `url(${props.img})` : `url(${props.altImg})`};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transition: 0.5s;
        @media only screen and (max-width: 1040px) {
            height: 230px;
        }
        @media only screen and (max-width: 580px) {
            height: 145px;
        }
        &.categoryCard {
            border: 0;
            height: 350px;
            background-position: bottom;
            @media only screen and (max-width: 1040px) {
                height: 290px;
            }
            @media only screen and (max-width: 580px) {
                height: 205px;
            }
        }
    }
    .tag {
        position: absolute;
        top: 2.66rem;
        left: 1rem;
        background: var(--v-dark-blue);
        color: var(--v-white);
        padding: 0.53rem 1.06rem;
        font-size: 0.9rem;
    }
    .quickAdd {
        width: 100%;
        height: 3.86rem;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--v-dark-blue);
        color: var(--v-white);
        transition: 0.3s;
        cursor: pointer;
    }
    .details {
        list-style: none;
        margin-top: 0.66rem;
        li {
            font-size: 1.4rem;
            line-height: 1.86rem;
            color: var(--v-dark-blue);
            line-height: 2.2rem;
            &:nth-of-type(2) {
                color: var(--v-light-blue);
            }
            @media only screen and (max-width: 1040px) {
                font-size: 1.2rem;
            }
            @media only screen and (max-width: 580px) {
                font-size: 1rem;
            }
            a {
                color: var(--v-dark-blue);
                font-weight: 700;
                font-size: 1.3rem;
            }
        }
    }
`;

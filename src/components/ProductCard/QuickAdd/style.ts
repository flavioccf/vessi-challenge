import styled from 'styled-components';
import {transparentize} from 'polished';
export const QuickAddContainer = styled.div`
    overscroll-behavior: contain;
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background: ${transparentize(0.2, '#333333')};
    #closeQuickAdd {
        position: absolute;
        top: 2.13rem;
        right: 2.13rem;
        outline: none;
        background: none;
        border: none;
        color: var(--v-dark-blue);
        font-size: 1.2rem;
    }
    .productDetails {
        position: absolute;
        bottom: 0;
        bottom: env(safe-area-inset-bottom);
        width: 100%;
        min-height: 23.4rem;
        background: var(--v-white);
        padding: 2.13rem 2rem;
        h4 {
            color: var(--v-dark-blue);
            font-size: 1.2rem;
            font-weight: 700;
        }
        .metaData {
            margin-top: 1.6rem;
            color: var(--v-dark-blue);
            display: flex;
            justify-content: space-between;
            img {
                width: 9.35rem;
                height: 9.35rem;
                border: 1.7px solid var(--v-dark-blue);
                @media only screen and (max-width: 417px) {
                    width: 30%;
                    height: 30%;
                }
            }
            h5 {
                font-size: 1.26rem;
            }
            .sizePicker {
                list-style: none;
                display: inline;
                li {
                    display: inline-block;
                    text-align: center;
                    border: 1.15px solid var(--v-dark-blue);
                    width: 1.86rem;
                    height: 1.86rem;
                    margin-right: 0.3rem;
                    line-height: 1.8rem;
                    margin-top: 0.2rem;
                    transition: 0.3s;
                    &:hover,
                    &.selected {
                        background: var(--v-dark-blue);
                        color: var(--v-white);
                    }
                }
            }
            > div {
                padding-left: 1rem;
                > * {
                    padding: 0.28rem 0;
                }
            }
        }
        .addToCart {
            position: relative;
            display: block;
            margin-top: 1.4rem;
            width: 100%;
            height: 3.9rem;
            font-size: 1rem;
            background: var(--v-dark-blue);
            color: var(--v-white);
            z-index: 999;
            &:before {
                width: inherit;
                height: inherit;
                content: '';
                display: block;
                position: absolute;
                top: 2px;
                left: 7px;
                border: 2px solid var(--v-dark-blue);
            }
        }
        @media only screen and (max-width: 417px) {
            font-size: 80%;
        }
        animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @keyframes slide-top {
        0% {
            -webkit-transform: translateY(100px);
            transform: translateY(100px);
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }
`;

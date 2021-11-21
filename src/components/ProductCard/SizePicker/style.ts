import styled from 'styled-components';

export const SizePickerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    ul {
        list-style: none;
        display: inline;
        li {
            display: inline;
            border: 1px solid var(--v-white);
            padding: 0.2rem 0.3rem;
            margin-right: 0.3rem;
            transition: 0.3s;
            &:hover,
            &.selected {
                background: var(--v-white);
                color: var(--v-dark-blue);
            }
        }
    }
    a {
        font-style: italic;
        font-size: 0.8rem;
        color: var(--v-white);
    }
    animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
        both;
    @keyframes swing-in-top-fwd {
        0% {
            transform: rotateX(-100deg);
            transform-origin: top;
            opacity: 0;
        }
        100% {
            transform: rotateX(0deg);
            transform-origin: top;
            opacity: 1;
        }
    }
`;

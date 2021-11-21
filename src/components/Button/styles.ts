import styled from 'styled-components';

export const ButtonContainer = styled.button`
    position: relative;
    background: var(--v-white);
    border: 2px solid var(--v-dark-blue);
    color: var(--v-dark-blue);
    outline: 0;
    font-size: 1.34rem;
    font-weight: 500;
    padding: 1rem 1.4rem;
    margin-right: 1rem;
    transition: 0.3s;
    &:hover {
        background: var(--v-dark-blue);
        color: var(--v-white);
    }
    > * {
        vertical-align: middle;
    }
    .icon {
        font-size: 1.1rem;
        margin-left: 0.8rem;
    }
    &.dark {
        background: var(--v-dark-blue);
        color: var(--v-white);
        &:hover {
            background: var(--v-white);
            color: var(--v-dark-blue);
        }
    }
    &.small {
        font-size: 0.8rem;
        font-weight: 400;
        padding: 0.6rem 0.8rem;
        margin-right: 0.5rem;
    }
    &.active {
        font-size: 0.8rem;
        font-weight: 400;
        padding: 0.9rem;
        margin-right: 0.5rem;
        background: var(--v-light-blue);
        color: var(--v-white);
    }
    &.hidden {
        display: none;
    }
`;

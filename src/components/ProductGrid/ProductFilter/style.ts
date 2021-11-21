import styled from 'styled-components';

export const ProductFilterContainer = styled.section`
    padding: 1rem;
    .filterDrawer {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
`;

interface ColorFilterDisplayInterface {
    color: string;
}

export const ColorFilterDisplay = styled.span<ColorFilterDisplayInterface>`
    background: ${(props) => props.color};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--v-dark-blue);
    display: inline-block;
    margin-left: 0.5rem;
    @media only screen and (max-width: 480px) {
        position: absolute;
        top: calc(50% - 10px);
        right: 2rem;
    }
`;

interface DropdownProps {
    isDropdownOpen: boolean;
    isVisibleByDefault: boolean;
}

export const Dropdown = styled.span<DropdownProps>`
    display: ${(props) => (props.isVisibleByDefault ? 'inline-block' : 'none')};
    button {
        &:after {
            content: '${(props) => (props.isDropdownOpen ? '-' : '+')}';
            font-size: 1.2rem;
            margin-left: 0.8rem;
        }
    }
    @media only screen and (max-width: 480px) {
        display: block;
    }
`;

interface DropdownSectionProps {
    isVisibleForMobile: boolean;
    isVisibleByDefault: boolean;
}

export const DropdownSection = styled.div<DropdownSectionProps>`
    display: ${(props) => (props.isVisibleByDefault ? 'block' : 'none')};
    padding-top: 2rem;
    transition: 0.3s;
    animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
        both;
    @media only screen and (max-width: 480px) {
        display: ${(props) => (props.isVisibleForMobile ? 'flex' : 'none')};
        flex-flow: column;
        button {
            width: 100%;
            margin-top: 0.5rem;
        }
        @keyframes slide-in-top {
            0% {
                transform: translateY(-1000px);
                opacity: 0;
            }
            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }
    }
`;

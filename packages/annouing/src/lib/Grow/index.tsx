import { GrowProps } from './types';
import './style.css';
import { useRef } from 'react';
import useIntersection from './useIntersection';

export default function Grow(props: GrowProps): JSX.Element {
    const { className = '', children, ...rest } = props;
    const element = useRef<HTMLDivElement>(null);
    const entry = useIntersection(element, {});
    const isVisible = !!entry?.isIntersecting

    return (
        <div className="annouing grow-container">
            <div ref={element} className={`annouing grow ${isVisible ? 'growing': ''} ${className}`} {...rest}>
                {children}
            </div>
        </div>
    );
}

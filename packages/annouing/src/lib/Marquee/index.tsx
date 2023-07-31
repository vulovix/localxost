import { MarqueeProps } from './types';
import './style.css';

export default function Marquee(props: MarqueeProps): JSX.Element {
    const { className = '', children, ...rest } = props;
    return (
        <div className={`annouing marquee ${className}`} {...rest}>
            {children}
        </div>
    );
}

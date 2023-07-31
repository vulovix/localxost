import { BlinkProps } from "./types";
import './style.css';

export default function Blink(props: BlinkProps): JSX.Element {
    const { className = '', children, ...rest} = props;
    return <div className={`annouing blink ${className}`} {...rest}>{children}</div>
}
import { GradientProps } from "./types";
import './style.css';

export default function Gradient(props: GradientProps): JSX.Element {
    const { className = '', children, ...rest} = props;
    return <div className={`annouing gradient ${className}`} {...rest}>{children}</div>
}
import { FadeProps } from "./types";
import './style.css';

export default function Fade(props: FadeProps): JSX.Element {
    const { className = '', children, ...rest} = props;
    return <div className={`annouing fade ${className}`} {...rest}>{children}</div>
}
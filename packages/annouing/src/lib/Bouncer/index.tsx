import { BouncerProps } from './types';
import './style.css';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function Bouncer(props: BouncerProps): JSX.Element {
    const { className = '', height,  children, ...rest } = props;
    const [containerStyle, setContainerStyle] = useState({});
    const [objectStyle, setObjectStyle] = useState({});
    const container = useRef<HTMLDivElement>(null);
    const object = useRef<HTMLDivElement>(null);

    const getHeight = () => {

        if(!container.current){
            return 0;
        }
        if(height){
            return height;
        }
        return container.current.clientHeight;
    };

    const getWidth = () => {
        if(!container.current){
            return window.innerWidth;
        }
        return container.current.clientWidth;
    };
    const resizeHandler  = () => {
            setContainerStyle({
                height: getHeight(), // window.innerHeight + 'px',
                width: getWidth(),
            });
        }
    useEffect(() => {
        const FPS = 60;

        setContainerStyle({
            height: getHeight(), // window.innerHeight + 'px',
            width: getWidth(),
        });

        let xPosition = 10;
        let yPosition = 10;
        let xSpeed = 1;
        let ySpeed = 1;

        const i = setInterval(()=>{
            if(!object.current){
                return;
            }
            if(xPosition + object.current.clientWidth >= getWidth() || xPosition <= 0){
                xSpeed = -xSpeed;
            }
            if(yPosition + object.current.clientHeight >= getHeight() || yPosition <= 0){
                ySpeed = -ySpeed;
            }
            xPosition += xSpeed;
            yPosition += ySpeed;
            setObjectStyle({
                left: xPosition,
                top: yPosition,
            })
        }, 1000 / FPS);

        document.addEventListener('resize', resizeHandler);

        return () => {
            document.removeEventListener('resize', resizeHandler);
            clearInterval(i);
        }
    }, [])

    return (
        <div ref={container} className={`annouing bouncer ${className}`} {...rest} style={containerStyle}>
            <div ref={object} className="annouing object" style={objectStyle}>
                {children}
            </div>
        </div>
    );
}

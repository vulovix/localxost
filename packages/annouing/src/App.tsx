import { Blink, Bouncer, Grow, Fade, Marquee, Gradient } from './lib';

function App() {
    return (
        <div>
            <Marquee className='big-text'>
                This was the 90s!
            </Marquee>
            <Blink>
                <h1>It was a time where marquees and blinks were cool! And where buttons were ugly and small!</h1>
            </Blink>
            <Fade>
                Invisible effects were cool.
            </Fade>
            <Grow className='text-center'>
                ... and ads were trying to get closer to the user!
            </Grow>
            <div className="grid-bouncer">
                <Gradient className='gradient-text'>
                    Can't decide which color to use?!
                </Gradient>
                <Bouncer className='my-bouncer'>
                    <span>Bounce!</span>
                </Bouncer>
            </div>
            <Bouncer className='my-bouncer'>
                <span>Bounce!</span>
            </Bouncer>
        </div>
    );
}


export default App;

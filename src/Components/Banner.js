import './Banner.scss';
import SvgFiRrPlay from './play';
import SvgFiRrHeart from './like';

export default function Banner () {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">POSITIONS</h1>
                <p className="singer">by Ariana Grande</p>
                <div className="buttons">
                    <button className="play round-btn"><SvgFiRrPlay/></button>
                    <button className="like round-btn"><SvgFiRrHeart/></button>
                </div>
            </div>
        </div>
    );
}
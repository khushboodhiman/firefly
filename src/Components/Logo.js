import './Logo.scss';
import logo from '../img/logo.png';

function Logo () {
    return (
        <img src={logo} className="logo" alt="Logo"></img>
    );
}

export default Logo;
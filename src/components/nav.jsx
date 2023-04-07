import {Link} from 'react-router-dom';
import avatar from '../assets/avatar.png';

export default function Nav(){
    return (
        <div className="navigation">
            <nav>
                <div className="logo"></div>
                <ul>
                    <Link to="/" style={{textDecoration: 'none', color: '#111'}}><li>Home</li></Link>
                    <Link to="/about" style={{textDecoration: 'none', color: '#111'}}><li>About</li></Link>
                    <Link to="/contact" style={{textDecoration: 'none', color: '#111'}}><li>Contact</li></Link>
                </ul>
                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>
            </nav>
        </div>
    )
}
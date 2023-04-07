import {Link} from 'react-router-dom';

export default function Nav(){
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <Link to="/" style={{textDecoration: 'none', color: '#111'}}><li>Home</li></Link>
                    <Link to="/about" style={{textDecoration: 'none', color: '#111'}}><li>About</li></Link>
                    <Link to="/contact" style={{textDecoration: 'none', color: '#111'}}><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    )
}
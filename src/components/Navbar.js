import { NavLink } from 'react-router-dom';

function Navbar() {

    const activeStyle = {
        color: '#ffd000'
    }

    return (
        <nav>
            <ul>
                <li><NavLink to='/' style={ ({isActive}) => isActive? activeStyle: undefined } className='navLink'>홈</NavLink></li>
                <li><NavLink to='/walk' style={ ({isActive}) => isActive? activeStyle: undefined }>산책길</NavLink></li>
                <li><NavLink to='/cycle' style={ ({isActive}) => isActive? activeStyle: undefined }>자전거길</NavLink></li>
                <li><NavLink to='/hiking' style={ ({isActive}) => isActive? activeStyle: undefined }>등산로</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;
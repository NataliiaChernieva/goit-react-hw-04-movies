import { CurrentNavigation } from './Navigation.styled';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <CurrentNavigation>
            <NavLink exact to='/' className="NavLink" activeClassName="NavLink--active">Home</NavLink>
            <NavLink to='/movies'className="NavLink" activeClassName="NavLink--active">Movies</NavLink>
            {/* <ul>
                <li><NavLink exact to='/' className="NavLink" activeClassName="NavLink--active">Home</NavLink></li>
                <li><NavLink to='/movies'className="NavLink" activeClassName="NavLink--active">Movies</NavLink></li>
            </ul> */}
        </CurrentNavigation>
    )
} 
import { NavLink } from '.';

export { Nav };

function Nav() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink href="/" exact className="nav-item nav-link">Single Alert</NavLink>
                <NavLink href="/multi-alerts" className="nav-item nav-link">Multiple Alerts</NavLink>
            </div>
        </nav>
    );
}
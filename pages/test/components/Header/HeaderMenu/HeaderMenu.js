import classes from './HeaderMenu.module.css'

function HeaderMenu(props) {
    const links = [
        {to: '/', label: 'My Jobs'},
        {to: '/', label: 'Career Research'}
    ];
    return (
        <nav className={classes.HeaderMenu}>
            <ul>
                {links.map((link, idx) => {
                    return (
                        <li key={idx}><a onClick={e => e.preventDefault()} href={link.to}>{link.label}</a></li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default HeaderMenu;
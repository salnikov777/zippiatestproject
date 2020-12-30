import classes from './Header.module.css'
import Logo from "./Logo/Logo";
import Button from "../UI/Button/Button";
import HeaderMenu from "./HeaderMenu/HeaderMenu";


function Header(props) {
    return (
        <header className={classes.Header}>
            <Logo/>
            <HeaderMenu/>
            <Button type="login" onClick={e => e.preventDefault()}>Login</Button>
            <Button type="signUp" onClick={e => e.preventDefault()}>Sign up</Button>
        </header>
    );
}

export default Header;
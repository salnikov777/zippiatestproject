import classes from './SubMenu.module.css';
import Button from "../UI/Button/Button";

function SubMenu({subMenuOptions}) {
    return (
        <div className={classes.SubMenu}>
            <ul>
                {subMenuOptions.map((el, idx) => {
                    return (
                        <li
                            key={idx}
                        >
                            <a
                                onClick={e => e.preventDefault()}
                                href={el.to}
                            >
                                {el.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <Button type="alert">Get Alerts For Develo... Jobs</Button>

        </div>
    );
}

export default SubMenu;
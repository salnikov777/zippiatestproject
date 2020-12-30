import classes from './Button.module.css'

function Button(props) {
    const cls = [
        classes.Button,
        classes[props.type] ? classes[props.type] : classes.signUp
    ]

    return (
        <button
            className={cls.join(' ')}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default Button;
import classes from './Input.module.css'

function Input(props) {

    return (
        <div className={classes.Input}>
            <input
                className={props.type ? classes[props.type] : classes.type1}
                type="text"
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder ? props.placeholder : 'Some text'}
            />

        </div>
    );
}

export default Input;
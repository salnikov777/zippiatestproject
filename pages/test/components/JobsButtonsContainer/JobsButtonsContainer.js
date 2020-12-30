import classes from './JobsButtonsContainer.module.css';

function JobsButtonsContainer(props) {
    return (
        <div className={classes.JobsButtonsContainer}>
            {props.children}
        </div>
    );
}

export default JobsButtonsContainer;
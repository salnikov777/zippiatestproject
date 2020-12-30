import classes from './JobItem.module.css'

function JobItem({title, companyName, shortDesc}) {
    return (
        <div className={classes.JobItem}>
            <h2>{title}</h2>
            <p className={classes.companyName}>{companyName}</p>
            <p className={classes.shortDesc}>{shortDesc.length < 150 ? shortDesc : shortDesc.slice(0, 150) + '...'}</p>

        </div>
    );
}

export default JobItem;
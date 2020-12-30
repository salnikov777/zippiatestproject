import classes from './SearchJob.module.css'
import Breadcrumbs from "../UI/Breadcrumbs/Breadcrumbs";
import Input from "../UI/Input/Input";

function SearchJob(props) {
    return (
        <div className={classes.SearchJob}>
            <Breadcrumbs breadcrumps={props.breadcrumbs} type="standard"/>
            <Input type="type1" placeholder="Search for a job title"/>
        </div>

    );
}

export default SearchJob;
import classes from './JobsContainer.module.css';
import JobItem from "./JobItem/JobItem";

function JobsContainer({jobs, specialty}) {
    let jobsList;

    if (jobs.length === 0) {
        jobsList = <p className={classes.message}>There is no job for your specialty ( {specialty} ) in this company</p>
    } else {
        jobsList = jobs.map((job, idx) => {
            return <JobItem
                key={(job.jobId || idx) + Math.random()}
                title={job.jobTitle || "jobTitle"}
                companyName={job.companyName || "CompanyName"}
                shortDesc={job.shortDesc || job.jobDescription || job.OBJindustry || "There is no description"}
            />
        });
    }

    return (
        <div className={classes.JobsContainer}>
            {jobsList}
        </div>
    );
}

export default JobsContainer;
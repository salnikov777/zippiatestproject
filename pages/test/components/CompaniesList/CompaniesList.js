import classes from './CompaniesList.module.css'

function CompaniesList({companies, companyButtonClickHandler}) {
    return (
        <div className={classes.CompaniesList}>
            {
                !companies || !companies.length
                    ? <p>There is no company with such a name</p>
                    : <ul>{companies.map(company => {
                        return (<li
                                key={company.companyID}
                                id={company.companyID}
                                onClick={companyButtonClickHandler}
                            >
                                {company.companyName}
                            </li>
                        );
                    })}</ul>

            }

        </div>
    );
}

export default CompaniesList;
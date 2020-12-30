import classes  from './Breadcrumbs.module.css'

function Breadcrumbs({breadcrumps, type}) {

    return (
        <div className={classes.Breadcrumbs}>
            {breadcrumps.map((breadcrump, idx)=>{
                return (
                    <a
                        className={classes[type] ? classes[type] : classes.standard}
                        onClick={e => e.preventDefault()}
                        href="/"
                        key={idx}
                    >
                        &nbsp;{breadcrump.label}&nbsp;{breadcrumps.length -1 !== idx ? '/' : null }
                    </a>
                );
            })}


        </div>
    );
}

export default Breadcrumbs;
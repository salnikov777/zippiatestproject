//It is my first time when I use nextjs so I don't know exactly how
// to structure components in nextjs.
//When I fulfilled the first test I noticed that the class component
// is used there so I decided not to use hooks.

// As it is a simple application I decided not to use redux
// Structure:
//Folder /components keeps components without state
//Folder /containers keeps components with state
//Folder /containers/UI keeps UI components that are used in application several times
//For API requests I used Axios

//I didn't notice the next API URLs in the task description but I founded out that it needs for correct work
//https://www.zippia.com/api/getCompanyJobs/
//https://www.zippia.com/autocomplete/company/?searchString=


import classes from './jobs.module.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CareerJobPage from "./containers/CareerJobPage/CareerJobPage";


function Jobs(props) {
    return (
        <div className={classes.jobs}>
            <Header/>
            <main>
                <CareerJobPage/>
            </main>
            <Footer/>
        </div>

    );
}

export default Jobs;
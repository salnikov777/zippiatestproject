import classes from './CareerJobPage.module.css';
import React, {Component} from 'react';
import axios from 'axios';
import SearchJob from "../../components/SearchJob/SearchJob";
import SubMenu from "../../components/SubMenu/SubMenu";
import Loader from "../../components/UI/Loader/Loader";
import Button from "../../components/UI/Button/Button";
import JobsButtonsContainer from "../../components/JobsButtonsContainer/JobsButtonsContainer";
import JobsContainer from "../../components/JobsContainer/JobsContainer";
import ModalWindow from "./ModalWindow/ModalWindow";

class CareerJobPage extends Component {
    state = {
        apiModes: {
            current: 0,
            modes: [
                {
                    name: "search by speciality",
                    url: 'https://www.zippia.com/api/jobs/'
                },
                {
                    name: "search by company",
                    url: 'https://www.zippia.com/api/getCompanyJobs/'
                },
            ]

        },
        loading: true,
        jobs: [],
        totalJobs: 0,
        breadcrumbs: [
            {to: '/', label: 'Zippia Careers'},
            {to: '/', label: 'Computer and Mathematical Industry'},
            {to: '/', label: 'Developer'},
        ],
        subMenuOptions: [
            {to: '/', label: 'Overview'},
            {to: '/', label: 'Jobs'},
            {to: '/', label: 'Salary'},
            {to: '/', label: 'Resume'},
            {to: '/', label: 'Skills'},
            {to: '/', label: 'What They Do'},
            {to: '/', label: 'Education'},
            {to: '/', label: 'Demographics'},

        ],
        requestParams: {
            "companySkills": true,
            "dismissedListingHashes": [],
            "fetchJobDesc": true,
            "jobTitle": "Business Analyst",
            "locations": [],
            "numJobs": 20,
            "previousListingHashes": []
        },
        isModalWindowOpen: false
    }

    async componentDidMount() {
        try {
            const response = await axios.post(this.state.apiModes.modes[0].url, this.state.requestParams);
            if (response.status === 200 && Array.isArray(response.data.jobs)) {
                this.setState({
                    totalJobs: response.data.totalJobs,
                    loading: false,
                    jobs: response.data.jobs

                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    developButtonClickHandler = async (e) => {

        this.setState({
            isModalWindowOpen: !this.state.isModalWindowOpen
        });

    }

    last7DaysButtonClickHandler = async (e) => {
        this.setState({
            loading: true
        })

        const request = {...this.state.requestParams, postingDateRange: "7d"}
        try {
            const response = await axios.post(this.state.apiModes.modes[this.state.apiModes.current].url, request);
            if (response.status === 200 && Array.isArray(response.data.jobs)) {
                this.setState({
                    totalJobs: response.data.totalJobs,
                    loading: false,
                    jobs: response.data.jobs

                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    companyButtonClickHandler = async(e) => {

        this.setState({
            loading: true,
            isModalWindowOpen: false
        })

        const requestParams = {...this.state.requestParams, companyId: +e.target.id};
        try {
            const response = await axios.post(this.state.apiModes.modes[1].url, requestParams);

            if (response.status === 200 && Array.isArray(response.data.jobs)) {

                const apiModes = {...this.state.apiModes};
                apiModes.current = 1;

                this.setState({
                    totalJobs: response.data.totalJobs,
                    loading: false,
                    jobs: response.data.jobs,
                    apiModes,
                    requestParams

                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={classes.CareerJobPage}>
                <SearchJob breadcrumbs={this.state.breadcrumbs}/>
                <h1>{this.state.requestParams.jobTitle}&nbsp;<span>{this.state.subMenuOptions[1].label}</span></h1>
                <SubMenu subMenuOptions={this.state.subMenuOptions}/>
                {
                    this.state.loading
                        ? <Loader/>
                        : <>
                            <JobsButtonsContainer>
                                <Button onClick={this.developButtonClickHandler} type="commonButtonForSearch">Develop&nbsp;
                                    <span
                                        className={this.state.isModalWindowOpen ? classes.arrowUp : classes.arrowDown}/></Button>
                                <Button onClick={this.last7DaysButtonClickHandler} type="commonButtonForSearch">Last 7
                                    days</Button>
                            </JobsButtonsContainer>
                            <JobsContainer
                                jobs={this.state.jobs.slice(0, 10)}
                                specialty={this.state.requestParams.jobTitle}
                            />
                            {
                                this.state.isModalWindowOpen
                                    ? <ModalWindow
                                        developButtonClickHandler={this.developButtonClickHandler}
                                        companyButtonClickHandler={this.companyButtonClickHandler}
                                    />
                                    : null
                            }
                        </>
                }


            </div>
        )


    }
}

export default CareerJobPage;
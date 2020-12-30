import axios from 'axios'
import classes from './ModalWindow.module.css';
import React, {Component} from 'react';
import CompaniesList from "../../../components/CompaniesList/CompaniesList";


class ModalWindow extends Component {
    state = {
        inputValue: '',
        companiesList: [],
        developer: {}
    }

    searchCompanyChangeHandler = (e) => {
        if (e.target.value[e.target.value.length - 1] === ' '
            &&
            this.state.inputValue[this.state.inputValue.length - 1] === ' ') {
            return;
        }

        this.setState({
            inputValue: e.target.value
        })

        if (this.timeout) {
            clearTimeout(this.timeout)
        }

        this.timeout = setTimeout(async () => {
            const stringRequest = this.state.inputValue.trim().replace(/ /g, "%20");
            if (stringRequest) {
                const response = await axios.get(`https://www.zippia.com/autocomplete/company/?searchString=${stringRequest}`);
                if (response.status === 200 && Array.isArray(response.data)) {
                    let companiesListSorted = response.data.sort((a, b)=> {
                        if(a.companyName > b.companyName){
                            return 1
                        }
                        if(a.companyName < b.companyName){
                            return -1
                        }
                        return 0;
                    });

                    this.setState({
                        companiesList: companiesListSorted
                    })
                }
            } else {
                this.setState({
                    companiesList: []
                })
            }

            this.timeout = null;
        }, 500);

    }

    render() {
        return (
            <div className={classes.ModalWindow}>
                <div className={classes.blackout} onClick={this.props.developButtonClickHandler}/>
                <div className={classes.filterContent}>
                    <input
                        className={classes.modalWindowInput}
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.searchCompanyChangeHandler}
                        placeholder='input a company name'
                    />
                    <CompaniesList
                        companies={this.state.companiesList}
                        companyButtonClickHandler={this.props.companyButtonClickHandler}
                    />
                </div>

            </div>
        );
    }
}

export default ModalWindow;
import React, {Component} from "react";
import {connect} from "react-redux";
import TableHeadActions from "../actions/TableHeadActions";

class FlightTableHead extends Component
{
    constructor(props){
        super(props);

        this.state = { showFilter: false };
    }

    render() {
        console.log("table header render");

        return(
            <tr className="head">
                <td>Номер</td>
                <td onClick={this.onClick_ShowFilter.bind(this)}>
                    {!this.state.showFilter && "Город"}
                    {!this.state.showFilter && this.props.cityFilter !== "" && 
                        <span className="city-hint"> ({this.props.cityFilter})</span>}

                    {this.state.showFilter && 
                        <div>
                            <input defaultValue={this.props.cityFilter} placeholder="Город" id="city-filter-input"/>
                            <button onClick={this.onClick_SaveFilter.bind(this)}>save</button>
                        </div>}
                </td>
                <td>Самолет</td>
                <td>Время</td>
                <td>Фактическое время</td>
                <td>Статус</td>
            </tr>
        );
    }

    onClick_ShowFilter(e){
        if(!this.state.showFilter){
            this.setState({ showFilter: !this.state.showFilter });
        }
    }

    onClick_SaveFilter(){
        this.setState({ showFilter: !this.state.showFilter });
        
        let filterValue = document.getElementById("city-filter-input").value;
        TableHeadActions.SetCityFilter(filterValue);
    }
}

function mapStateToProps(state){
    return{
        cityFilter: state.flightTableReducer.cityFilter
    }
}

export default connect(mapStateToProps)(FlightTableHead);
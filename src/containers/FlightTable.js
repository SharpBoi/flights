import React, { Component } from "react";
import {connect} from "react-redux";

import "../content/styles/flighttable.css";
import FlightTableHead from "./FlightTableHead";
import FlightTableRow from "./FlightTableRow";

class FlightTable extends Component
{
    constructor(props){
        super(props);

        this.rows = [];
    }

    render() {
        // while(rows.length < this.props.rows.length)
        this.rows = [];
        for(let i = this.rows.length; i < this.props.rows.length; i++)
        {
            if(this.props.cityFilter !== "")
            {
                if(this.props.rows[i].city === this.props.cityFilter)
                    this.rows.push(<FlightTableRow key={i} rowId={i}/>);
            }
            // else
            //     this.rows.push(<FlightTable key={i} rowId={i}/>);
        }

        return(
            <div className="flight-table">
                <table>
                    <tbody>
                        <FlightTableHead />
                        
                        {this.rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        editable : state.flightTableReducer.editable,
        rows : state.flightTableReducer.rows,
        cityFilter: state.flightTableReducer.cityFilter
    }
}

export default connect(mapStateToProps)(FlightTable);
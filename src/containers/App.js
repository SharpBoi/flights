import React, { Component } from 'react';
import FlightTable from './FlightTable';
import {connect} from "react-redux";

import "../content/styles/app.css";
import TableActions from '../actions/TableActions';

class App extends Component 
{
    constructor(props){
        super(props);

        this.addRow = this.addRow.bind(this);

        this.id = 0;

        // для теста добавил неск строк
        this.addRow();
        this.addRow();
    }

    render() {
        return (
            <div className="App">

                <div className="app-header">
                    <img src={require("../content/images/plane.png")} />
                    <span>Flights</span>
                </div>

                <div className="app-control-container">
                    <button onClick={this.switchEditMode} >Switch mode</button>
                    {this.props.tableEditable && <button onClick={this.addRow}>Add row</button>}
                </div>

                <div className="flight-count-container">
                    <span>Количество полетов: {this.props.rowsCount}</span>
                </div>
                <div className="flight-table-container">
                    <FlightTable />
                </div>

            </div>
        );
    }

    addRow(){
        TableActions.AddRow(
            this.id++, 
            "Екатеринбург", 
            "БА-34", 
            "01:34",
            "01:35",
            "Прибыл");
    }
    switchEditMode(){
        TableActions.SwitchEditMode();
    }
}

function mapStateToProps(state){
    return{
        tableEditable : state.flightTableReducer.editable,
        rowsCount: state.flightTableReducer.rows.length
    }
}

export default connect(mapStateToProps)(App);
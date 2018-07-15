import React, { Component } from "react";
import {connect} from "react-redux";
import TableRowActions from "../actions/TableRowActions";

class FlightTableRow extends Component
{
    constructor(props){
        super(props);

        this.deleteSelf = this.deleteSelf.bind(this);
        this.turnEditMode = this.turnEditMode.bind(this);
        this.saveChanges = this.saveChanges.bind(this);

        this.id = props.rowId;
        
        this.showCells = [];
        this.showInps = [];
    }

    render(){
        console.log("row render", this.props.rowData);

        if(this.props.rowEditable === false)
            this.showCells = [
                <td>{this.props.rowData.id}</td>,
                <td>{this.props.rowData.city}</td>,
                <td>{this.props.rowData.planeType}</td>,
                <td>{this.props.rowData.time}</td>,
                <td>{this.props.rowData.actualTime}</td>,
                <td>{this.props.rowData.status}</td>
            ];
        else
        {
            this.showCells = [];
            this.showInps = [
                <input defaultValue={this.props.rowData.id} />,
                <input defaultValue={this.props.rowData.city} />,
                <input defaultValue={this.props.rowData.planeType} />,
                <input defaultValue={this.props.rowData.time} />,
                <input defaultValue={this.props.rowData.actualTime} />,
                <input defaultValue={this.props.rowData.status} />
            ];
            this.showInps.map((inp, index) => {
                this.showCells.push(<td>{inp}</td>);
            });
        }

        var controlButtons;
        if(this.props.tableEditable)
        {
            controlButtons = 
                <td className="row-controls-container">
                    <button onClick={this.deleteSelf}>delete</button>
                    {this.props.rowEditable && <button onClick={this.saveChanges}>save</button>}
                    {!this.props.rowEditable && <button onClick={this.turnEditMode}>edit</button>}
                </td>;
        }

        return(
            <tr id={"tr-" + this.id}>
                {this.showCells}
                {controlButtons}
            </tr>
        );
    }
    
    deleteSelf(){
        TableRowActions.DeleteRow(this.id);
    }

    turnEditMode(){

        TableRowActions.SwitchEditMode(this.id);
    }
    saveChanges(){
        
        var tds = document.getElementById("tr-" + this.id).children;
        var values = [];
        for(let i = 0; i < tds.length; i++) 
            values.push(tds[i].children[0].value);
        
        this.props.rowData["id"] = values[0];
        this.props.rowData["city"] = values[1];
        this.props.rowData["planeType"] = values[2];
        this.props.rowData["time"] = values[3];
        this.props.rowData["actualTime"] = values[4];
        this.props.rowData["status"] = values[5];

        TableRowActions.SwitchEditMode(this.id);
        TableRowActions.SaveChanges(this.id, this.props.rowData);
    }
}

function mapStateToProps(state, props){
    return{
        rowData: state.flightTableReducer.rows[props.rowId],
        rowEditable: state.flightTableReducer.rows[props.rowId].editable,
        tableEditable: state.flightTableReducer.editable
    }
}

export default connect(mapStateToProps)(FlightTableRow);
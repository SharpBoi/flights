import flightTableState from "../states/flightTableState";

import Consts from "../consts/Consts";
import flightTableRowState from "../states/flightTableRowState";

function flightTableReducer(state = flightTableState, action)
{
    if(action.type === Consts.Table.ADD_ROW) {

        // создаем новый объект строки
        let newRow = Object.assign({}, flightTableRowState);
        newRow.id = action.payload.id;
        newRow.city = action.payload.city;
        newRow.planeType = action.payload.planeType;
        newRow.time = action.payload.time;
        newRow.actualTime = action.payload.actualTime;
        newRow.status = action.payload.status;
        newRow.editable = false;

        return {
            ...state, rows: state.rows.concat(newRow)
        }
    }
    else if(action.type === Consts.Table.DELETE_ROW){
        
        // копирование, т.к. другой массив вызовет ререндер таблицы
        let newRows = state.rows.slice();
        newRows.splice(action.payload.rowId, 1);

        return{
            ...state, rows: newRows
        }
    }
    else if(action.type === Consts.Table.SWITCH_EDIT_MODE){
        return{
            ...state, editable: !state.editable
        }
    }
    else if(action.type === Consts.Table.SET_CITY_FILTER){
        console.log("reduce city filter", action.payload.cityFilter);

        let newCityFilter = action.payload.cityFilter;
        return{
            ...state, cityFilter: newCityFilter
        }   
    }

    else if(action.type === Consts.Row.SWITCH_EDIT_MODE){
        state.rows[action.payload.rowId].editable = !state.rows[action.payload.rowId].editable;
        return{
            ...state
        }
    }
    else if(action.type === Consts.Row.SAVE_CHANGES){
        
        let newRows = Object.assign([], state.rows)

        newRows[action.payload.rowId] = action.payload.rowData;

        return{
            ...state, rows: newRows
        }
    }

    return state;
}

export default flightTableReducer;
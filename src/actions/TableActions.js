import mainStore from "../stores/mainStore";
import Consts from "../consts/Consts";

class TableActions
{
    static AddRow(id, city, planeType, time, actualTime, status){

        var rowData = {
            id: id,
            city: city, 
            planeType: planeType,
            time: time,
            actualTime: actualTime,
            status: status
        };

        mainStore.dispatch({ type : Consts.Table.ADD_ROW, payload: rowData });
    }

    static SwitchEditMode(){
        mainStore.dispatch({ type: Consts.Table.SWITCH_EDIT_MODE });
    }
}

export default TableActions;
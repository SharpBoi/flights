import mainStore from "../stores/mainStore";
import Consts from "../consts/Consts";

class TableRowActions
{
    static DeleteRow(rowId){
        mainStore.dispatch({ type: Consts.Table.DELETE_ROW, payload: { rowId: rowId } });
    }

    static SwitchEditMode(rowId){
        mainStore.dispatch({ type: Consts.Row.SWITCH_EDIT_MODE, payload: { rowId: rowId } });
    }

    static SaveChanges(rowId, rowData){
        mainStore.dispatch({ type: Consts.Row.SAVE_CHANGES, payload: { rowId: rowId, rowData: rowData} })
    }
}

export default TableRowActions;
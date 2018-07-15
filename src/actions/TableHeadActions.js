import mainStore from "../stores/mainStore";
import Consts from "../consts/Consts";

class TableHeadActions
{
    static SetCityFilter(value){
        mainStore.dispatch({ type: Consts.Table.SET_CITY_FILTER, 
            payload: { cityFilter: value } });
    }
}

export default TableHeadActions;
import * as Types from '../constraints/CreateStoreCST'
import callAPI, { callAPIForFormData } from '../utils/apiCaller'
import SelectShopPostion from '../constraints/SelectShopPosition'
var initialState = null;

export const handleCreateStore = (state = initialState, action) => {
    switch (action.type) {
        case Types.HANDLE_CREATE_STORE:
            return action.data;
        default: 
            return state;
    }
}
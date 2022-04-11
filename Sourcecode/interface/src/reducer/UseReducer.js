export const initialStateUser = null;
export const initialStateCompany = null;

export const reducerUser = (stateUser, action) => {
    if(action.type==="USER"){
        return action.payload;
    }
    return stateUser;
}


export const reducerCompany = (stateCompany, action) => {
    if(action.type==="COMPANY"){
        return action.payload;
    }
    return stateCompany;
}

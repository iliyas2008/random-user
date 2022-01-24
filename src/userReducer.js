export const initialState = {
    users: []
}

export const UserReducer = (state, action) =>{
    switch (action.type) {
        case "ADD_USER":
            break
        default:
            throw Error("No action type found.")
    }
}
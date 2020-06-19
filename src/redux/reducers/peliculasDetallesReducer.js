import tipos from '../actions/tipos'

const initialState = {
    data: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case tipos.GET_DETAILS_FULFILLED:
            const { data } = action.payload            
            return Object.assign({}, state, {
                data
               

            })

        default:
            return state
    }

}
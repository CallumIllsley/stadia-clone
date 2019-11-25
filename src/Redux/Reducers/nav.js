import { ACTIVE_PAGE }  from '../Actions/ACTION_TYPES'

const initialState = { 
    activePage: null
}

function Nav(state = initialState, action) { 
    switch (action.type) {
        case ACTIVE_PAGE: 
            return { 
                ...state, 
                activePage: action.payload
            }
            break;
        default: return state
    }
}

export default Nav
import { ACTIVE_PAGE, SCROLL_TO }  from '../Actions/ACTION_TYPES'

const initialState = { 
    activePage: 'Home',
    scrollTo: null
}

function Nav(state = initialState, action) { 
    switch (action.type) {
        case ACTIVE_PAGE: 
            return { 
                ...state, 
                activePage: action.payload
            }
            break;
        case SCROLL_TO: 
            return { 
                ...state, 
                scrollTo: action.payload
            }
        default: return state
    }
}

export default Nav
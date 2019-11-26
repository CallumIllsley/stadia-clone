import { ACTIVE_PAGE, SCROLL_TO, NAV_VIS }  from '../Actions/ACTION_TYPES'

const initialState = { 
    activePage: 'Home',
    scrollTo: null,
    navVis: true
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
        case NAV_VIS: 
            return { 
                ...state,
                navVis: action.payload
            }
        default: return state
    }
}

export default Nav
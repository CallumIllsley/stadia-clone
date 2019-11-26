import { ACTIVE_PAGE, SCROLL_TO, NAV_VIS } from './ACTION_TYPES'

export const activePage = (page) => { 
    return { 
        type: ACTIVE_PAGE,
        payload: page
    }
}

export const scrollTo = (ref) => { 
    return { 
        type: SCROLL_TO,
        payload: ref
    }
}

export const showNav = (vis) => { 
    return { 
        type: NAV_VIS, 
        payload: vis
    }
}
import { ACTIVE_PAGE, SCROLL_TO } from './ACTION_TYPES'

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
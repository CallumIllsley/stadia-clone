import { ACTIVE_PAGE } from './ACTION_TYPES'

export const activePage = (page) => { 
    return { 
        type: ACTIVE_PAGE,
        payload: page
    }
}
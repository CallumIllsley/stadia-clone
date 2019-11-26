import React from 'react'
import Styles from './library.module.css'
import Input from '@material-ui/core/Input'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

function LibraryNav() { 

    return ( 
        <div className={Styles.topNavWrapper}>
            <Input
                className={Styles.searchBar}
                variant='secondary'
                type='search'
                placeholder="Search library..."
                disableUnderline={true}
            />
            <SettingsOutlinedIcon className={Styles.settings}/>
        </div>
    )
}

export default LibraryNav
import React from 'react'
import Styles from './landing.module.css'
import DevicesTwoToneIcon from '@material-ui/icons/DevicesTwoTone'
import CloudTwoToneIcon from '@material-ui/icons/CloudTwoTone'
import SpeedTwoToneIcon from '@material-ui/icons/SpeedTwoTone'
import VideogameAssetTwoToneIcon from '@material-ui/icons/VideogameAssetTwoTone';

function LandingHeader() { 
    return ( 
        <div className={Styles.landingHeader}>
            <div className={Styles.headerInfo}>
                <div className={Styles.headerInfoItem} >
                    <DevicesTwoToneIcon className={Styles.headerIcon} size='large'/>
                    <label className={Styles.headerLabels}>Play anywhere, on any device.</label>
                </div>
                <div className={Styles.headerInfoItem}>
                    <CloudTwoToneIcon className={Styles.headerIcon} size='large'/>
                    <label className={Styles.headerLabels}>Cloud saves.</label>
                </div>
                <div className={Styles.headerInfoItem}> 
                    <SpeedTwoToneIcon className={Styles.headerIcon} size='large'/>
                    <label className={Styles.headerLabels}>Lightning fast.</label>
                </div>
                <div className={Styles.headerInfoItem} >
                    <VideogameAssetTwoToneIcon className={Styles.headerIcon} size='large'/>
                    <label className={Styles.headerLabels}>All of your games, in one place.</label>
                </div>
            </div>
        </div>
    )
}

export default LandingHeader
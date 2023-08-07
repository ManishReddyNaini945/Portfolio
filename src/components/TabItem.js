import React from 'react'

import './TabItem.css'

const TabItem = props => {
  const {tabDetails,updateTabId,isActive} = props
  const {displayText,tabId} = tabDetails

  const activeClassName=isActive?'active-tab-btn':""

  const onClickTabItem=()=>{
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${activeClassName}`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

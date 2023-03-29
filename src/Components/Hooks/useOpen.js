import React from 'react'

export const useOpen = () => {
    const [tabs, setTabs] = React.useState({})
    function handleClick(event) {
        let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}'`)
        if(element.style.display === 'none') {
            element.style.display = 'block'
            setTabs({
                ...tabs, [event.currentTarget.id]: {
                    icon: event.currentTarget.getElementsByTagName('img')[0],
                    text: event.currentTarget.getElementsByTagName('span')[0],
                    target: event.currentTarget.id
                }
            })
            
        }
        // else {
        //     element.style.display = 'none'
        // }
        
    }
  return {handleClick, tabs}
}

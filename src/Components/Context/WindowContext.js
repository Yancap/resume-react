import React from 'react'


export const WindowContext = React.createContext()
export const WindowStorage = ({children}) => {
    const [tabs, setTabs] = React.useState()
    function handleClick(event) {
        let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}'`)
        if(element.style.display === 'none') {
            element.style.display = 'block'
            if (tabs) {
                setTabs({
                    ...tabs, [event.currentTarget.id]: {
                        icon: event.currentTarget.getElementsByTagName('img')[0].getAttribute('src'),
                        text: event.currentTarget.getElementsByTagName('span')[0].innerHTML,
                        target: event.currentTarget.id
                    }
                })
            } else{
                setTabs({
                    [event.currentTarget.id]: {
                        icon: event.currentTarget.getElementsByTagName('img')[0].getAttribute('src'),
                        text: event.currentTarget.getElementsByTagName('span').innerHTML,
                        target: event.currentTarget.id
                    }
                }) 
            }
        }
        // else {
        //     element.style.display = 'none'
        // }       
    }
  return (
    <WindowContext.Provider value={{tabs, handleClick}}>
        {children}
    </WindowContext.Provider>
  )
}

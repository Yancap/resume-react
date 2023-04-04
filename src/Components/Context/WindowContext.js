import React from 'react'


export const WindowContext = React.createContext()
export const WindowStorage = ({children}) => {
    const [tabs, setTabs] = React.useState(null)
    const [active, setActive] = React.useState({})
    function handleClick(event) {
        let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}'`)
        setActive({...active, [event.currentTarget.dataset.point]: true})
        if (tabs) {
            setTabs({
                ...tabs, [event.currentTarget.dataset.point]: {
                    icon: event.currentTarget.getElementsByTagName('img')[0].getAttribute('src'),
                    text: event.currentTarget.getElementsByTagName('span')[0].innerHTML,
                    target: event.currentTarget.id || event.currentTarget.dataset.point
                }
            })
        } else{
            setTabs({
                [event.currentTarget.dataset.point]: {
                    icon: event.currentTarget.getElementsByTagName('img')[0].getAttribute('src'),
                    text: event.currentTarget.getElementsByTagName('span')[0].innerHTML,
                    target: event.currentTarget.id || event.currentTarget.dataset.point
                }
            }) 
        }   
    }
    function handleRemove(event) {
        let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}'`)
        setActive({...active, [event.currentTarget.dataset.point]: false})
        if (tabs[event.currentTarget.dataset.point]) {
            delete tabs[event.currentTarget.dataset.point]
            setTabs({...tabs})
        }
          
    }
    function handleMinimize(event) {
        if(event.currentTarget.dataset.point){
            let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}']`)
            element.style.visibility = 'hidden'
            document.querySelector(`#tabs button[data-point='${event.currentTarget.dataset.point}']`).removeAttribute('disabled')
        }
        console.log(tabs);
            
    }
    function handleOpen(event) {
        if(event.currentTarget.dataset.point){
            let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}']`)
            element.style.visibility = 'visible'
            document.querySelector(`#tabs button[data-point='${event.currentTarget.dataset.point}']`).setAttribute('disabled', 'disabled')
        }
        
            
    }
  return (
    <WindowContext.Provider value={{tabs, active ,handleClick, handleRemove, handleMinimize, handleOpen}}>
        {children}
    </WindowContext.Provider>
  )
}

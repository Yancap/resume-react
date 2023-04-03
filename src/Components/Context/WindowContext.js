import React from 'react'


export const WindowContext = React.createContext()
export const WindowStorage = ({children}) => {
    const [tabs, setTabs] = React.useState(null)
    function handleClick(event) {
        let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}'`)
        
        if(element.style.display === 'none') {
            element.style.display = 'block'
            element.style.zIndex = 35
            let id = event.currentTarget.dataset.point
            setTimeout(()=> document.querySelector(`[data-desktop='${id}'`).removeAttribute('active'), 250)
            console.log(event.currentTarget);
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
            
        } else{
            element.style.visibility = 'visible'
            document.querySelector(`#tabs button[data-point='${event.currentTarget.dataset.point}']`).setAttribute('disabled', 'disabled')
        }   
    }
    function handleRemove(event) {
        let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}'`)
       
        
        if(element.style.display === 'block') {
            element.style.display = 'none'
            element.style.zIndex = 30
            if (tabs[event.currentTarget.dataset.point]) {
                delete tabs[event.currentTarget.dataset.point]
                setTabs({...tabs})
                
            }
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
    <WindowContext.Provider value={{tabs, handleClick, handleRemove, handleMinimize, handleOpen}}>
        {children}
    </WindowContext.Provider>
  )
}

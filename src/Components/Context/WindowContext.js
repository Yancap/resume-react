import React from 'react'


export const WindowContext = React.createContext()
export const WindowStorage = ({children}) => {
    const [tabs, setTabs] = React.useState(null)
    function handleClick(event) {
        let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}'`)
        if(element.style.display === 'none') {
            element.style.display = 'block'
            let id = event.currentTarget.dataset.point
            setTimeout(()=> document.querySelector(`[data-desktop='${id}'`).removeAttribute('active'), 250)
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
                        text: event.currentTarget.getElementsByTagName('span')[0].innerHTML,
                        target: event.currentTarget.id
                    }
                }) 
            }
            
        }    
    }
    function handleRemove(event) {
        let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}'`)
        console.log(element);
        if(element.style.display === 'block') {
            element.style.display = 'none'
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
        
            
    }
    function handleOpen(event) {
        console.log('asd');
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

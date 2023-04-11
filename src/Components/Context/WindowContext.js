import React from 'react'


export const WindowContext = React.createContext()
export const WindowStorage = ({children}) => {
    const [tabs, setTabs] = React.useState(null)
    const [active, setActive] = React.useState({})
    const [max, setMax] = React.useState(true)
    const [min, setMin] = React.useState(true)
    
    function handleClick(event) {
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
        setActive({...active, [event.currentTarget.dataset.point]: false})
        setMax(true)
        setMin(true)
        if (tabs[event.currentTarget.dataset.point]) {
            delete tabs[event.currentTarget.dataset.point]
            setTabs({...tabs})
        }
          
    }
    function handleMinimize(event) {
        if(event.currentTarget.dataset.point){
            let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}']`)
            element.style.animation = 'minimizeWindow .5s forwards'
            setMin(false)
            document.querySelector(`#tabs button[data-point='${event.currentTarget.dataset.point}']`).removeAttribute('disabled')
        }
    }
    function handleOpen(event) {
        if(event.currentTarget.dataset.point){
            let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}']`)
            setMin(true)
            element.style.animation = 'openWindowTab .5s forwards'
            document.querySelector(`#tabs button[data-point='${event.currentTarget.dataset.point}']`).setAttribute('disabled', 'disabled')
        }
    }
    async function handleMaximize(event) {
        if(event.currentTarget.dataset.point){
            let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}']`)
            setMin(true)
            setMax(false)
            element.style.animation = 'maximizeWindow .5s forwards'
            document.querySelector(`#tabs button[data-point='${event.currentTarget.dataset.point}']`).setAttribute('disabled', 'disabled')
            
        }
    }
    async function handleNormalize(event) {
        if(event.currentTarget.dataset.point){
            let element = document.querySelector(`div[data-target='${event.currentTarget.dataset.point}']`)
            setMin(true)
            setMax(true)
            let dynamicStyles = document.createElement('style');
            document.head.appendChild(dynamicStyles)
            dynamicStyles.sheet.insertRule(`
                @keyframes normalizeWindow {
                    from{
                        top: 0;
                        left: 0;
                        height: 94vh;
                        width: 99.2vw;
                    }
                    to{
                        top: ${element.style.top}px;
                        left: ${element.style.left}px;;
                        height: ${element.style.height}px;
                        width: ${element.style.width}px;
                    }
                }
            `)
            element.style.animation = 'normalizeWindow .5s both'
            document.querySelector(`#tabs button[data-point='${event.currentTarget.dataset.point}']`).setAttribute('disabled', 'disabled')
            // await time(500)
            // element.style.animation = 'none'
        }
    }

  return (
    <WindowContext.Provider value={{tabs, active, max, min ,handleClick, handleRemove, handleMinimize, handleMaximize, handleOpen, handleNormalize}}>
        {children}
    </WindowContext.Provider>
  )
}

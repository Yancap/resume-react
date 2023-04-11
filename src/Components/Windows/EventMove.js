
export class EventMove{
    click = {x:0,y:0}
    start = {x:null,y:null}
    handleDown(event){
        const element = event.currentTarget.parentNode
        if (!this.start.x && !this.start.y) {
            this.start.x = (event.clientX - element.getBoundingClientRect().left) 
            this.start.y = (event.clientY - element.getBoundingClientRect().top)
        }
        if (event.clientY === 0 && event.clientX === 0) {
            return 0
        }
        this.click.y =  (event.clientY  -  this.start.y)
        this.click.x =  (event.clientX  - this.start.x)
        element.style.left =  this.click.x + "px"
        element.style.top = this.click.y + "px"
    }
    handleUp(event){
        const element = event.currentTarget.parentNode
        if (!this.start.x && !this.start.y) {
            this.start.x = (event.clientX - element.getBoundingClientRect().left) 
            this.start.y = (event.clientY - element.getBoundingClientRect().top)
        }
        this.click.y =  (event.clientY  -  this.start.y)
        this.click.x =  (event.clientX  - this.start.x)
        element.style.left =  this.click.x + "px"
        element.style.top = this.click.y + "px"
        this.click.x = 0
        this.click.y = 0
        this.start.x = null
        this.start.y = null
    }
    
    bindEvents(){
        this.handleDown = this.handleDown.bind(this)
        this.handleUp = this.handleUp.bind(this)
    }
    init(){
        this.bindEvents()
    }
}

export class SelectWindow{
    windows = []
    constructor(){
        this.front = 35 
        this.back = this.front - 1
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick({currentTarget}){
            document.querySelectorAll("div[data-component=window]").forEach(element =>{
                if(element.dataset.target === currentTarget.dataset.target){
                    currentTarget.style.zIndex = 35
                } else {
                    element.style.zIndex = 35 - 1
                }
            })
        
    }
    
}
export class ResizeWindow{
    click = {x:0,y:0}
    handleDown(event){
        const element = event.currentTarget.parentNode
        element.addEventListener('mousemove', this.handleMove)
    }
    handleUp(event){
        this.click.x = 0
        this.click.y = 0
        const element = event.currentTarget.parentNode
        element.removeEventListener('mousemove', this.handleMove)
    }
    handleMove(event){
        const element = event.currentTarget
        this.click.x =  (event.clientX - element.getBoundingClientRect().left) + 1
        this.click.y =  (event.clientY - element.getBoundingClientRect().top) + 1
            
        element.style.width =  this.click.x + "px"
        element.style.height = this.click.y + "px"
    }
    bindEvents(){
        this.handleDown = this.handleDown.bind(this)
        this.handleMove = this.handleMove.bind(this)
        this.handleUp = this.handleUp.bind(this)
    }
    init(){
        this.bindEvents()
    }
}
import React from 'react'

export class EventMove{
    click = {x:0,y:0}
    start = {x:null,y:null}
    zindex = 40
    handleDown(event){
        const element = event.currentTarget.parentNode
        element.addEventListener('mousemove', this.handleMove)
        SelectWindow.handleClick(element)
    }
    handleUp(event){
        this.click.x = 0
        this.click.y = 0
        this.start.x = null
        this.start.y = null
        const element = event.currentTarget.parentNode
        element.removeEventListener('mousemove', this.handleMove)
        //element.removeEventListener('mouseout', this.handleUp)
    }
    handleMove(event){
        const element = event.currentTarget
        if (!this.start.x && !this.start.y) {
            this.start.x = event.offsetX + 4
            this.start.y = event.offsetY + 4
        }
        if (event.offsetY < 0) {
            console.log(event.offsetY);
            this.click.y =  (event.clientY  -  this.start.y) - 5
        } else{
            this.click.y =  (event.clientY  -  this.start.y)
        }
        this.click.x =  (event.clientX  - this.start.x)
        //
            
        element.style.left =  this.click.x + "px"
        element.style.top = this.click.y + "px"
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

export class SelectWindow{
    static front = 35
    static back = this.front - 1
    static windows = []
    static handleClick({currentTarget}){
        this.windows = document.querySelectorAll("div[data-component=window]")
        if(currentTarget){
            this.windows.forEach(element =>{
                if(element.dataset.target === currentTarget.dataset.target){
                    currentTarget.style.zIndex = this.front
                } else {
                    element.style.zIndex = this.back
                    this.back = this.front - 1
                }
            })
        }
    }
    static bindEvents(){
        this.handleClick = this.handleClick.bind(this)
    }
    
}
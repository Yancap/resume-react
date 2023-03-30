import React from 'react'

export class EventMove{
    click = {x:0,y:0}
    handleDown(event){
        const element = event.currentTarget
        element.addEventListener('mousemove', this.handleMove)
        this.click.x = event.clientX
        this.click.y = event.clientY
        console.log(event);
    }
    handleUp(event){
        this.click.x = 0
        this.click.y = 0
        const element = event.currentTarget
        element.removeEventListener('mousemove', this.handleMove)
    }
    handleMove(event){
        const element = event.currentTarget
        let pointerX = this.click.x + (event.offsetX - element.getBoundingClientRect().width) 
        let pointerY = this.click.y  + (event.offsetY - element.getBoundingClientRect().height) 
        // this.position.movement.x = (this.position.start.x - pointerX) 
        // this.position.movement.y = (this.position.start.y - pointerY) 
        console.log(pointerX);
        console.log(event.offsetX)
        console.log(element.getBoundingClientRect().width);
        element.style.left =  pointerX + "px"
        element.style.top = pointerY + "px"
        
        
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

import React from 'react'

export class EventMove{
    click = {x:0,y:0}
    start = {x:null,y:null}
    zindex = 40
    handleDown(event){
        const element = event.currentTarget
        element.addEventListener('mousemove', this.handleMove)
        element.style.zIndex = 45
        //element.addEventListener('mouseout', this.handleUp)
    }
    handleUp(event){
        this.click.x = 0
        this.click.y = 0
        this.start.x = null
        this.start.y = null
        const element = event.currentTarget
        SelectWindow.handleClick(element)
        element.removeEventListener('mousemove', this.handleMove)
        //element.removeEventListener('mouseout', this.handleUp)
    }
    handleMove(event){
        const element = event.currentTarget
        if (!this.start.x && !this.start.y) {
            this.start.x = event.offsetX
            this.start.y = event.offsetY
        }
        this.click.x =  (event.clientX  - (this.start.x - (this.start.x > element.getBoundingClientRect().width / 2 ? 15 : 0.001)))
        this.click.y =  (event.clientY -  (this.start.y - (this.start.y > element.getBoundingClientRect().height / 2 ? 15 : 0.001)))
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
    static z_index = 35
    static handleClick(element){
        this.z_index++
        element.style.zIndex = this.z_index
    }
}
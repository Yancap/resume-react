import React from 'react'

export class EventMove{
    click = {x:0,y:0}
    start = {x:null,y:null}
    handleDown(event){
        const element = event.currentTarget
        element.addEventListener('mousemove', this.handleMove)
        //element.addEventListener('mouseout', this.handleUp)
    }
    handleUp(event){
        this.click.x = 0
        this.click.y = 0
        this.start.x = null
        this.start.y = null
        const element = event.currentTarget
        element.removeEventListener('mousemove', this.handleMove)
        //element.removeEventListener('mouseout', this.handleUp)
    }
    handleMove(event){
        const element = event.currentTarget
        if (!this.start.x && !this.start.y) {
            this.start.x = event.offsetX
            this.start.y = event.offsetY
        }
        this.click.x = element.getBoundingClientRect().left + (event.clientX - element.getBoundingClientRect().left - (this.start.x - 1))
        this.click.y = element.getBoundingClientRect().top + (event.clientY - element.getBoundingClientRect().top - (this.start.y - 1))
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

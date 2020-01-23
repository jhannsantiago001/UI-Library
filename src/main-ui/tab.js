import './styles/tabs.css'

class Tab{
    constructor(button){
        this.button = button,
        this.dataTarget = button.getAttribute("data-target"),
        this.tabContent = document.querySelector(`.tabs #${this.dataTarget}`)
    }
    init(){
        this.button.addEventListener("click", ()=>{
            const tabTriggers = document.querySelectorAll('.tabs .content')
            const buttons = document.querySelectorAll('.tabs .trigger')
            buttons.forEach((curr)=>{
                curr.classList.remove('active')
            })
            tabTriggers.forEach((curr)=>{
                curr.classList.remove('active')
            })
            this.button.classList.add('active')
            this.tabContent.classList.add('active')
        })
    }    
}
export default Tab
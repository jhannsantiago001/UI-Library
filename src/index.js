import Tooltip from './main-ui/tooltip';
import Dropdown from './main-ui/dropdown';
import Tab from './main-ui/tab'

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown')
dropdowns.forEach((curr)=>{
    const instance = new Dropdown(curr);
    instance.init();
})

const tabs = document.querySelectorAll('.tabs .trigger')
tabs.forEach((curr)=>{
    const instance = new Tab(curr);
    instance.init();
})


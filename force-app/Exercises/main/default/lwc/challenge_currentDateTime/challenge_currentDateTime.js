import { LightningElement } from 'lwc';

export default class Challenge_currentDateTime extends LightningElement {
    currentDateTime = new Date();
    updateCerrentDT(){
        this.currentDateTime = new Date();
    }
    connectedCallback(){
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setInterval(()=>{
            this.currentDateTime = new Date();
        }, 1000)
    }
}
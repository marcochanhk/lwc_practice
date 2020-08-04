import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {
    @api student={Name:'Marco',
                    PhotoUrl:'/services/images/photo/003B0FakePicId'};
    @api selected=false;
    get tileSelected(){
        return this.selected?"tile selected":"tile";
    }
    studentClick(){
        alert(this.student.Name)
        // debugger;
        // console.log("Name", this.student.Name);
        // console.log("Photo", this.student.PhotoUrl)
    }
}
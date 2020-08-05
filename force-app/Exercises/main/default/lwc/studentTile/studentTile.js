import { LightningElement, api } from 'lwc';

export default class StudentTile extends LightningElement {
    @api selectedStudentId = '';
    @api student = {
        Name: 'Peter Chan',
        PhotoUrl: '/services/images/photo/003B0FakePictId',
    };
    // @api selected = false;

    get tileSelected(){
        // return this.selected ? 'tile selected': 'tile'; 
        return (this.selectedStudentId===this.student.Id) ? "tile selected" : "tile";
    }

    studentClick(){
        // alert(this.student.Name);
        const evt = new CustomEvent('studentselected', {
            bubbles: true, composed: true,
            detail: {
                studentId: this.student.Id
            }
        });
        this.dispatchEvent(evt);
    }

    
}
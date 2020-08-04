import { LightningElement, track, wire } from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';

export default class StudentBrowser extends LightningElement {
    // @track studentList = [];
    selectedDeliveryId = '';
    selectedInstructorId = '';
    //@wire(getStudents,{instructorId:"", courseDeliveryId:""}) students;

    @wire(getStudents, { instructorId: '$selectedInstructorId', courseDeliveryId: '$selectedDeliveryId' })students; //2-9
    
    handleFilterChange(event){
        this.selectedDeliveryId = event.detail.deliveryId;
        this.selectedInstructorId = event.detail.instructorId;
    }


    // constructor() {
    //     super();
    //     const studentNames = ['Rad', 'Stuart', 'Andres', 'Rahul',
    //         "Amit", "Simon"];
    //     studentNames.forEach((studentName, index) => {
    //         this.studentList.push(
    //             {
    //                 'sobjectType': 'Contact',
    //                 'Name': studentName,
    //                 'PhotoUrl': '/services/images/photo/003B0FakePictId',
    //                 'Id': index
    //             }
    //         );
    //     })
    // }
}
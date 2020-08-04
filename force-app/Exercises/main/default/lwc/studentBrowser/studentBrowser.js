import { LightningElement, track, wire } from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';

export default class StudentBrowser extends LightningElement {
    // @track studentList = [];
    @wire(getStudents,{instructorId:"", courseDeliveryId:""}) students;

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
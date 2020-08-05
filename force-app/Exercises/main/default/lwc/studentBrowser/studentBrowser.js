import { LightningElement, track, wire } from 'lwc';
import getStudents from '@salesforce/apex/StudentBrowser.getStudents';
import {publish, MessageContext} from 'lightning/messageService';
import SELECTED_STUDENT_CHANNEL from '@salesforce/messageChannel/SelectedStudentChannel__c';

export default class StudentBrowser extends LightningElement {
    // @track studentList = [];

    // constructor() {
    //     super();
    //     // Call the super constructor here...
    //     const studentNames = ['Rad', 'Stuart', 'Andres', 'Rahul', "Amit", "Simon"];
    //     studentNames.forEach((studentName, index) => {
    //       this.studentList.push(
    //         {
    //           'sobjectType' : 'Contact',
    //           'Name' : studentName,
    //           'PhotoUrl': '/services/images/photo/003B0FakePictId',
    //           'Id' : index
    //         }
    //       );
    //     })
    //   }
      
    @wire(getStudents, {instructorId: '$selectedInstructorId', courseDeliveryId: '$selectedDeliveryId'}) students;
    selectedDeliveryId = '';
    selectedInstructorId = '';

    handleFilterChange(event){
        this.selectedDeliveryId = event.detail.deliveryId;
        this.selectedInstructorId = event.detail.instructorId;
    }

    @wire(MessageContext) messageContext;

    handleStudentSelected(event){
        const studentId = event.detail.studentId;
        this.updateSelectedStudent(studentId);
    }

    updateSelectedStudent(studentId){
        const message = {
            studentId: studentId
        }
        publish(this.messageContext, SELECTED_STUDENT_CHANNEL, message);
    }
    
}
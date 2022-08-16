import EmailPreferencesStayInTouchReminder from '@salesforce/schema/User.EmailPreferencesStayInTouchReminder';
import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {

    @track result;
    num1;
    num2;

    handleChange(event) {
        let value = parseFloat(event.target.value);
        let inputName = event.target.name;

        if( inputName == 'no1' ) {
            this.num1 = value;
        } else if( inputName == 'no2' ) {
            this.num2 = value;
        }        
    }

    addition() {
        this.result = this.num1 + this.num2;
    }

    substraction() {
        this.result = this.num1 - this.num2;
    }
    
    division() {
        this.result = this.num1 / this.num2;
    }

    multiplication() {
        this.result = this.num1 * this.num2;
    }

}
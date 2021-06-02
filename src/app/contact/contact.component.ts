import { Component, OnInit } from '@angular/core';
import { Message} from "../shared/message/message.model";
import { NgForm} from '@angular/forms';
import {HttpResponse} from "@angular/common/http";
import { MessageService} from "../shared/message/message.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Message: Message = new Message();
  formSucces:Boolean = false;
  formSubmit:Boolean = false;
  regex:any = /^[a-zA-Z0-9_ ]*$/;

  constructor(private contactFormService: MessageService) {}

  ngOnInit(): void {
  }

  onFormSubmit() {
    if(this.isFormValid() ){
      this.formSubmit = true;
      this.contactFormService.postContactForm(this.Message)
        .subscribe(
          (res:HttpResponse<Message>) => {
            this.formSucces = true;
            this.formSubmit = false;
          },
          () => this.formSucces = false
        );
      console.log(this.Message.name,this.Message.email, this.Message.message);
    }
  }

  resetUserForm(userForm: NgForm){
    userForm.resetForm();
  }

  isNameValid(){
    return this.regex.test(this.Message.name);
  }

  isEmailValid(){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(<string>this.Message.email);
  }

  isMessageValid(){
    if(undefined !== this.Message.message && this.Message.message.length>10){
      return true;
    } else {
      return false;
    }

  }

  isFormValid(){
    return this.isNameValid() && this.isEmailValid() && this.isMessageValid();
  }
}

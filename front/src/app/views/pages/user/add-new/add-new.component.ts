import { Component ,OnInit} from '@angular/core';
import {  FormGroup , Validators,FormControl}  from '@angular/forms';
import { User } from 'src/app/models/user';
import {UserService} from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {
  
  user:User;
  exform : FormGroup;
  constructor (private userService:UserService) { }
  
 
  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'email': new FormControl(null,Validators.required),
      'mobile_no': new FormControl(
        null, [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'password': new FormControl(null,Validators.required),
      'last_login': new FormControl(null),
      'ip_address': new FormControl(null),
      'user_type': new FormControl(null,Validators.required),
      'profile_pic':new FormControl(null,null),
      'status':new FormControl('Inactive')
    });
  }
  clicksub(){
    console.log(this.exform.value);
    this.exform.reset();
  }

  submitForm(){
    if(this.exform.valid){
    
     this.user=  this.exform.value;
     this.userService.saveUser(this.user).subscribe(
      (user)=>{
        swal.fire("Good job!", "User has been saved successfully!", "success");
        this.exform.reset();
       }); 
    }else{
        Object.keys(this.exform.controls).forEach(field => { // {1}
            const control = this.exform.get(field);            // {2}
            control.markAsTouched({ onlySelf: true });       // {3}
        });
      // alert('Error')
    }
  }


  openFileBrowser(event: any) {
    event.preventDefault();
    let element: HTMLElement = document.querySelector("#fileUploadInputExample") as HTMLElement;
    element.click()
  }
  handleFileInput(event: any) {
    if (event.target.files.length) {
      let element: HTMLElement = document.querySelector("#fileUploadInputExample + .input-group .file-upload-info") as HTMLElement;
      let fileName = event.target.files[0].name;
      element.setAttribute( 'value', fileName)
    }
  }

  
}

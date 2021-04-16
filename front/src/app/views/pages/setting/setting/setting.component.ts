import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Setting} from 'src/app/models/setting';
import {SettingService} from 'src/app/services/setting.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  setting:Setting;
  exform : FormGroup;
  constructor( private settingService:SettingService) { }

  
  ngOnInit(): void {
    this.exform = new FormGroup({

'facebook':new FormControl(null,Validators.required),
'twitter': new FormControl(null,Validators.required),
'linked_in':new FormControl(null,Validators.required),
'pinerest': new FormControl(null,Validators.required),
'google_map':new FormControl(null,Validators.required),
'google_embedded_code': new FormControl(null,Validators.required),
'meta_title': new FormControl(null,Validators.required),
'meta_description' :new FormControl(null,Validators.required),
'meta_keywords': new FormControl(null,Validators.required),
'analytics_code':new FormControl(null,Validators.required),
'share_this_code':new FormControl(null,Validators.required),
'webmaster_code': new FormControl(null,Validators.required),
'absense_code': new FormControl(null,Validators.required),
'site_name': new FormControl(null,null),
'site_favicon': new FormControl(null,null),
'address': new FormControl(null,null),
'contact_nos': new FormControl(null,null),
'email_id': new FormControl(null,null),
'opening_hours': new FormControl(null,null)

    });
  }

  clicksub(){
    console.log(this.exform.value);
    this.exform.reset();
  }

  submitForm(){
    if(this.exform.valid){
    
     this.setting=this.exform.value;
     this.settingService.saveSetting(this.setting).subscribe(
      (setting)=>{
        swal.fire("Good job!", "setting has been saved successfully!", "success");
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

  /*openFileBrowser(event: any) {
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
*/

}

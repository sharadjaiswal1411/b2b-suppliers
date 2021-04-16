import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Supplier } from 'src/app/models/supplier';
import {SupplierService} from 'src/app/services/supplier.service';
import swal from 'sweetalert2';
@Component({ 
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  supplier:Supplier;
  exform : FormGroup;
  constructor( private supplierService:SupplierService) { }

  
  ngOnInit(): void {
    this.exform = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'about': new FormControl(null,Validators.required),
      'category_id': new FormControl(null,Validators.required),
      'featured_categories': new FormControl(null,Validators.required),
      'brand_id': new FormControl(null,Validators.required),
      'user_id': new FormControl(null,Validators.required),
      'yoe': new FormControl(null,Validators.required),
      'noe': new FormControl(null,Validators.required),
      'company_owner': new FormControl(null,Validators.required),
      'contact_email': new FormControl(null,Validators.required),
      'contact_phone': new FormControl(
        null, [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'contact_mobile': new FormControl(
          null, [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'website': new FormControl(null,Validators.required),
      'country_id': new FormControl(null,Validators.required),
      'state_id': new FormControl(null,Validators.required), 
      'city_id': new FormControl(null,Validators.required),
      'business_id' : new FormControl(null,null),
        'facebook_url': new FormControl(null,null),
        'twitter_url' : new FormControl(null,null),
        'linkedin_url': new FormControl(null,null),
        'zipcode': new FormControl(null,null),
       'full_address': new FormControl(null,null),
        'logo': new FormControl(null,null),
        'banner': new FormControl(null,null),
        'meta_title': new FormControl(null,null),
        'meta_description': new FormControl(null,null),
        'status': new FormControl('Inactive'),
    });
  }

  clicksub(){
    console.log(this.exform.value);
    this.exform.reset();
  }

  submitForm(){
    if(this.exform.valid){
    
     this.supplier=  this.exform.value;
     this.supplierService.saveSupplier(this.supplier).subscribe(
      (supplier)=>{
        swal.fire("Good job!", "Supplier has been saved successfully!", "success");
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VisitorsService } from '../visitors.service';
import { NgbDateStruct, NgbCalendar, NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.scss']
})
export class AddVisitorComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  @ViewChild('dp',{static: true}) dp: NgbDatepicker;
  
  constructor(
		private router: Router,
    private visitorService: VisitorsService,
    private fb: FormBuilder,
    ) { }

    get f() { return this.form.controls; }

  ngOnInit() {

    this.form = this.fb.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email : ['', [Validators.required]],
      dob : ['', [Validators.required]]
    });
  }

  save() {
    this.submitted = true;
    if(this.form.valid){
        const date = this.form.get('dob').value;
        const selectedDate = date.year+'-'+date.month+'-'+date.day;
        const formData = new FormData();
        formData.append("firstname",this.form.get("firstname").value);
        formData.append("lastname",this.form.get("lastname").value);
        formData.append("email",this.form.get("email").value);
        formData.append("dob",selectedDate);
      
          this.visitorService.createVisitor(formData).subscribe(data => {
          this.submitted = false;
          this.form.reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Visitor been saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
        });
    }
  }
}

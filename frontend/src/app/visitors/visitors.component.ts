import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitorsService } from '../visitors.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent implements OnInit {

  columns = [{ name: 'Firstname' }, { name: 'Lastname' }, { name: 'Email' }];
  visitors: any;


  constructor(private visitorService: VisitorsService,private router: Router) {}

  ngOnInit() {
    this.visitorService.getVisitorsList().subscribe(data => {
			this.visitors = data.visitors;
			console.log(this.visitors);
		}, error => {
			console.log(error);
    })
  }

 delete(value){
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed) {
      this.visitorService.deleteVisitor(value).subscribe(async data => {
        this.router.navigate(['/delete']);
        Swal.fire(
          'Deleted!',
          'Visitor deleted successfully.',                                                                                                                                                                                                                                                                                        
          'success'
        )
      }, error => {
        console.log(error);
      })
    }
  })
 }  

 add(){
  this.router.navigate(['/add']);
 }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-visitor',
  templateUrl: './delete-visitor.component.html',
  styleUrls: ['./delete-visitor.component.scss']
})
export class DeleteVisitorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/']);
  }

}

import { Component, OnInit } from '@angular/core';
import { SnackBarService } from '../../Service/snackBar.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private _snackbar:SnackBarService) { }

  ngOnInit(): void {
  }
onSubmit(form: NgForm){
  console.log(form.value)
  this._snackbar.openSnackBar('Job Application Submited Successfully...!!!')
  form.reset()
}
}

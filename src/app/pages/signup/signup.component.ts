import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snackBar:MatSnackBar) { }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {
  }
  
  formSubmit(){
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      //alert('User is required !!');
      this.snackBar.open('User Name is required !', '',{
        duration:3000,
      })
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      // alert('User is required !!');
      this.snackBar.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }


    //addUser from UserService
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        //alert('Success');
        Swal.fire('Successfully Registered','User is registerd and id is '+ data.id ,'success');
      },
      (error)=>{
        //error
        console.log(error);
        //alert('Something went wrong');
        this.snackBar.open('Somehing went wrong !','',{
          duration:3000,
        })
      }
    )
}
}
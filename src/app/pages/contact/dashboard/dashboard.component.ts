import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ContactFormDetails } from 'src/app/core/models/contactForm';
import { ContactService } from 'src/app/core/services/contact.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  formDetails: ContactFormDetails[] = [];

  constructor(private contactService: ContactService, private http: HttpClient) {}

  ngOnInit() {
    this.contactService.getFormData().subscribe((res) => {
      this.formDetails = res;
    });
  }

  // Delete Form Data by ID
  showConfirmDialog = false;
  taskToDelete: string | undefined;

  toggleConfirmDialog(id: string | undefined) {
    this.taskToDelete = id;
    this.showConfirmDialog = !this.showConfirmDialog;
  }

  confirmDelete() {
    if (this.taskToDelete) {
      this.http.delete('https://africantropicalfish-default-rtdb.firebaseio.com/qouteForm/' + this.taskToDelete + '.json').subscribe(() => {
        this.formDetails = this.formDetails.filter((form) => form.id !== this.taskToDelete);
        console.log(`Deleted task with id: ${this.taskToDelete}`);
        this.taskToDelete = undefined;
      });
    } else {
      console.log('Task id is undefined');
    }
    this.showConfirmDialog = false;
  }

  cancelDelete() {
    this.taskToDelete = undefined;
    this.showConfirmDialog = false;
  }

  // Delete All Contact Form Data When Clicked
  DeleteContactFormClicked() {
    this.contactService.deleteAllFormData().subscribe(() => {
      console.log('All form data has been deleted');
      
    })
  }


}

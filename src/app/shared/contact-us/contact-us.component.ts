import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const SERVICE_ID = "service_uzmnjfy";
const TEMPLATE_ID = "template_2j6kq1i";
const PUBLIC_KEY = "7dLbbdaAEYciIZO5H";
@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  isSubmit = false;
  error = false;
  success = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required]],
    });
  }

  sendFeedback(variables) {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, variables, PUBLIC_KEY).then(
      (result: EmailJSResponseStatus) => {
        this.form.reset();
        this.isSubmit = false;
        this.success = true;
      },
      (error) => {
        this.isSubmit = false;
        this.error = true;
      }
    );
  }

  contactUs(e) {
    this.isSubmit = true;
    this.error = false;
    this.success = false;

    this.sendFeedback({
      to_name: "KonnektJobs",
      message: this.form.value.message,
      from_name: this.form.value.name,
      reply_to: this.form.value.email,
    });
  }
}

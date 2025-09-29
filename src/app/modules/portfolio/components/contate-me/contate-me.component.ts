import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contate-me',
  standalone: true,
  imports: [],
  templateUrl: './contate-me.component.html',
  styleUrl: './contate-me.component.scss'
})
export class ContateMeComponent {
  formdata = {
    name: '',
    email: '',
    telefone: '',
    assunto: '',
    message: ''
  };

  enviarEmail(e: Event) {
    e.preventDefault();

    emailjs.send(
      'SEU_SERVICE_ID',
      'SEU_TEMPLATE_ID',
      {
        from_name: this.formdata.name,
        from_email: this.formdata.email,
        phone: this.formdata.telefone,
        subject: this.formdata.assunto,
        message: this.formdata.message
      }
      'SEU_PUBLIC_KEY'
    )
    .then(() => alert('Email enviado com sucesso!'))
    .catch(() => alert('Erro ao enviar email, tente novamente!'));
  }
}

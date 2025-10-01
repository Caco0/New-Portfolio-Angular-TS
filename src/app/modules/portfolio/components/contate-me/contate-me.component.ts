import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contate-me',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contate-me.component.html',
  styleUrls: ['./contate-me.component.scss']
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
      'service_pszxti7', // service ID
      'template_lgp6fcv', // template ID
      {
        from_name: this.formdata.name,
        from_email: this.formdata.email,
        phone: this.formdata.telefone,
        subject: this.formdata.assunto,
        message: this.formdata.message
      },
      '9ZEM73NTd-pyme3qR' // public key
    )
    .then(() => alert('Email enviado com sucesso!'))
    .catch(() => alert('Erro ao enviar email, tente novamente!'));
  }
}

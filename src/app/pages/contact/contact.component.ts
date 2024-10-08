import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup; // Formulário de contato, con ! decimos que nunca va a ser null

  constructor(private formBuilder: FormBuilder) {
    // Inicializa o formulário
    this.contactForm = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]], // Campo de e-mail
      message: ['',[Validators.required, Validators.minLength(10)]] // Campo de mensagem
    });
  }

  enviar(event: Event): void {
    event.preventDefault();
    //alert('Formulário enviado!');
    console.log(this.contactForm.value);
  }

  hasErrors(fiel: string, type: string){
    return this.contactForm.get(fiel)?.hasError(type) && this.contactForm.get(fiel)?.touched;
  }

  ngOnInit(): void {
    
  }
}

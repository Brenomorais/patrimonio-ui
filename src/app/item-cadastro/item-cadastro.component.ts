import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {
  
  itens = [
    {etiqueta: 'CC001', descricao: 'Mesa', dataAquisicao: new Date()},
    {etiqueta: 'CC002', descricao: 'Cadeira', dataAquisicao: new Date()},
    {etiqueta: 'CC003', descricao: 'Geladeira', dataAquisicao: new Date()}
  ];
  constructor() { }

  ngOnInit() {
  }

}

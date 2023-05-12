import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  valorItem!: string;
  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }
}

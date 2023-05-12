import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [
    {
      id: 1,
      nome: 'Queijo prato',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 2,
      nome: 'Leite integral',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 3,
      nome: 'Mamão papaia',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: true,
    },
  ];

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  // Serve para mostrar a lista na tela
  getListaDeCompra() {
    return this.listaDeCompra;
  }

  // Monta o item todo para depois ser salvo na lista
  criarItem(nomeDoItem: string) {
    const id_ = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id_, //Já guarda o ID pela quantidade de itens na lista mais 1.
      nome: nomeDoItem,
      data: new Date().toLocaleDateString('pt-BR'), // Já coloca a data do dia de hoje
      comprado: false,
    };
    return item;
  }

  // Add o item dentro da lista
  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
  }
}

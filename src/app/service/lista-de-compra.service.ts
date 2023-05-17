import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
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
    if (!this.conferirItem(nomeDoItem)) {
      const item = this.criarItem(nomeDoItem);
      this.listaDeCompra.push(item);
      this.atualizarLocalStorage();
    } else {
      console.log('O item ' + nomeDoItem + ' já existe na lista');
      alert('O item ' + nomeDoItem + ' já existe na lista');
    }
  }

  //Editar o item que já está na lista
  editarItemDaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const nomeMaiusculo = nomeEditadoDoItem.toUpperCase(); // Mantém o nome em caixa alta

    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeMaiusculo,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado,
    };

    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);
    this.atualizarLocalStorage;
  }

  //Serve para identificar se já existe o item na lista, impedindo o nome duplicado.
  conferirItem(nomeDoItem: string): boolean {
    return this.listaDeCompra.some((item) => item.nome === nomeDoItem);
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }

  limparLocalStorage() {
    localStorage.removeItem('itens');
  }
}

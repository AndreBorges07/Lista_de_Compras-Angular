import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
    // Ao clicar no "editar", o foco vai direto para o campo de texto
    //Precisa colocar o id="campoInput" lá no html.
    const campoInput = document.getElementById(
      'campoInput'
    ) as HTMLInputElement;
    campoInput.focus();
  }

  deletarItem() {
    console.log('estão tentando me calar');

    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  checarItem() {
    if (this.item.comprado == true) {
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }

  ngOnDestroy() {
    console.log('Conseguiram me calar');
  }
}

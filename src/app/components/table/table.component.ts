import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { TaskRespose } from '../../interfaces/task.interface';
import { TruncatePipe } from '../../shared/truncate.pipe';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-table',
  imports: [TruncatePipe, NgIf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  private _list = signal<TaskRespose[]>([]);

  @Input() loader: boolean = false;
  @Input()
  set list(value: TaskRespose[]) {
    this._list.set(value);
  }
  @Output() onSubmit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();
  @Output() numberChangePage = new EventEmitter<number>();
  listSignal = this._list.asReadonly();

  constructor(private modalService: NgbModal) {}
  abrirModal() {
    const modalRef = this.modalService.open(ModalFormComponent, {
      centered: true,
      backdrop: 'static',
    });

    modalRef.componentInstance.title = 'Crear tarea';

    modalRef.result.then(
      (result) => {
        this.onSubmit.emit('OK');
      },
      () => {
        console.log('Modal cerrado sin acción');
      }
    );
  }
  abrirModalEditar(task: any) {
    const modalRef = this.modalService.open(ModalFormComponent, {
      centered: true,
      backdrop: 'static',
    });
    modalRef.componentInstance.title = 'Editar tarea';
    modalRef.componentInstance.data = task;

    modalRef.result.then(
      (result) => {
        this.onSubmit.emit('OK');
      },
      () => {
        console.log('Modal cerrado sin acción');
      }
    );
  }

  changePage(page: number) {
    if (page === 1) {
      this.numberChangePage.emit(-1);
    } else {
      this.numberChangePage.emit(+1);
    }
  }

  deleteTask(task: number) {
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta a punto de borrar la tarea!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete.emit(task.toString());
      }
    });
  }
}

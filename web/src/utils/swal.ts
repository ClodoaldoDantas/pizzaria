import Swal from 'sweetalert2';

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  showCloseButton: true,
});

export const ConfirmDialog = Swal.mixin({
  title: 'Atenção',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#34c38f',
  cancelButtonColor: '#f46a6a',
  confirmButtonText: 'Sim, quero remover!',
  cancelButtonText: 'Cancelar',
});

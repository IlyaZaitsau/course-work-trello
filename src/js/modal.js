// bootstrap import
import { Modal } from 'bootstrap'
const modalElement = document.querySelector('#modal')
const modalInstance = Modal.getOrCreateInstance(modalElement)
// Modal
function handleModal() {
  modalInstance.show()
}

export { handleModal, modalInstance }

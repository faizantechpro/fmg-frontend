export const OPEN_MODAL_POPUP = 'OPEN_MODAL_POPUP';
export const CLOSE_MODAL_POPUP = 'CLOSE_MODAL_POPUP';

export const openModal = ({ action, data = {}, modalId }) => ({
  type: OPEN_MODAL_POPUP,
  payload: { action, data, modalId },
});

export const closeModal = ({ modalId }) => ({
  type: CLOSE_MODAL_POPUP,
  modalId,
});

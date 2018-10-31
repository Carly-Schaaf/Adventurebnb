export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (modal, listing, booking) => ({
    type: OPEN_MODAL,
    modal,
    listing,
    booking
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});

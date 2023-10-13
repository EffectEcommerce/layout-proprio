"use strict";
function buildModalPayment() {
    const overlay = document.getElementsByClassName("overlay");
    const linkModal = document.querySelector(".payment-link");
    const confirmationDialog = document.getElementById("confirmation-dialog");
    const closeButton = document.querySelector(".close-modal-payment");
    verifyNull([linkModal, confirmationDialog]);
    linkModal === null || linkModal === void 0 ? void 0 : linkModal.addEventListener(('click'), e => {
        confirmationDialog.showModal();
        // //@ts-ignore
        // overlay.styles.display = "block";
    });
    closeButton === null || closeButton === void 0 ? void 0 : closeButton.addEventListener(('click'), e => {
        confirmationDialog.close();
    });
    confirmationDialog.addEventListener("click", (event) => {
        if (event.target === confirmationDialog) {
            confirmationDialog.close();
            // //@ts-ignore
            // overlay.styles.display = "none";
        }
    });
}
function verifyNull(elements) {
    elements.filter(el => {
        if (el == null) {
            return console.error(`Element selected not found`);
        }
    });
}
buildModalPayment();

function buildModalPayment() {
    const overlay = document.getElementsByClassName("overlay");

    const linkModal = document.querySelector(".payment-link");
    const confirmationDialog = document.getElementById("confirmation-dialog") as HTMLDialogElement;
    const closeButton = document.querySelector(".close-modal-payment"); 
    verifyNull([linkModal, confirmationDialog]);
    linkModal?.addEventListener(('click'), e => {
        confirmationDialog.showModal();
        // //@ts-ignore
        // overlay.styles.display = "block";
    })
    closeButton?.addEventListener(('click'), e => {
        confirmationDialog.close();
    })
    confirmationDialog.addEventListener("click", (event) => {
        if (event.target === confirmationDialog) {
            confirmationDialog.close();
            // //@ts-ignore
            // overlay.styles.display = "none";
        }
    });
}

function verifyNull(elements:(HTMLDialogElement | HTMLElement | Element | null)[]) {
    elements.filter(el => {
        if (el == null) {
            return console.error(`Element selected not found`);
        }
    })
}
buildModalPayment()
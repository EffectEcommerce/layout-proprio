function removeDataSrcCompreJunto() {
        setTimeout(()=> {
        const el = document.querySelectorAll('.buyTogether-img');
        if (el.length === 0) {
            return console.error('O elemento html não foi encontrado');
        }
        el.forEach((element) => {
            let valueAtt = element.getAttribute('data-src');
            if (valueAtt !== null) {
                element.setAttribute('src', valueAtt);
                element.removeAttribute('data-src');
            } else {
            console.error("O atributo 'data-src' não existe no elemento Compre Junto");
            return null;
            }
            
        })
    }, 700)
}
removeDataSrcCompreJunto();
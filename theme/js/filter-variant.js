
function runVariantTamanhoSearch(tamanho) {
    if (document.querySelector(".container-variant-tamanho-search")) {
        const $container = document.querySelector(".container-variant-tamanho-search");
        const variant = tamanho;
        const variantsList = variant.split(";");
        const variantsNorm = normalizeTamanho(variantsList);
        console.log(variantsNorm);
        generateButton(variantsNorm, $container);
    }
    
}

function normalizeTamanho(items) {
    let lista = []
    if(!items) {
        console.error(`O valor ${items} não foi encontrado`)
        return null;
    }
    let newItem = items.filter((item) => {
        return item != ''
    })
    newItem.forEach((i) => {
        let semEspacos = i.trim();
        lista.push(semEspacos);        
    })
    return lista
}

function generateButton(list, parent) {
    list.forEach(item => {
        const aElement = document.createElement('a');
        const pElement = document.createElement('p');
        href = `https://demoeffect.commercesuite.com.br/loja/busca.php?loja=1143858&variants%5B%5D=Tamanho%7C%7C${item}`
        pElement.textContent = item;
        aElement.classList = "tamanho-botao-variant-search  swiper-slide";
        //pElement.classList = "swiper-slide"
        aElement.setAttribute('href', href);
        parent.appendChild(aElement);
        aElement.appendChild(pElement);
    })
}
// --------------------------------------

function runVariantCorSearch(colorName, colorHex) {
    if (document.querySelector(".container-variant-cor-search")) {
        const $container = document.querySelector(".container-variant-cor-search");
        const colorsName = colorName.split(";");
        const hexColors = colorHex.split(";");
        const colorsNameNorm = normalize(colorsName);
        const hexColorsNorm = normalize(hexColors);
        colors = generateObjColor(colorsNameNorm, hexColorsNorm);
        generateButtonColors(colors, $container);
    }
}

function generateObjColor(keys, values) {
    if (!keys || !values ) {
        console.error("Os parâmetros não foram encontrados");
    }
    if (keys.lenght != values.lenght) {
        console.error("A quantidade de nomes das cores e hexadecimais não é a mesma");
    }
    let colors = {}; 
    keys.forEach((key, index) => {        
        colors[key.trim()] = values[index].trim();
    })
    return colors;
}

function normalize(items) {
    if(!items) {
        console.error(`O valor ${items} não foi encontrado`);
        return null;
    }
    let newItem = items.filter((item) => {
        return item != '';
    })

    return newItem;
}

function generateButtonColors(colors, parent) {
    if (!colors || typeof(colors) === !"object" || !parent) {
        console.error("Os parâmetros não foram inseridos de forma correta");
        return null;
    }
    const keys = Object.keys(colors);
    keys.forEach((nameColor) => {
        let hex = colors[nameColor];
        href = `https://demoeffect.commercesuite.com.br/loja/busca.php?loja=1143858&variants%5B%5D=Cor%7C%7C${nameColor}`;
        console.log(href);
        const $aElement = document.createElement('a');
        const $hexElement = document.createElement('span');
        const $spanTextElement = document.createElement('text');
        $aElement.classList = "container-color-search swiper-slide";
        $hexElement.classList = "preview-hex-search";
        $aElement.setAttribute('href', href);
        $hexElement.style.backgroundColor = hex;
        $spanTextElement.textContent = nameColor;
        $spanTextElement.classList = "text-variant-search";
        $aElement.append($hexElement, $spanTextElement);
        parent.appendChild($aElement);
    })
}
const $containerTamanho = document.querySelector(".text-variant-tamanho");
const $containerCor = document.querySelector(".text-variant-cor");
const contentTamanho = document.querySelector(".wrapper-variant-search.tamanho-variant");
const contentCor = document.querySelector(".wrapper-variant-search.cor-variant");

if((document.querySelector(".text-variant-tamanho")) && (document.querySelector(".text-variant-cor"))){
    $containerTamanho.classList.add('active-variant-tamanho');
    $containerCor.classList.add('active-variant-cor');
    $containerCor.classList.add('hidde-subline');
    $containerTamanho.addEventListener('click', ()=> {      
        contentTamanho.style.display= "flex";
        contentCor.style.display= "none";
        $containerCor.classList.add('hidde-subline');
        $containerTamanho.classList.remove('hidde-subline');
    });

    $containerCor.addEventListener('click', ()=> {
        contentTamanho.style.display= "none";
        contentCor.style.display= "flex";
        $containerTamanho.classList.add('hidde-subline');
        $containerCor.classList.remove('hidde-subline');
        contentCor.classList.remove('hidden');
    });
}
document.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swipper-variant', {
        // Optional parameters
        slidesPerView: 8,
        loop: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },

        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 4,
            },
            // when window width is >= 700px
            700: {
              slidesPerView: 6,
            },

            1100: {
                slidesPerView: 8,
            }
          }
    });

    
});
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('entrouuuu')
    const swiper = new Swiper('.swipper-variant-cor', {
        // Optional parameters
        slidesPerView: 4,
        loop: true,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
        el: '.swiper-scrollbar',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
            },
            // when window width is >= 700px
            700: {
              slidesPerView: 4,
            },

            1100: {
                slidesPerView: 6,
            }
          }
        
    });
});
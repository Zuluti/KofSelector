

// Functions para interação de imagem e texto
const character = [
    
    {
        nome: 'Iori',
        img: 'img/kof-char/iori.gif',
        text: 'Iori é o último descendente do clã Yagami, uma linhagem que se tornou condenada a viver por um curto período de tempo, por causa do sangue de Orochi que circula em suas veias',
    } ,

    {
        nome: 'K',
        img: 'img/kof-char/kdash.gif',
        text: 'K era uma criança normal, que vivia feliz com sua irmã, Seirah. Um dia, eles foram capturados pela NESTS, um sindicato do crime que focava em medicamentos, genética, robótica e biotecnologia.',
    } ,
    
    {
        nome: 'Terry',
        img: 'img/kof-char/terry.gif',
        text: 'Terry e seu irmão Andy cresceram como órfãos e se criaram nas ruas. Mais tarde, eles são adotados por Jeff Bogard e vivem em Southtown por vários anos. Durante esse tempo, Jeff Bogard ensina aos irmãos muitas coisas sobre luta, já que ele próprio era um lutador forte.',
    } ,

    {
        nome: 'Kula',
        img: 'img/kof-char/kula.gif',
        text: 'Kula é um ser criado com o codinome Anti-K` pela NESTS para exterminar o traidor do cartel, K`. Ela possui o mesmo design de K`, e suas roupas são quase idênticas às de K com DNA alterado para usar poderes de gelo.',
    } ,

    {
        nome: 'Benimaru',
        img: 'img/kof-char/benimaru.gif',
        text: 'Benimaru é filho de uma família multimilionária. Ele é um modelo profissional de meio período e um lutador profissional muito confiante em suas habilidades. Seu estilo de luta é baseado em tiroteios e ele pode usar eletricidade em muitos de seus ataques.',
    } ,

    {
        nome: 'Mai',
        img: 'img/kof-char/mai.gif',
        text: 'Mai Shiranui é neta de Hanzo Shiranui, um mestre de ninjitsu e Koppo-ken. Mai aprendeu os segredos do Ninjitsu com seu pai e com o velho amigo de seu avô, Jubei Yamada ',
    } ,

]
//Renderizar imagem e historia do personagem
function renderingCharImage() {
    const charImage = document.querySelector('.info-char').innerHTML = `
        <div class="char-image">

                    <img id="image-char" src=${character[0].img} alt="">
    
                </div><!--char-image-->

        <div class="char-status line">
    
                    <h1 id="char">${character[0].nome}</h1>
    
                    <p class="char-text">${character[0].text}</p>
    
    
                </div><!--char-status-->
    `
}

renderingCharImage();
//

//Renderizar buttons dos personagens
    function buttonsRendering(){
        const charImage = document.querySelector('.select-character').innerHTML += `
            
        <div class="characters line">
                    <button id="${character[0].nome}" onclick="${character[0].nome}()" class="char">
                        <img class="Iori" src="${character[0].img}" alt="iori-image">
                    </button>
        
                    <button id="${character[2].nome}" onclick="${character[2].nome}()" class="char">
                        
                        <img class="terry" src="${character[2].img}" alt="iori-image">
    
                    </button>
        
                    <button id="${character[3].nome}" onclick="${character[3].nome}()" class="char">
    
                        <img class="${character[3].nome}" src="${character[3].img}" alt="kula-image">
    
                    </button>
    
                    <button id="${character[4].nome}" onclick="${character[4].nome}()" class="char">
    
                        <img class="${character[4].nome}" src="${character[4].img}" alt="iori-image">
    
                    </button>
    
                    <button id="mai" onclick="${character[5].nome}()" class="char">
    
                        <img class="mai" src="${character[5].img}" alt="iori-image">
    
                    </button>
                    <button id="kdash" onclick="${character[1].nome}()" class="char">
    
                        <img class="kdash" src="${character[1].img}" alt="iori-image">
                        
                    </button>
                </div><!--characters-->
        `
    }

    buttonsRendering();
//

function Iori(){
   let charIori =  document.querySelector('.info-char').innerHTML = `
    <div class="char-image">

        <img id="image-char" src="${character[0].img}" alt="">

    </div>

    <div class="char-status line">
    
                    <h1 id="char">${character[0].nome}</h1>
    
                    <p class="char-text">${character[0].text}</p>
    `
}

function Terry(){
    document.querySelector('.info-char').innerHTML = `
    <div class="char-image">

        <img id="image-char" src="${character[2].img}" alt="">

    </div>

    <div class="char-status line">
    
                    <h1 id="char">${character[2].nome}</h1>
    
                    <p class="char-text">${character[2].text}</p>
    `
}

function Kula(){
    document.querySelector('.info-char').innerHTML = `
    <div class="char-image">

        <img id="image-char" src="${character[3].img}" alt="">

    </div>

    <div class="char-status line">
    
                    <h1 id="char">${character[3].nome}</h1>
    
                    <p class="char-text">${character[3].text}</p>
    `
}

function Benimaru(){
    document.querySelector('.info-char').innerHTML = `
    <div class="char-image">

        <img id="image-char" src="${character[4].img}" alt="">

    </div>

    <div class="char-status line">
    
                    <h1 id="char">${character[4].nome}</h1>
    
                    <p class="char-text">${character[4].text}</p>
    `
}

function Mai(){
    document.querySelector('.info-char').innerHTML = `
    <div class="char-image">

        <img id="image-char" src="${character[5].img}" alt="">

    </div>

    <div class="char-status line">
    
                    <h1 id="char">${character[5].nome}</h1>
    
                    <p class="char-text">${character[5].text}</p>
    `
}

function K(){
    document.querySelector('.info-char').innerHTML = `
    <div class="char-image">

        <img id="image-char" src="${character[1].img}" alt="">

    </div>

    <div class="char-status line">
    
                    <h1 id="char">${character[1].nome}</h1>
    
                    <p class="char-text">${character[1].text}</p>
    `
}






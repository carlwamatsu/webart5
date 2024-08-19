document.addEventListener('mousemove', function(event) {
    let container = document.getElementById('container');

    // Array de GIFs com os caminhos que você forneceu
    const gifs = [
        'C:\\Users\\carlo\\Desktop\\cyberfloresta site\\Agave.gif',
        'C:\\Users\\carlo\\Desktop\\cyberfloresta site\\Big_Fern.gif',
        'C:\\Users\\carlo\\Desktop\\cyberfloresta site\\Blackened_Flower.gif'
    ];
    let gifIndex = Math.floor(Math.random() * gifs.length); // Seleciona um GIF aleatório

    // Cria um novo elemento de imagem
    let img = document.createElement('img');
    img.src = gifs[gifIndex]; // Atribui o GIF selecionado
    img.classList.add('plant');

    // Define a posição da imagem baseada na posição do mouse
    img.style.left = event.pageX + 'px';
    img.style.top = event.pageY + 'px';

    // Adiciona a imagem ao container
    container.appendChild(img);

    // As imagens permanecem visíveis, não são removidas
});
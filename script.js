document.addEventListener('DOMContentLoaded', () => {


    const produtos = [
        {nome: 'Camiseta Oficial Furia | Adidas Preta', imagem:'https://furiagg.fbitsstatic.net/img/p/camiseta-oficial-furia-adidas-preta-150265/337491-1.jpg?w=1280&h=1280&v=202503281009', preco: 359},
        {nome: "Camiseta Furia | Adidas Preta", imagem:"https://furiagg.fbitsstatic.net/img/p/camiseta-furia-adidas-preta-150263/337479-1.jpg?w=1280&h=1280&v=202503281012", preco: 299},
        {nome: "Camiseta Furia Oficial '24 Preta", imagem:"https://furiagg.fbitsstatic.net/img/p/camiseta-furia-oficial-24-preta-150177/336897-7.jpg?w=1280&h=1280&v=202502121640",preco: 259},
        {nome: "Camiseta Furia Classic Preta",imagem:"https://furiagg.fbitsstatic.net/img/p/camiseta-furia-classic-preta-150183/336942-1.jpg?w=1280&h=1280&v=no-value",preco: 139},
        ];

        const produtosShop = document.querySelector(".cardprodutos")

        produtos.forEach (produtosLista => {
            const produtosCard = document.createElement('div')
            produtosCard.classList.add('produto-card')

            produtosCard.innerHTML = `

            <a href="">

                <img src="${produtosLista.imagem}" alt="${produtosLista.nome}">

                <div class = "nomepreco">

                <p>${produtosLista.nome}</p>
                <span>R$ ${produtosLista.preco},00</span>

                </div>
                
                </a>
            `

            produtosShop.appendChild(produtosCard)

        })
});


document.addEventListener('DOMContentLoaded', () => {


  const parceiros = [
      {nome: 'adidas', imagem:'https://furiagg.fbitsstatic.net/media/adidas.jpg?v=202503281052'},
      {nome: "cruzeiroDoSul", imagem:"https://furiagg.fbitsstatic.net/media/cs.jpg?v=202409271244"},
      {nome: "lenovo", imagem:"https://furiagg.fbitsstatic.net/media/lenovo.jpg?v=202409271244"},
      {nome: "pokerstars",imagem:"https://furiagg.fbitsstatic.net/media/ps.jpg?v=202409271244"},
      {nome: "redbull",imagem:"https://furiagg.fbitsstatic.net/media/redbull.jpg?v=202409271244"},
      {nome: "hellmans",imagem:"https://furiagg.fbitsstatic.net/media/hellmanns.jpg?v=202409271244"},
      ];

      const parceirosFuria = document.querySelector(".parceiros-conteiner")

      parceiros.forEach (parceirosLista => {
          const parceirosCard = document.createElement('div')
          parceirosCard.classList.add('parceiros-card')

          parceirosCard.innerHTML = `

  

              <img src="${parceirosLista.imagem}" alt="${parceirosLista.nome}">

              
          `

          parceirosFuria.appendChild(parceirosCard)

      })
});



/* Para o blur dos cards da lineup */ 

const lineupContainer = document.querySelector('.lineup-conteiner');
const jogadores = document.querySelectorAll('.lineup-jogador');

jogadores.forEach(jogador => {
  jogador.addEventListener('mouseenter', () => {
    lineupContainer.classList.add('focando');
    jogador.classList.add('ativo');
  });

  jogador.addEventListener('mouseleave', () => {
    lineupContainer.classList.remove('focando');
    jogador.classList.remove('ativo');
  });
});
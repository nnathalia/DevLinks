function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag image
  const image = document.querySelector("#profile img")

  //substituir a imagem
  if(html.classList.contains('light')){
    //se tiver o light mode adicionar a imagem light
    image.setAttribute('src', './assets/avatar-light.png')
    image.setAttribute('alt', 'Foto de perfil com óculos')
  }
  else{
    //se tiver o dark mode adicionar a imagem normal
    image.setAttribute('src', './assets/avatar.png')
    image.setAttribute('alt', 'Foto de perfil sem óculos')
  }

}
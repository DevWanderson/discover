function toogleMode(){
    const html = document.documentElement
    html.classList.toggle('light')

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else {
    //     html.classList.add('light')
    // }
    
    //pegar a tag img
    const image = document.querySelector("#profile img")

    if(html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light
        image.setAttribute('src', './assets/puppy.jpg')
    } else {
        //se tiver sem light mode, manter a imagem
        image.setAttribute('src', 'https://www.google.com/url?sa=i&url=http%3A%2F%2Ft0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTZCSmCzmIPm0up8wmW566cK5w3sSTUChT5UnaU3VnFxrHwoRNSnks0xUBmj2r2oeJk&psig=AOvVaw2m6Gr5LD8TC6ebLNspqswI&ust=1711648990311000&source=images&cd=vfe&opi=89978449&ved=0CAoQjRxqFwoTCLD19MGDlYUDFQAAAAAdAAAAABAE')
    }
}
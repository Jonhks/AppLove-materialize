const imgClick = document.getElementsByClassName('img-click')
for(let i = 0; i < imgClick.length; i++){
  imgClick[i].addEventListener('click', ()=>{
    let clikeada = imgClick[i];
    console.log(clikeada)
$('.modal').modal();

  })
}

$('.sidenav').sidenav();
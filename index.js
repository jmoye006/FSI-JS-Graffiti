
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign = 'left'

let dogImages = document.queryselectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.querySelector('.dog-name')
dogNames.style.textAlign = 'left'

let pageFooters = document.queryselector('.footer')
pageFooters.style.color = 'orange'


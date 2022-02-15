
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign = 'left'

let dogImages = document.queryselectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

let dogNames = document.queryselectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}

let pageFooter = document.queryselector('.footer')
pageFooters.style.color = 'orange'


const imageEle=document.getElementById("skill-image")
       

let images=[
    {
        path:'./resources/hp certi_page-0001.jpg',
    caption:'Sunset In Maharashtra'
    },
    {
        path:'./resources/JavaFullStack.jpg',
        caption:'Sunset in UP'
    },
    {
        path:'./resources/UdemyCert.jpg',
        caption:'Sunset In Mumbai'
    }
    
]
let i=0;
window.setInterval(()=>{
    const ImageObject=images[i];
    imageEle.src=ImageObject.path;
    imageEle.alt=imageEle.caption;
    i++;
    if(i==images.length)
    i=0;
    
},3000);




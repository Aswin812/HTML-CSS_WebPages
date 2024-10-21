var img=document.querySelector('.image');
var images=["Images/a.jpg","Images/b.jpg", "Images/c.jpg","Images/d.jpg", "Images/e.jpg","Images/f.jpg","Images/g.jpg","Images/h.jpg","Images/i.jpg","Images/j.png"];
var count=0;


function prev() {
    img.src=images[count-1];
    count--;

    if(count<=0){
        count=images.length;
    }
}

function next(){
    
    img.src=images[count+1];
    count++;
    if(count>=images.length-1){
        count=-1;
    }
}

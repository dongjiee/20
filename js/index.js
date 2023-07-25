window.onload=function()
{
    var book=document.getElementById('book')
    var page=document.getElementsByClassName('page')
    var img=document.getElementsByClassName('img') 

    var index=1

    for(var i=0;i<img.length;i++)
    {
        if(document.body.clientWidth>document.body.clientHeight)
        {
            img[i].style.width=document.body.clientHeight*0.45+'px'
        }
        else
        {
            img[i].style.width=document.body.clientWidth*0.8+'px'
        }
        
    }
    page[1].onclick=function()
    {
        if(index==2)
        {
            page[1].classList.remove('next')
            page[1].classList.add('pre')
        }
        if(index==1)
        {
            page[1].classList.add('next')
            index=2
        }
    }
}
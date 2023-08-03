var book=document.getElementById('book')
var page=document.getElementsByClassName('page')
var back=document.getElementsByClassName('back')
var song=document.getElementById('song')

var isClick=false
var isPlay=false

init()
window.onresize=function(){init()}

function init()
{
    let h=document.documentElement.scrollHeight
    let w=document.documentElement.scrollWidth
    if(h*0.45+50>w)
    {
        book.style.width=h*0.45-50+'px'
        book.style.height=(h*0.45-50)*2+'px'
    }
    else
    {
        book.style.width=h*0.45+'px'
        book.style.height=(h*0.45)*2+'px'
    }
}

for(var i=0;i<page.length;i++)
{	
    page[i].index=i;

    page[i].onclick=function()
    {	
        if(isClick==false)
        {
            if(this.index+1==page.length&&isPlay==false)
            {   
                song.load()
                setTimeout(function(){song.play();isPlay=true},2000)
            }

            flip_page(this.index,'next')
        }
    }
}

for(var j=0;j<back.length;j++)
{
    back[j].index=j;

    back[j].onclick=function()
    {
        if(isClick==false)
        {
            if(this.index+1==page.length&&isPlay==true)
            {
                setTimeout(function(){song.pause();song.currentTime=0;isPlay=false},1500)
            }

            flip_page(this.index,'pre')
        }
        
    }
}

function flip_page(index,state)
{
    switch(state)
    {
        case 'next':
            page[index].classList.remove('pre'+index)
            back[index].classList.remove('pre'+(index-1))
            page[index].classList.add('next'+index)
            back[index].classList.add('next'+(index-1))
            break
        case 'pre':
            back[index].classList.remove('next'+(index-1))
            page[index].classList.remove('next'+index)
            back[index].classList.add('pre'+(index-1))
            page[index].classList.add('pre'+index)
            break
    }
    
    setTimeout(function(){isClick=false},2000);
    isClick=true
}

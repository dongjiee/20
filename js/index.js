var book=document.getElementById('book')
var page=document.getElementsByClassName('page')
var back=document.getElementsByClassName('back')
var song=document.getElementById('song')

var isClick=false
var isLoad=false

// init()
// window.onresize=function(){init()}

// function init()
// {
//     var h=document.documentElement.scrollHeight
//     var w=document.documentElement.scrollWidth
//     if(h*0.45+50>w)
//     {
//         book.setAttribute('style','width:'+Math.round(h*0.45-50)+'px;height:'+Math.round((h*0.45-50)*2)+'px')
//     }
//     else
//     {
//         book.setAttribute('style','width:'+Math.round(h*0.45)+'px;height:'+Math.round((h*0.45)*2)+'px')
//     }
// }

page[page.length-1].onclick=function()
{
    if(isLoad==false)
    {
        song.load()
        isLoad=true
    }
    setTimeout(function(){song.play()},2000)
    flip_page(page.length-1,'next')
}

back[page.length-1].onclick=function()
{
    if(song.paused==false)
    {
        setTimeout(function(){song.pause();song.currentTime=0},1500)
    }
    flip_page(page.length-1,'pre')
}

for(var i=0;i<page.length-1;i++)
{	
    page[i].index=i;

    page[i].onclick=function()
    {	
        flip_page(this.index,'next')
    }
}

for(var j=0;j<back.length-1;j++)
{
    back[j].index=j;

    back[j].onclick=function()
    {
        flip_page(this.index,'pre')
    }
}

function flip_page(index,state)
{
    if(isClick==false)
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
}

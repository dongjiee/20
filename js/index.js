var book=document.getElementById('book')
var page=document.getElementsByClassName('page')
var back=document.getElementsByClassName('back')
var song=document.getElementById('song')

var isClick=false
var isPlay=false

function init()
{
    if(document.documentElement.scrollHeight*0.45+50>document.documentElement.scrollWidth)
    {
        book.style.width=document.documentElement.scrollHeight*0.45-50+'px'
        book.style.height=(document.documentElement.scrollHeight*0.45-50)*2+'px'
    }
    else
    {
        book.style.width=document.documentElement.scrollHeight*0.45+'px'
        book.style.height=(document.documentElement.scrollHeight*0.45)*2+'px'
    }
}
init()

for(var i=0;i<page.length;i++)
{	
    page[i].index=i;

    page[i].onclick=function()
    {	
        if(isClick==false)
        {
            if(this.index+1==page.length&&isPlay==false)
            {
                playSong()
            }

            flip_page(this.index,'next')
            
            wait()
            isClick=true
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
                pauseSong()
            }

            flip_page(this.index,'pre')

            wait()
            isClick=true
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
}

function wait()
{
    setTimeout(function(){isClick=false},2000);
}

function playSong()
{
    setTimeout(function(){song.load();song.play();isPlay=false},2000);
}
function pauseSong()
{
    setTimeout(function(){song.pause();song.currentTime=0;isPlay=true},1500);
}

window.onload=function()
{
    var box=document.getElementById('box')
    var page=document.getElementsByClassName('page')
    var back=document.getElementsByClassName('back')
    var song=new Audio('asset/birthday.mp3')

    var isClick=false
    var played=false

    init()

    function init()
    {
        if(document.body.clientHeight*0.45+50>document.body.clientWidth)
        {
            box.style.width=document.body.clientHeight*0.45-50+'px'
            box.style.height=document.body.clientHeight*0.45-50+'px'
        }
        else
        {
            box.style.width=document.body.clientHeight*0.45+'px'
            box.style.height=document.body.clientHeight*0.45+'px'
        }
    }

    for(var i=0;i<page.length;i++)
	{	
		page[i].index=i;

		page[i].onclick=function()
		{	
            if(!isClick)
            {
                if(!played)
                {
                    playSong()
                    played=true
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
            if(!isClick)
            {
                if(played)
                {
                    pauseSong()
                    played=false
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
                page[index].classList.remove(String('pre'+index))
                back[index].classList.remove(String('pre'+index))
                page[index].classList.add(String('next'+index))
                back[index].classList.add(String('next'+index))
                break
            case 'pre':
                back[index].classList.remove(String('next'+index))
                page[index].classList.remove(String('next'+index))
                back[index].classList.add(String('pre'+index))
                page[index].classList.add(String('pre'+index))
                break
        }
    }

    function wait()
    {
        setTimeout(function(){isClick=false},2000);
    }

    function playSong()
    {
        setTimeout(function(){song.play()},2000);
    }
    function pauseSong()
    {
        setTimeout(function(){song.pause(),song.currentTime=0},1500);
    }
}
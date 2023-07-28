window.onload=function()
{
    var box=document.getElementById('box')
    var page=document.getElementsByClassName('page')
    var back=document.getElementsByClassName('back')
    var audio=new Audio('asset/birthday.m4a')

    var click=false
    var s=false

    init()

    function init()
    {
        if(document.body.clientHeight*0.45+50>document.body.clientWidth)
        {
            box.style.width=document.body.clientHeight*0.45-50+'px'
        }
        else
        {
            box.style.width=document.body.clientHeight*0.45+'px'
        }
    }

    for(var i=0;i<page.length;i++)
	{	
		page[i].index=i;

		page[i].onclick=function()
		{	
            if(!click)
            {
                flip_page(this.index,'next')
                
                if(!s)
                {
                    song()
                    s=true
                }

                clear()
                click=true
            }
		}
	}

    for(var i=0;i<back.length;i++)
    {
        back[i].index=i;

		back[i].onclick=function()
        {
            if(!click)
            {
                flip_page(this.index,'pre')

                clear()
                click=true
            }
            
        }
    }

    function flip_page(index,state)
    {
        switch(state)
        {
            case 'next':
                page[index].classList.remove('pre')
                page[index].classList.add('next')
                back[index].classList.remove('pre')
                back[index].classList.add('next')
                setTimeout(function(){page[index].style.zIndex=-(index+2),back[index].style.zIndex=-(index+1)},1000);
            break
            case 'pre':
                page[index].classList.remove('next')
                page[index].classList.add('pre')
                back[index].classList.remove('next')
                back[index].classList.add('pre')
                setTimeout(function(){page[index].style.zIndex=index+1,back[index].style.zIndex=index},1000);
            break
        }
    }

    function clear()
    {
        setTimeout(function(){click=false},2000);
    }

    function song()
    {
        setTimeout(function(){audio.play()},800);
    }
}
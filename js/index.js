window.onload=function()
{
    var box=document.getElementById('box')
    var page=document.getElementsByClassName('page')
    var back=document.getElementsByClassName('back')
    var audio=new Audio('asset/birthday.mp3')

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
                click=true
                clear()

                if(!s)
                {
                    song()
                    s=true
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
            if(!click)
            {
                click=true
                clear()
                
                flip_page(this.index,'pre')
            }
            
        }
    }

    function flip_page(index,state)
    {
        switch(state)
        {
            case 'next':
                // setTimeout(function(){page[index].style.visibility='hidden'},1000)
                page[index].classList.remove('pre')
                back[index].classList.remove('pre')
                page[index].classList.add('next')
                back[index].classList.add('next')
                // setTimeout(function(){page[index].style.zIndex=-(index+2),back[index].style.zIndex=-(index+1)},1000)
                setTimeout(function(){page[index].style.zIndex=10-index,back[index].style.zIndex=10-index+1},1000);
                
            break
            case 'pre':
                // setTimeout(function(){page[index].style.visibility='visible'},1300)
                back[index].classList.remove('next')
                page[index].classList.remove('next')
                back[index].classList.add('pre')
                page[index].classList.add('pre')
                
                setTimeout(function(){page[index].style.zIndex=10+index+1,back[index].style.zIndex=10+index},1000)
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
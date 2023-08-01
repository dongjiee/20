window.onload=function()
{
    var box=document.getElementById('box')
    var page=document.getElementsByClassName('page')
    var back=document.getElementsByClassName('back')
    var audio=new Audio('asset/birthday.mp3')

    var cur=page.length
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
            if(click==false)
            {
                num=this.index;
                
                if(cur>=num+1)
                {
                    flip_page(num,'next')
                    // back_page(num)

                    cur=num

                    setTimeout(function(){page[num].style.zIndex=-(num+1)},1000);
                    
                    if(s==false)
                    {
                        song()
                        s=true
                    }
                }
                else
                {
                    flip_page(num,'pre')

                    cur=num+1
                    
                    setTimeout(function(){page[num].style.zIndex=num+1},1000);
                }

                clear()
                click=true
            }
		}
	}

    function flip_page(num,state)
    {
        switch(state)
        {
            case 'next':
                page[num].classList.remove('pre')
                page[num].classList.add('next')
                back[num].classList.remove('pre')
                back[num].classList.add('next')
            break
            case 'pre':
                page[num].classList.remove('next')
                page[num].classList.add('pre')
                back[num].classList.remove('next')
                back[num].classList.add('pre')
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
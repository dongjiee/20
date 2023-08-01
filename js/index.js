window.onload=function()
{
    var page=document.getElementsByClassName('page')
    var box=document.getElementById('box')
    var audio=new Audio('asset/birthday.m4a')

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
                    page[num].classList.remove('pre')
                    page[num].classList.add('next')
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
                    page[num].classList.remove('next')
                    page[num].classList.add('pre')
                    cur=num+1
                    
                    setTimeout(function(){page[num].style.zIndex=num+1},1000);
                }

                clear()
                click=true
            }
		}
	}

    function clear()
    {
        setTimeout(function(){click=false},2000);
    }

    function song()
    {
        setTimeout(function(){audio.load();audio.play()},2000);
    }
}
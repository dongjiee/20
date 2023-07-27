window.onload=function()
{
    var page=document.getElementsByClassName('page')
    var box=document.getElementById('box')
    var audio=document.getElementById('audio')

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
            num=this.index;

            if(click==false)
            {
                click=true

                if(cur>=num+1)
                {
                    page[num].classList.remove('pre')
                    page[num].classList.add('next')
                    cur=num

                    setTimeout(function(){page[num].style.zIndex=-(num+1)},1000);
                    // setTimeout(function(){console.log(page[num].style.zIndex)},1100);
                    
                    if(s==false)
                    {
                        song()
                    }
                }
                else
                {
                    page[num].classList.remove('next')
                    page[num].classList.add('pre')
                    cur=num+1
                    
                    setTimeout(function(){page[num].style.zIndex=num+1},1000);
                    // setTimeout(function(){console.log(page[num].style.zIndex)},1100);
                }

                clear()
                
            }
		}
	}

    function clear()
    {
        setTimeout(function(){click=false},2300);
    }

    function song()
    {
        s=true
        setTimeout(function(){audio.play()},1000);
    }
}
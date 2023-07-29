window.onload=function()
{
    var box=document.getElementById('box')
    var img=document.getElementsByClassName('img')
    var audio=new Audio('asset/birthday.mp3')

    var cur=img.length
    var click=false
    var s=false

    init()

    function init()
    {
        if(document.body.clientHeight*0.45+50>document.body.clientWidth)
        {
            box.style.width=document.body.clientHeight*0.45-50+'px'
            box.style.height=box.style.width
        }
        else
        {
            box.style.width=document.body.clientHeight*0.45+'px'
            box.style.height=box.style.width
        }
    }

    for(var i=0;i<img.length;i++)
	{	
		img[i].index=i;

		img[i].onclick=function()
		{	
            if(!click)
            {
                if(!s)
                {
                    song()
                    s=true
                }

                click=true
                clear()

                num=this.index
                
                if(cur>=num+1)
                {
                    img[num].classList.remove('pre')
                    img[num].classList.add('next')
                    cur=num

                    setTimeout(function(){img[num].style.zIndex=-(num+1)},1000);
                    
                }
                else
                {
                    img[num].classList.remove('next')
                    img[num].classList.add('pre')
                    cur=num+1
                    
                    setTimeout(function(){img[num].style.zIndex=num+1},1000);
                }
            }
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
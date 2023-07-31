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
            box.style.height=document.body.clientHeight*0.45-50+'px'
        }
        else
        {
            box.style.width=document.body.clientHeight*0.45+'px'
            box.style.height=document.body.clientHeight*0.45+'px'
        }
    }

    for(var i=0;i<img.length;i++)
	{	
		img[i].index=i;

		img[i].onclick=function()
		{	
            if(click==false)
            {
                num=this.index;

                if(cur>=num+1)
                {
                    img[num].classList.remove('pre'+num)
                    img[num].classList.add('next'+num)
                    cur=num

                    // page[num].style.zIndex=10-num
                    // setTimeout(function(){page[num].style.zIndex=10-num},1000);
                    
                    if(s==false)
                    {
                        song()
                        s=true
                    }
                }
                else
                {
                    img[num].classList.remove('next'+num)
                    img[num].classList.add('pre'+num)
                    cur=num+1
                    // setTimeout(function(){page[num].style.zIndex=num+1},1000);
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
        setTimeout(function(){audio.play()},800);
    }
}
window.onload=function()
{
    var box=document.getElementById("box")
    var img=document.getElementsByClassName("img")
    var song=new Audio("asset/birthday.m4a")

    var cur=img.length
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

    for(var i=0;i<img.length;i++)
	{	
		img[i].index=i;

		img[i].onclick=function()
		{	
            if(isClick==false)
            {
                num=this.index;

                if(cur>=num+1)
                {
                    img[num].classList.remove('pre'+String(num))
                    img[num].classList.add('next'+String(num))
                    cur=num

                    // page[num].style.zIndex=10-num
                    // setTimeout(function(){page[num].style.zIndex=10-num},1000);
                    
                    if(played==false)
                    {
                        playSong()
                        played=true
                    }
                }
                else
                {
                    img[num].classList.remove('next'+String(num))
                    img[num].classList.add('pre'+String(num))
                    cur=num+1
                    // setTimeout(function(){page[num].style.zIndex=num+1},1000);
                }

                await()
                isClick=true
            }
		}
	}

    function await()
    {
        setTimeout(function(){isClick=false},2000);
    }

    function playSong()
    {
        setTimeout(function(){song.play()},1000);
    }
}
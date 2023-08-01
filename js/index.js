window.onload=function()
{
    var book=document.getElementById('book')
    var page=document.getElementsByClassName('page')
    var song=new Audio('asset/birthday.mp3')

    var cur=page.length
    var isClick=false
    var played=false

    init()

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

    for(var i=0;i<page.length;i++)
	{	
		page[i].index=i;

		page[i].onclick=function()
		{	
            if(isClick==false)
            {
                if(played==false)
                {
                    playSong()
                    played=true
                }

                num=this.index;

                if(cur>=num+1)
                {
                    page[num].classList.remove('pre'+num)
                    page[num].classList.add('next'+num)
                    cur=num

                    setTimeout(function(){page[num].src='asset/b4.png'},1000)
                    
                }
                else
                {
                    page[num].classList.remove('next'+num)
                    page[num].classList.add('pre'+num)
                    cur=num+1
                    
                    setTimeout(function(){page[num].src='asset/'+(page.length-num)+'.png'},1000)
                }

                wait()
                isClick=true
            }
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
        setTimeout(function(){song.pause();song.currentTime=0},1500);
    }
}
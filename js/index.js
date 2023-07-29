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
            box.style.height=box.style.width
        }
        else
        {
            box.style.width=document.body.clientHeight*0.45+'px'
            box.style.height=box.style.width
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
                index=this.index

                // flip_page(this.index,1)
                page[index].classList.remove('pre')
                back[index].classList.remove('pre')
                page[index].classList.add('next')
                back[index].classList.add('next')
                setTimeout(function(){back[index].style.zIndex=10-index+1;page[index].style.zIndex=10-index},1000)
                // setTimeout(back[index].style.zIndex=10-index+1,page[index].style.zIndex=10-index,1000)
                
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

                index=this.index

                back[index].classList.remove('next')
                page[index].classList.remove('next')
                back[index].classList.add('pre')
                page[index].classList.add('pre')

                setTimeout(function(){back[index].style.zIndex=10+index;page[index].style.zIndex=10+index+1},1000)
                // flip_page(this.index,2)
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
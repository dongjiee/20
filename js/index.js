window.onload=function()
{
    var box=document.getElementById('box')
    var img=document.getElementsByClassName('img')
    var back=document.getElementsByClassName('back')
    // var audio=new Audio('asset/birthday.mp3')

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
                click=true
                clear()

                // if(!s)
                // {
                //     song()
                //     s=true
                // }
                index=this.index

                // flip_page(this.index,1)
                img[index].classList.remove('pre')
                back[index].classList.remove('pre')
                img[index].classList.add('next')
                back[index].classList.add('next')

                // setTimeout(function(){back[index].style.zIndex=10-index+1;img[index].style.zIndex=10-index},1000)
                setTimeout(function(){back[index].style.zIndex=-index},1000)
                
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

                // flip_page(this.index,2)

                back[index].classList.remove('next')
                img[index].classList.remove('next')
                back[index].classList.add('pre')
                img[index].classList.add('pre')

                // setTimeout(function(){back[index].style.zIndex=10+index;img[index].style.zIndex=10+index+1},1000)
                // setTimeout(function(){back[index].style.zIndex=-(index+1)},1000)
            }
            
        }
    }

    function clear()
    {
        setTimeout(function(){click=false},2000);
    }

    // function song()
    // {
    //     setTimeout(function(){audio.play()},800);
    // }
}
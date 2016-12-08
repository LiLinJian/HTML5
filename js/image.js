
var ImageArray=new Array(4);
ImageArray[0]="image/001.jpg";
ImageArray[1]="image/002.jpg";
ImageArray[2]="image/003.jpg";
ImageArray[3]="image/004.jpg";
var i=0;
function ImageMove()
{
	if(i==3)
    {
      i=0;
    }
	else
		i++;
	image1.src=ImageArray[i];
    setTimeout("ImageMove()",2000);
}
	
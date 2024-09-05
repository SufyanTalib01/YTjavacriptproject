var index = 0;
let Colors = ["red" , "yellow" , "blue" , "purple" , "pink"];

function ChangeColor(){
    document.getElementsByTagName("body")[0].style.background = Colors[index++];

    if(index >= 5)
        {
            index = 0
        }
}
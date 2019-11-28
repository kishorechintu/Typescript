let button:object;
button={
    width:100,
    height:20,
    value:"Default",
    close:function()
    {
        return "close the window";
    }   ,
    open :function()
    {
        return "Open the window";
    }
}
button.value="close";
console.log("Button TExt="+button.value+"\n"+"close method="+button.close());

button.value="open";
console.log("Button Text="+button.value+"\n"+"Open Method="+"\n"+button.open());
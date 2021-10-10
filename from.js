populate(this.id,'slct2');
function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if(s1.value == "komputer")
    {
        var optionArray = ['si|Si', 'informatika|Informatika'];
    }
    else if(s1.value == "keperawatan")
        var optionArray = ['keperawatan|Keperawatan','profesi ners|Profesi ners'];

    for(var option in optionArray)
    {
        var pair = optionArray[oprion].split("|");
        var newoption = document.createElement("option");

        newoption.value = pair[0];
        newoption.innerHTML=pair[1];
        s2.option.add(newoption);
    }
}
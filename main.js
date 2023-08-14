var input = prompt("nhap C,R,U,D")
if(input == "C"){
    var add = prompt("moi nhap mon")
    var k = JSON.parse(localStorage.getItem("menu")) || []
    k.push(add)
    localStorage.setItem("menu",JSON.stringify(k))
}
if(input == "R"){
    var newmenu =  JSON.parse(localStorage.getItem("menu"))
    alert(newmenu)
}
if(input == "U"){
    var nmenu = JSON.parse(localStorage.getItem("menu"))
    var update = prompt("moi nhap ten mon update")
    var index = nmenu.indexOf(update)
    var newname = prompt("nhap ten moi")
    nmenu[index] = newname;
    localStorage.setItem("menu",JSON.stringify(nmenu))
}
if(input == "D"){
    var del = prompt("nhap ten muon xoa")
    var delmenu = JSON.parse(localStorage.getItem("menu"))
    var index2 = delmenu.indexOf(del)
    delmenu.splice(index2,1);
    localStorage.setItem("menu",JSON.stringify(delmenu))
}

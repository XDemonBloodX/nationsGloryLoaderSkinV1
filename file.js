function headSkin() {
    pseudo = document.getElementById("inputSkin").value;
    inHtml = document.getElementById("skin");
    console.log(pseudo, inHtml)
    getSkin1 = "https://skins.nationsglory.fr/face/" + pseudo + "/3d/15";
    getSkin2 = "https://skins.nationsglory.fr/face/" + pseudo;


    img1 = '<center><img src="' + getSkin1 + '" alt="' + pseudo + '">';
    img2 = '<img src="' + getSkin2 + '" alt="' + pseudo + '"></center>';
    inHtml.innerHTML = img1 + img2;
}

function bodySkin() {
    pseudo = document.getElementById("inputSkin").value;
    inHtml = document.getElementById("skin");
    console.log(pseudo, inHtml)
    getSkin = "https://skins.nationsglory.fr/body/" + pseudo;
    inHtml.innerHTML = '<center><img src="' + getSkin + '" alt="' + pseudo + '"></center>';
}

function skin() {
    pseudo = document.getElementById("inputSkin").value;
    inHtml = document.getElementById("skin");
    console.log(pseudo, inHtml)
    getSkin = "https://skins.nationsglory.fr/" + pseudo;
    inHtml.innerHTML = '<center><img src="' + getSkin + '" alt="' + pseudo + '"></center>';
}
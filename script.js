document.getElementById("ListeYillar").addEventListener("change",hesapla);

function hesapla(){
    
    let liste = document.getElementById("ListeYillar");

    let SeçilenYilFiyat = liste.options[liste.selectedIndex].value;
    
    let sonuc = 50/ SeçilenYilFiyat;

    document.getElementById("sonuc").innerHTML="Seçtiğiniz yılda 50TL İLE"+sonuc.toFixed(1)+"tl benzin alınabiliyor";
}
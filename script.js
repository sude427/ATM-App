let yeniSatir = "\r\n" ;
let bakiye = 1000;

let metin = "1-Bakiye Görüntüleme"+yeniSatir
+ "2-Para Çekme"+yeniSatir
+ "3-Para Yatırma"+yeniSatir
+ "4-Çıkış"+yeniSatir
+"Lütfen bir değer seçiniz";

let secim =prompt(metin);
switch(secim){
    case "1":
        alert("Bakiyeniz: " +bakiye);
    break;
    
    case "2":
        let cekilecekTutar = Number(prompt ("Çekmek istediğiniz tutarı giriniz"));
        if(cekilecekTutar<bakiye){
        //başarılıdır
        bakiye = bakiye-cekilecekTutar
        alert("Kalan bakiye : " +bakiye)
    }  else{
        alert("Bakiyenizden fazla para çekemezsiniz"+ yeniSatir
        + "Bakiyeniz : "+ bakiye + "  " + "Çekilecek Tutar :" + cekilecekTutar);
    }
    break;

    case "3":
        let yatirilacakTutar = Number(prompt( "Yatırılacak tutarı giriniz"));
        bakiye= bakiye+yatirilacakTutar;
        alert("Güncel Bakiye : " + bakiye);
    break;

    case "4":
        alert("Sistemden çıkış yapılmıştır");
    break;

    default:
        alert("1 ile 4 arasında bir sayı seçiniz");
} 
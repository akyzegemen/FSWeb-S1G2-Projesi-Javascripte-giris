/* Gorev 1: Isinalim Biraz :) */

/* TuM CEVAPLARINI BİR FUNCTION İcİNDE VERDİgİNİZ EMİN OL (GoREV 1D - GoREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ cALIsMAYACAKTIR. */

// Gorev 1a, 1b ve 1c puanlamaya dahil degildir

/*
Bu gorevleri yaparken, yazdigin kod'un dogru cikti verdigini kontrol etmek icin console.log'u kullanmani oneririz.
Bunun icin cevabi direk console'a logla veya cagirdigin fonksiyondan donen degeri console'a logla.  
ornegin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Gorev 1a - Ehliyet Yasi (puanlamaya dahil degildir)

Asagidakileri yap:   
   1. surucuYasi isimli bir degisken yaz ve bir sayi ata.
   2. Eger yas 18'den buyuk ise Console'da true, degilse false degeri yazdirin.

   İPUCU: fonksiyon olusturmaya gerek yok
*/

/*
Gorev 1b - Degerler (puanlamaya dahil degildir)

Asagidakileri yap:   
   1. 2 degisken tanimla ve bunlara degerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. degeri 2. deger ile karsilastiran bir kosul olusturun
   3. 2. adimdaki kosul dogru oldugunda 1. degeri degistirin
   4. 1. degeri Console'a yazdirin

   İPUCU: fonksiyon olusturmaya gerek yok
*/

/*
Gorev 1c - String bir degeri Number'a donusturun (puanlamaya dahil degildir)

Asagidakileri yap:   
   1. String tipinde ve degeri "1999" olan bir degisken olusturun
   2. Degeri "1999" olan bu String'i degeri 1999 olan bir integer'a donusturun
   3. Sonucu Console'a yazdirin

   İPUCU: Number metoduna bakabilirsin
*/

/*
Gorev 1d - carpma
 
Asagidakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 arguman alsin(a ve b olarak tanimlayabilirsin)
   2. a ve b'yi carpip, sonucu donsun
   3. console.log(carpma(7,4)) ile yazdigin fonsiyonu test edin. Console'da sonucu 28 olarak gormelisin.
*/

function carpma(sayi1, sayi2) {
  /*buraya kodunu yazabilirsin*/
  return sayi1 * sayi2;

}

/* Gorev 2 : Kopegin Yasi */

/*
Asagidakileri yap:
 1. Asagidaki kopeginYasi fonsiyonunu bir arguman alacak sekilde tanimla.
 2. Gelen degeri kullanarak kopegin yasini hesapla (insanlarda 1 yil kopeklerde 7 yila denk gelir)
 3. Hesaplanan kopegin yasini donun.
 */

function kopeginYasi(yas) {
  return 7*yas;

}

/* Gorev 3 */
/*
Asagidakileri oyun isimli fonksiyonu kullanarak yap.
1. 2 arguman alin: oyuncunun tercihini alan bir string deger: "Tas", "Kagit" veya "Makas" 
   ve bilgisayarinkini alan: "Tas", "Kagit" veya "Makas"
   Not: string degerlerin yazimina dikkat! İlk harf buyuk ve turkce karakterler kullanarak. Yoksa testi gecemez.
2. Asagidaki oyun kurallarina gore oyuncunun kazanip kazanamadigini veya berabere kalip kalmadigini donun - (uygulamanin olusturdugu cikti tam olarak asagidakinin aynisi olmali)
 - kazanma durumunda "Kazandin!" donmeli
 - kaybetme durumunda "Kaybettin!" donmeli
 - beraberlikte "Beraberlik" donmeli

OYUNUN KURALLARI: Makas Kagidi yener| Kagit Tasi yener | Tas Makas'i yener | veya beraberlik olur.
*/

function oyun(oyuncu, bilgisayar) {
  if(oyuncu === "Tas")
  {
    if(bilgisayar === "Tas")
    {
      console.log("Beraberlik");
    }
    else if(bilgisayar === "Kagit")
    {
      console.log("Kaybettin!");
    }
    else
    {
      console.log("Kazandin!");
    }
  }

  else if (oyuncu === "Kagit")
  {
    if(bilgisayar === "Tas")
    {
      console.log("Kazandin!");
    }
    else if(bilgisayar === "Kagit")
    {
      console.log("Beraberlik");
    }
    else
    {
      console.log("Kaybettin!");
    }
  }

  else
  {
    if(bilgisayar === "Tas")
      {
        console.log("Kaybettin!");
      }
      else if(bilgisayar === "Kagit")
      {
        console.log("Kazandin!");
      }
      else
      {
        console.log("Beraberlik");
      }
  }

}

// simdi Tas, Kagit, Makas oyununu bilgisayara karsi oynayalim!
/*
oncelikle asagidakileri yap:
1. Bilgisayarin secimini rastgele olusturacagim bir fonksiyon tanimla. orn: 
   function bilgisayarinSecimi() {
   
   }
2. Fonsiyonun icinde bilgisayarin secimi icin bir degisken tanimla
3. Math.random'i kullanarak bilgisayarin secimini olusturun (Math.random 0-1 arasinda bir deger verecek)
4. Bu rastgele degeri "Tas", "Kagit" veya "Makas"a donusturen bir kosul olusturun
5. Olusan degeri geri donun

simdi kendi sectigin bir secime karsi bilgisayarin rastgele olusturdugu secimi yukarida yazdigin oyun fonsiyonu ile oynayin ve sonucu console'a yazdirin.
orn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/
function bilgisayarinSecimi() 
{
  let num = Math.ceil(Math.random() * 3);
  if(num === 1)
  {
    return "Kagit";
  }
  else if(num === 2)
  {
    return "Tas";
  }
  return "Makas";

}
console.log(oyun("Makas",bilgisayarinSecimi()))
/* Gorev 4 : Metrik Donusturucu */

//Gorev 4a - Kilometreden Mil
/*
Asagdaki milDonusturucu fonksiyonunu asagidakileri kullanarak tamamla:
1. Kilometre degerini arguman olarak alin.
2. Aldigin bu degeri Mil'e donusturun
3. Mil degerini geri donun
*/

function milDonusturucu(km) {
  return km * (0.62137119);
}

//Gorev 4b - Santimetreden Feet
/*
Asagidakileri feetDonusturucu fonsiyonunu kullanarak yap:
1. Santimetre degerini arguman olarak alin.
2. Aldigin bu degeri feet'e donusturun
3. feet degerini geri donun

Google'da arama ipucu: "feet cm donusturme"
*/

function feetDonusturucu(cm) 
{
  let km = cm / 1000;
  return milDonusturucu(km);  
}

/* Gorev 5 : 5 kucuk maymun yatakta ziplamis sarkisini cocuklar icin hazirladigimi varsayalim. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Asagidakileri cocukSarkisi fonksiyonunda yap:
1. Baslangicta var olan maymun sayisini alin.
2. cocukSarkisi fonksiyonu asagidaki satiri sadece 1 kere yazacak sekilde kodunuzu yazin:

    "{sayi} kucuk maymun yatakta ziplamis, biri dusup basini carpmis, Anne doktoru aramis, Doktor cok kizmis: Bir daha yatakta ziplamak yok!"

3. Bu fonksiyonun disinda bir yerde, maymun sayisinin her seferinde 1 azaldigi ve maymun sayisi 1 olana kadar devem eden bir dongu olusturun. 
4. Bu dongude, her seferinde cocukSarkisi fonsiyonu calissin ve console.log'a donen metni yazdirsin.
*/

function cocukSarkisi(num_maymun) {
  console.log("${num_maymun} kucuk maymun yatakta ziplamis, biri dusup basini carpmis, Anne doktoru aramis, Doktor cok kizmis: Bir daha yatakta ziplamak yok!");
}

for(let i = num_maymun; i > 1; i--)
{
  cocukSarkisi(i);
}

/* Gorev 6 : Not Hesaplayici */

/*
Asagdakileri notHesapla fonksiyonunda yap.
1. 100'luk sistemde bir sinav sonucu alin.
2. Asagidaki tabloya gore notu donun.

 90-100 arasinda 'A aldin' 
 80-89 arasinda 'B aldin'
 70-79 arasinda 'C aldin'
 60-69 arasinda 'D aldin'
 daha asagida 'F aldin'
 donun
*/

function notHesapla(sonuc) {
  if(sonuc >= 90)
  {
    console.log("A aldin");
  }
  else if(sonuc >= 80)
  {
    console.log("B aldin");
  }
  else if(sonuc >= 70)
  {
    console.log("C aldin");
  }
  else if(sonuc >= 60)
  {
    console.log("D aldin");
  }
  else
  {
    console.log("F aldin");
  }
}

/* Bonus calisma: Sesli harf sayaci - Kac tane sesli harf var? */

/*
Asagidakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir arguman alin, string olsun.
2. Bu string'in icindeki sesli harfleri sayin ve sayisini geri donun.  (hem buyuk hem de kucuk harflerin sayisini donmeli).

İPUCU - yarin islenecek array(dizi) konusunu onden arastirman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/

function sesliHarfSayaci(/*buraya kodunu yazabilirsin*/) {
  /*buraya kodunu yazabilirsin*/
}

/* Lutfen bu satirin alt tarafini degistirmeyin */
function sa() {
  console.log("Kodlar calisiyor");
  return "as";
}
sa();
/* Bu satirdan sonrasini degistirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};

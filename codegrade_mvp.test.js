import functions from './index';

describe('saFunction', ()=>{
    it('sa as doner', ()=>{
        expect(functions.sa()).toBe('as');
    })
});

describe('carpmaFunction', ()=>{
    it('a * b', ()=>{
        expect(functions.carpma(5, 7)).toBe(35);
    })
});

describe('kopeginYasiFunction', ()=>{
    it('sonuc insanYasi * 7', ()=>{
        expect(functions.kopeginYasi(5)).toBe(35);
    })
});

describe('oyunFunction', ()=>{
    it('sonuc Kazandin!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Tas', 'Makas')).toBe('Kazandin!');
    })
    it('sonuc Kazandin!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Tas', 'Kagit')).toBe('Kaybettin!');
    })
    it('sonuc Kazandin!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Tas', 'Tas')).toBe(`Beraberlik`);
    })
    it('sonuc Kazandin!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Kagit', 'Tas')).toBe(`Kazandin!`);
    })
    it('sonuc Kazandin!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Kagit', 'Makas')).toBe(`Kaybettin!`);
    })
    it('sonuc Kazandin!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Kagit', 'Kagit')).toBe(`Beraberlik`);
    })
    it('sonuc Kazandin!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Makas', 'Kagit')).toBe(`Kazandin!`);
    })
    it('sonuc Kazandin!, Kaybettin! veya Beraberlik', ()=>{
        expect(functions.oyun('Makas', 'Tas')).toBe(`Kaybettin!`);
    })
});

describe('milDonusturucuFunction', ()=>{
    it('sonuc km * 0.621371', ()=>{
        expect(functions.milDonusturucu(10)).toBe(6.21371);
    })
});

describe('feetDonusturucuFunction', ()=>{
    it('sonuc cm / 30.48', ()=>{
        expect(functions.feetDonusturucu(160)).toBe(5.2493438320209975);
    })
});

describe('cocukSarkisiFunction', ()=>{
    it('girilen degere gore geri sayim yapan bir string doner', ()=>{
        expect(functions.cocukSarkisi(5)).toBe(`${5} kucuk maymun yatakta ziplamis, biri dusup basini carpmis, Anne doktoru aramis, Doktor cok kizmis: Bir daha yatakta ziplamak yok!`);
    })
});

describe('notHesaplaFunction', ()=>{
    it('A olmaliydi', ()=>{
        expect(functions.notHesapla(90)).toBe('A aldin');
    })
    it('A olmaliydi', ()=>{
      expect(functions.notHesapla(95)).toBe('A aldin');
  })
    it('B olmaliydi', ()=>{
        expect(functions.notHesapla(80)).toBe('B aldin');
    })
    it('B olmaliydi', ()=>{
      expect(functions.notHesapla(85)).toBe('B aldin');
  })
    it('C olmaliydi', ()=>{
        expect(functions.notHesapla(70)).toBe('C aldin');
    })
    it('C olmaliydi', ()=>{
      expect(functions.notHesapla(75)).toBe('C aldin');
  })
    it('D olmaliydi', ()=>{
        expect(functions.notHesapla(60)).toBe('D aldin');
    })
    it('D olmaliydi', ()=>{
      expect(functions.notHesapla(65)).toBe('D aldin');
  })
    it('F olmaliydi', ()=>{
        expect(functions.notHesapla(59)).toBe('F aldin');
    })
    it('F olmaliydi', ()=>{
      expect(functions.notHesapla(20)).toBe('F aldin');
  })
});

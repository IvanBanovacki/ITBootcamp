// Napraviti hijerarhiju klasa koje opisuje ljude na fakultetu.
// Osnovne klase koje treba implementirati (sa njihovim poljima):
//     Čovek: ime, prezime, godina rođenja
//     Student: trenutna godina studija, trenutni prosek
//         Student osnovnih studija: smer osnovnih studija
//         Student master studija: smer master studija
//     Zaposleni: godina zaposlenja, plata
//         Nastavnik: omiljeni predmet, listu predmeta na kojima drži nastavu
//             Profesor: titula (docent, vanredni, redovni)
//             Asistent: smer doktorskih studija
//     Službenik: odsek

class Covek {
    constructor(ime, prezime, godRodjenja) {
        this.ime = ime;
        this.prezime = prezime;
        this.godRodjenja = godRodjenja;
    }
}

class Student extends Covek {
    constructor(ime, prezime, godRodjenja, trGodStudija, trProsek) {
        super(ime, prezime, godRodjenja);
        this.trGodStudija = trGodStudija;
        this.trProsek = trProsek;
    }
}

class StudentOsnStudija extends Student {
    constructor(ime, prezime, godRodjenja, trGodStudija, trProsek, smerOsnStudija) {
        super(ime, prezime, godRodjenja, trGodStudija, trProsek);
        this.smerOsnStudija = smerOsnStudija;
    }
}

class StudentMastStudija extends Student {
    constructor(ime, prezime, godRodjenja, trGodStudija, trProsek, smerMastStudija) {
        super(ime, prezime, godRodjenja, trGodStudija, trProsek);
        this.smerMastStudija = smerMastStudija;
    }
}

class Zaposleni extends Covek {
    constructor(ime, prezime, godRodjenja, godZaposlenja, plata) {
        super(ime, prezime, godRodjenja);
        this.godZaposlenja = godZaposlenja;
        this.plata = plata;
    }
}

class Nastavnik extends Zaposleni {
    constructor(ime, prezime, godRodjenja, godZaposlenja, plata, omiljeniPredmet, listaPredmeta) {
        super(ime, prezime, godRodjenja, godZaposlenja, plata);
        this.omiljeniPredmet = omiljeniPredmet;
        this.listaPredmeta = listaPredmeta;
    }
}

class Profesor extends Nastavnik {
    constructor(ime, prezime, godRodjenja, godZaposlenja, plata, omiljeniPredmet, listaPredmeta, titula) {
        super(ime, prezime, godRodjenja, godZaposlenja, plata, omiljeniPredmet, listaPredmeta);
        this.titula = titula;
    }
}

class Asistent extends Nastavnik {
    constructor(ime, prezime, godRodjenja, godZaposlenja, plata, omiljeniPredmet, listaPredmeta, smerDokStudija) {
        super(ime, prezime, godRodjenja, godZaposlenja, plata, omiljeniPredmet, listaPredmeta);
        this.smerDokStudija = smerDokStudija;
    }
}
class Sluzbenik extends Zaposleni {
    constructor(ime, prezime, godRodjenja, godZaposlenja, plata, odsek) {
        super(ime, prezime, godRodjenja, godZaposlenja, plata);
        this.odsek = odsek;
    }
}

let studentOsn = new StudentOsnStudija("Milos", "Obrenovic", 1996, "16-249", 7.87, "Medjunarodni odnosi");
let studentMast = new StudentMastStudija("Petar", "Petrovic", 1994, "13-600", 8.9, "Evropske integracije");
let profesor1 = new Profesor("Nikola", "Nikolic", 1960, 1998, 160000, "Krivicno pravo", ["Krivicno pravo", "Medjunarodno krivicno pravo"], "redovni");
let profesor2 = new Profesor("Marko", "Stefanovic", 1970, 2006, 110000, "Medjunarodno javno pravo", ["Medjunarodno javno pravo", "Diplomatsko i konzularno pravo"], "docent");
let asistent = new Asistent("Nemanja", "Stevanovic", 1993, 2018, 60000, "Kompanijsko pravo", ["Kompanijsko pravo"], "Kompanijskopravni rezim sukoba interesa");
let sluzbenik = new Sluzbenik("Bojan", "Ilic", 1980, 2011, 60000, "Odsek za studentska pitanja");

console.log(studentOsn, studentMast, profesor1, profesor2, asistent, sluzbenik);

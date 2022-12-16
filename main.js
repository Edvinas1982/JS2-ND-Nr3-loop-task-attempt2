// Turime masyvą, kurio kiekvienas elementas yra masyvas iš keturių elementų:
// a) data kaip tekstinė eilutė, pvz: ‘2017-07-06 19:59:45’
// b) automobilio numeris, pvz.: ‘LRS123’
// c) automobilio nuvažiuotas kelias metrais
// d) automobilio sugaištas laikas sekundėmis
// Išveskite visus automobilius į html lentelę kartu su suskaičiuotu automobilio greičiu
// kilometrais per valandą.

var masyvas = [
    ['2017-07-06 19:59:45', 'LRS123', 1500, 28],
    ['2018-12-14 1:05:00', 'KOK331', 2520, 71],
    ['1997-05-28 14:22:09', 'AZS444', 9500, 381],
    ['1922-04-18 7:45:12', 'WOW999', 300, 89]
]

// Attempt nr3

for ( var i = 0; i < masyvas.length; i++ ){
    var greitis = Math.round(masyvas[i][2] / masyvas[i][3])*3.6
    console.log(greitis)
}


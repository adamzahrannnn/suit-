var tanya = true;
while (tanya){
// Pilihan Player
var p = prompt("Silahkan Pilih \n (contoh : Jempol, Telunjuk, Kelingking)")
// Pilihan Komputer

// bilangan random
var comp = Math.random();
if (comp < 0.34 ) {
    comp = "Jempol";
} else if (comp >= 0.34 && comp < 0.67) {
    comp = " Telunjuk";
} else{
    comp = " Kelingking";
}

var hasil = ''
// alur
if ( comp == p ){
    hasil = 'SERI!';
}
//  JEMPOL   
    else if ( comp == "Jempol"){hasil = ( p == "Telunjuk" ) ? "KALAH!" : "MENANG!"};
     else if ( comp == "Jempol"){hasil = ( p == "Kelingking" ) ? "MENANG!" : "KALAH!";
} 
} 
//  TELUNJUK
    else if ( comp == "Telunjuk"){hasil = ( p == "Jempol" ) ? "MENANG!": "KALAH!"};
  else if ( comp == "Telunjuk"){hasil = ( p == "Kelingking" ) ? "KALAH!": "MENANG!";           
} 
// Kelingking
    else if ( comp == "Kelingking"){ hasil = ( p == "Telunjuk" ) ? "MENANG!" : "KALAH!"};
    else if ( comp == "Kelingking"){ hasil = ( p == "Jempol" ) ? "KALAH!" : "MENANG!";
} else {
    hasil = "ISI YANG BENER JINGS"
}

//  Hasilnya
alert (' KAMU MEMILIH : ' + p +  ' \n KOMPUTER MEMILIH : ' + comp + ' \n HASILNYA :  KAMU ' + hasil) 
tanya= confirm ( " LAGI GAK ?");
} 
alert (" THANKS DAH MAU MAIN :)")

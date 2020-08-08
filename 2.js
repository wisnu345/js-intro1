const mtk = 90
const bahasaIndonesia = 80
const bahasaInggris = 100
const ipa = 90


if ( mtk !== null && bahasaIndonesia !== null && bahasaInggris !== null && ipa !== null ) {
    let average = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4
    function grade () {
        if (average <= 100 && average >= 90){
            console.log (`Rata-Rata ${average} \nGrade = A`);
        }else if( average < 90 && average >= 80) {
            console.log (`Rata-Rata ${average} \nGrade = B`)
        }else if( average < 80 && average >= 70) {
            console.log (`Rata-Rata ${average} \nGrade = C`)
        }else if( average < 70 && average >= 60) {
            console.log (`Rata-Rata ${average} \nGrade = D`)
        }else if( average < 60 && average > 0) {
            console.log (`Rata-Rata ${average} \nGrade = E`)
        } else {
            console.log ("nilai error")
        }
    }
    grade();
    
} else {
    console.log ("nilai salah")
}

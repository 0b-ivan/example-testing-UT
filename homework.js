//Diese Funktion multipliziert die Einträge eines Arrays.
//Hierbei darf das Ergebnis nie 0 sein!
function multiplyArray(array){
    let res = 1
    for (let elem of array){
        if (elem === 0) {
            break
        }
        res *= elem
    }
    return res
}


//Diese Funktion überprüft,
//ob die Summe von Elementen kleiner ist als das erste Element eines Arrays
//Sprich: [28, 17, 2, 5] => ist 17 + 2 + 5 kleiner als 28?
//Das Ergebnis ist ein Boolean
function sumSmallerThanFirst(array){
    let first = array[0]
    let sum = 0

    for (let i = 1 ; i <= array.length;i++){
        sum += array[i]
    }

    return sum < first
}

function printingTestLog(funkName,arg,erw){
    console.log(
    '========================','\n',
        "Die Funktion ",funkName, "wurde getestet mit Argument ",arg,'\n',
        'Erwartet war: ','\n',
        erw, '\n',
        'Resultat:'


    )
}

function testMultiplayArr(array, erwartung){
    //BadPath
    if(multiplyArray(array)!== erwartung){
        printingTestLog('multiplyArray',array,erwartung)
        console.log(
            " ",multiplyArray(array),'\n',
            "Test FAILED",
            '\n',"========================",'\n')
        return false
    }
    //GoodPath
    printingTestLog('multiplyArray',array,erwartung)
    console.log(
        " ",multiplyArray(array),'\n',
        "Test SUCCEEDED",
        '\n',"========================",'\n'
    )
    return true

}



function test(){
    testMultiplayArr([28, 17, 2, 5],4760)
    testMultiplayArr([28, 17, 2, 5],100)

}

test()

/*#####ERWARTUNG####
========================
Die Funktion <Funktionsname> wurde getestet mit Argument <Argument>.
Erwartet war:
<Erwartetes Ergebnis>
Resultat:
<Tatsächliches Ergebnis>
Test <FAILED/SUCCEEDED>
========================
 */
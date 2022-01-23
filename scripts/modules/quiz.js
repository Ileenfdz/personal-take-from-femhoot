const quiz = new Array();

quiz[0] = "Hedwig Eva Maria Kiesler, known in Hollywood as Hedy Lamarr, ¿was the inventor of wifi?";
quiz[1] = "Did Jean E. Sammet​ developed the language of programming, FORMAC, in 1962?";
quiz[2] = "Mary Kenneth Keller, the first doctorate woman in computing in the US was a nun?";
quiz[3] = "Radia Joy Perlman while working for Intel, got more than 47 patents?";
quiz[4] = "For entering in Factoría F5, do you need a Miss Universe title?";
quiz[5] = "Was Evelyn Berezin remembered as the mother of word processors?";
quiz[6] = "Frances E. Allen, a pioneer in the parallel task automation and optimization of compilators never received an award";
quiz[7] = "Ángela Ruiz Robles pioneer of the electronic book, was born in Roma?";


let answer = true;

export function compareQuizAnswer() {
    if (quiz[0,1,2,3,5] == answer){

     return "Es correcto";
}
    if (quiz[4,6,7] !== answer){
        
        return "Es correcto";
    }
    else {
        return "Prueba otra vez";
    }
}
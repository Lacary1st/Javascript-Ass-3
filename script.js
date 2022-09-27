document.getElementById('title').innerHTML="FOURTH-DAY JAVASCRIPT EXPERIENCE";
document.getElementById('experience').innerHTML="So sad I missed the third time Javascript experience due to some unforeseen challenges, anyways, WE MOOOVVEE. I cloned the class for the day I missed and seeked explanations from colleagues , I hope I'll be able to catch up. Hopefully. I wish my lecturer can please re-explained again. I wouldn't mind if my request can be considered. Today's class was started with the explanation on CONDITIONAL STATEMENT, which was described as statements that can only run when given a condition. Types of Conditional Statements are: <code><li>if</li></code> <code><li>else</li></code> <code><li>else if</li></code> <code><li>switch</li></code> After many examples, the class came to an end and an assignment was given, which was to prepare a student grade system ,using Conditional Statement. Find my solutions below; ";
document.getElementById('assignment').innerHTML="ASSIGNMENT(Student Grade System)";


let score = 100 ;
if(score >= 70 && score <= 100){
    result = ('A');
}

else if(score >= 60 && score <= 69){
    result = ('B');
}

else if(score >= 50 && score <= 59){
    result = ('C');
}

else if(score >= 45 && score <= 49){
    result = ('D');
}

else if(score >= 40 && score <= 44){
    result = ('E');
}

else if(score >= 0 && score <= 39){
    result = ('F');
}


document.getElementById('illustration').innerHTML="<code>let score = 100 </code><br> <code> if(score >= 70 && score <= 100)</code><br> <code>result = ('A');</code><br>   <code> else if(score >= 60 && score <= 69)</code><br> <code>result = ('B');</code><br>   <code> else if(score >= 50 && score <= 59)</code><br> <code>result = ('C');</code><br>   <code> else if(score >= 45 && score <= 49)</code><br> <code>result = ('D');</code><br>   <code> else if(score >= 40 && score <= 44)</code><br> <code>result = ('E');</code><br>  <code> else if(score >= 0 && score <= 39)</code><br> <code>result = ('F');</code><br>";
console.log(result)





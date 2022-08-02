
var items= ['PC', 'mouse', 'stand', 'tissue', 'notebook', 'syrup']
/* for (var i=0; i<=5; i++){
    console.log(i)
} */ /* ( select kore shift+al+a diye comment kora jai jototuku iccha tottuku)  */
// eikhane items er value gulake display korte hole i diye items er index bujhaite hobe .. sejonne connect kora lagbe 

var items= ['PC', 'mouse', 'stand', 'tissue', 'notebook', 'syrup']
for(var i=0; i< items.length; i++)
// eikhane i<=5 na likhe i<= items.length lekhar karon holo jate pore jodi kuno item add ba minus korao hoi seta jno automatic display korte pare.
{
    var item = items[i] /* eikhane "i" ke items er index hishabe chinhito kora hoyeche & eder naam dewa hoyeche "item" (singular) */
    console.log(item); //eikhane only "item" diye items er vitorer prottekta index er alada value bujhano hoyeche
}
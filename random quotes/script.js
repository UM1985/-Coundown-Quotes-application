function show(){
    const arr = [ "I think, therefore I am. (Rene Descartes)" , "I may disagree with what you say, but I will defend to death your right to say it.","If men were perfectly virtuous, they wouldn’t have friends","People do what they hate for money and use the money to do what they love","Small things make perfection, but perfection is no small thing","A masterpiece is born a masterpiece.","Who will guard the guardians?","History will be kind to me, for I intend to write it.","No problem can be solved from the same level of consciousness that created it. We must see the world anew."]

    const randomIndex = Math.floor(Math.random()*arr.length);
    
    output = document.getElementById("quote");
    // console.log(arr[randomIndex]);

    output.innerText = arr[randomIndex];
}
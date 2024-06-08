var quotescon = [
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        writer: "-Bernard M. Baruch"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        writer: "-Mahatma Gandhi"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        writer: "-Mae West"
    },
    {
        quote: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
        writer: "-William W. Purkey"
    },
    {
        quote: "“The best revenge is massive success.”",
        writer: "-Frank Sinatra"
    },
    {
        quote: "“You miss 100% of the shots you don't take.”",
        writer: "-Wayne Gretzy"
    },
    {
        quote: "“Do not take life too seriously. You will not get out alive.”",
        writer:"-Elbert Hubbard" 
    },
    {
        quote: "“Resentment is like drinking poison and waiting for your enemies to die.”",
        writer:"-Nelson Mandela" 
    },
    {
        quote:"“It's not what happens to you, but how you react to it that matters.”" ,
        writer: "-Epictetus"
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        writer: "-Dr. Seuss"
    }

];
 var lastrandom =-1;

function addQuote() {
    do{
        var random = Math.floor(Math.random() * quotescon.length);
    }
    while(random===lastrandom);
    lastrandom= random;
    var cartona = `
        <h2 id="qu">${quotescon[random].quote}</h2>
        <h2 class="my-3" id="writerr">${quotescon[random].writer}</h2>
    `;
    document.getElementById('quotecontainer').innerHTML = cartona;
}

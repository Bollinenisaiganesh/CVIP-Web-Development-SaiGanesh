const quotes_Life = [
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
    text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss"
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
      {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein"
  }
    
  ];

  const quotes_Love = [
    { text : "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
    author : "John Green"
    },
    {
     text : "Loved you yesterday, love you still, always have, always will." ,
     author : "Elaine Davis"
    },
    {
      text :"I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
      author:"Angelita Lim"
    }
    ]
    const quotes_Friends = [
        { text : "Things are never quite as scary when you've got a best friend.",
        author : "Bill Watterson"
        },
        {
         text : "Friendship is the hardest thing in the world to explain. It's not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything." ,
         author : "Muhammad Ali"
        },
        {
          text :"Friendship is the only cement that will ever hold the world together",
          author:"Woodrow Wilson"
        }
        ]

        const quotes_Study = [
            { text : "There are no secrets to success. It results from preparation, hard work, and learning from failure.",
            author : "General Colin Powell "
            },
            {
             text : "Success is not final; failure is not fatal. It’s the courage to continue that counts." ,
             author : "Winston Churchill"
            },
            {
              text :"There’s no substitute for hard work",
              author:" Thomas Edison"
            }
            ]

    function welcome() {
       document.getElementById("wel").innerHTML = "Hi "+document.getElementById('name').value;
    }

    function generateQuote() {
        
        selectElement1 = document.querySelector('#con');
        var quotes= selectElement1.options[selectElement1.selectedIndex].value;

        if(quotes=="quotes_Friends") {
           
            var person = {
            quote: quotes_Friends[(Math.floor(Math.random() * quotes_Friends.length))].text,
            author: quotes_Friends[(Math.floor(Math.random() * quotes_Friends.length))].author
            }
        }
        else if (quotes=="quotes_Love") {
            
               var person = {
                quote: quotes_Love[(Math.floor(Math.random() * quotes_Love.length))].text,
                author: quotes_Love[(Math.floor(Math.random() * quotes_Love.length))].author
                }
        }
        else if (quotes=="quotes_Study") {
            
            var person = {
             quote: quotes_Study[(Math.floor(Math.random() * quotes_Study.length))].text,
             author: quotes_Study[(Math.floor(Math.random() * quotes_Study.length))].author
             }
        }
        else {
            
            var person = {
             quote: quotes_Life[(Math.floor(Math.random() * quotes_Life.length))].text,
             author: quotes_Life[(Math.floor(Math.random() * quotes_Life.length))].author
             }
     }
      

        let txt1 = person.quote;
        let txt2 = "                 ~~~~ "+person.author;
        
    
    document.getElementById("text").innerHTML = txt1;
    document.getElementById("author-name").innerHTML = txt2;
}

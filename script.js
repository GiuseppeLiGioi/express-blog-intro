/*
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare su postman
Buon lavoro!
*/

const express = require ("express");
const app= express();
const port = 3000;

//per mettere le immagini, faccio riferiemnto alla cartella public
app.use(express.static ('public'));


//attivazione della rotta
app.get("/api/post", (req, res) => {
    const posts = [
        {
           
            titolo: "ciambellone",
            contenuto: "torta",
            img: "ciambellone.jpeg",
            tags: ["buono", "buonissimo", "crema"]
        },
        {
           
            titolo: "cracker",
            contenuto: "snack",
            img: "cracker_barbabietola.jpeg",
            tags: ["buono", "buonissimo", "salato"]
        },
        {
      
            titolo: "pane fritto",
            contenuto: "pane fatto in casa",
            img: "pane_fritto_dolce.jpeg",
            tags: ["buono", "buonissimo", "dolce"]
        },
        {
            
            titolo: "pasta_barbabietola",
            contenuto: "pasta italiana",
            img: "pasta_barbabietola.jpeg",
            tags: ["buono", "buonissimo", "italiana"]
        },
        {
           
            titolo: "Torta paesana",
            contenuto: "torta sarda",
            img: "torta_paesana.jpeg",
            tags: ["buono", "buonissimo", "sardo"]
        }
    ];

    res.json(posts);
});



app.listen(port, ()=>{
    console.log("connessione porta 3000");
})
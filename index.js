const port = process.env.PORT || 3000;
const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(helmet());
app.use(express.json());

//Muhammed Furkan Elaldı 02185076013 / Film Öneren Api

app.listen(port, () => {
    console.log("Server Dinleniyor..");
});

function film(isim,tur,sure,yapim,yonetmen){
    this.isim = isim;
    this.tur = tur;
    this.sure = sure;
    this.yapim = yapim;
    this.yonetmen = yonetmen;
}
let filmler = new Array(
    new film("Yedi Samuray: Kanlı Pirinç","Aksiyon-Drama","207 Dakika","1954","Akira Kurosawa"),
    new film("U-Bot: Denizaltı","Drama-Savaş","149 Dakika","1981","Wolfgang Petersen"),
    new film("İyi, Kötü ve Çirkin","Macera-Vahşi Batı","161 Dakika","1966","Sergio Leone"),
    new film("Delik","Suç-Drama-Gerilim","131 Dakika","1960","Jacques Becker"),
    new film("Seppuku","Aksiyon-Drama-Gizem","133 Dakika","1962","Masaki Kobayashi"),
    new film("Köstebek","Suç-Drama","151 Dakika","2006","Martin Scorsese"),
    new film("Kan Dökülecek","Drama","158 Dakika","2007","Paul Thomas Anderson"),
    new film("Baba","Suç-Drama","175 Dakika","1972","Francis Ford Coppola"),
    new film("Esaretin Bedeli","Drama","142 Dakika","1994","Frank Darabont"),
    new film("Piyanist","Biyografi-Drama-Savaş","150 Dakika","2002","Roman Polanski")
    )

app.get("/", async (req,res) => {
    try {
        res.status(200).json(filmler[Math.floor(Math.random() * 10)]);
    } catch (error) {
        throw new Error(error);
    }
})

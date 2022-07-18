const userName = "Your Name";
const likes = ["革靴", "スーツ", "懐中時計", "万年筆"];
const foods = ["寿司", "生肉", "生魚", "焼き鳥（塩）", "焼いた羊肉", "新鮮な鹿肉"];
const langs = ["Scala", "Elixir", "Rust"];

likes.forEach(item => {
    console.log(item);
});

foods.forEach(food => {
    console.log(food);
});

langs.forEach(lang => {
    console.log(lang);
});

let like = "スーツ";
if (likes.indexOf(like) != -1) {
    console.log("この人は" + like + "が好きです");
}
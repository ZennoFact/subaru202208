const userName = "Your Name";
// const likes = ["革靴", "スーツ", "懐中時計", "万年筆"];
// const foods = ["寿司", "生肉", "生魚", "焼き鳥（塩）", "焼いた羊肉", "新鮮な鹿肉"];
// const langs = ["Scala", "Elixir", "Rust"];

const data = {
    likes: ["革靴", "スーツ", "懐中時計", "万年筆"],
    foods: ["寿司", "生肉", "生魚", "焼き鳥（塩）", "焼いた羊肉", "新鮮な鹿肉"],
    langs: ["Scala", "Elixir", "Rust"]
};

// まずは1か所リストに like-listクラスを持たせて確認のしてから使おう
// let list = document.querySelector("div.like-list ul");
// likes.forEach(item => {
//     const node = document.createElement("li");
//     node.innerHTML = item;
//     list.appendChild(node);
// });

// 全データを自動でUIパーツに反映
Object.keys(data).forEach(key => {
    const list = document.querySelector(`div.container.${key} ul`);
    data[key].forEach(item => {
        const node = document.createElement("li");
        node.innerHTML = item;
        list.appendChild(node);
    });
    // リンク先も，自動で設定したいので，ファイル名含め，変更する
    const anchor = document.querySelector(`div.container.${key} a`);
    anchor.href = `./${key}.html`;
});


// let like = "スーツ";
// if (likes.indexOf(like) != -1) {
//     console.log("この人は" + like + "が好きです");
// }
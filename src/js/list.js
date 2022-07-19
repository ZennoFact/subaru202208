const userName = "Your Name";

const titles = {
    likes: "好きなもの",
    foods: "好きな食べ物",
    langs: "好きな言語"
};
const data = {
    likes: ["革靴", "スーツ", "懐中時計", "万年筆"],
    foods: ["寿司", "生肉", "生魚", "焼き鳥（塩）", "焼いた羊肉", "新鮮な鹿肉"],
    langs: ["Scala", "Elixir", "Rust"]
};

const main = document.querySelector(".main");
// templateタグが利用可能かによって分けます
if ('content' in document.createElement('template')) {
    const dataList = document.querySelector('#datalist');
    Object.keys(data).forEach(key => {
        var cloneList = dataList.content.cloneNode(true);
        cloneList.querySelector('.container').classList.add(key);
        cloneList.querySelector('h2').innerHTML = titles[key];
        
        const listRow = document.querySelector('#listrow');
        const list = cloneList.querySelector('ul');
        data[key].forEach(item => {
            const row = listRow.content.cloneNode(true).querySelector('li');
            row.innerHTML = item;
            list.appendChild(row);
        });
        
        cloneList.querySelector('a').href = `./${key}.html`;

        main.appendChild(cloneList);
        // templateの利点は複雑なUIにも対応しやすいこと
    });
} else {
    Object.keys(data).forEach(key => {
        // 自分でDOM要素をとってくるのでは無く，自作することに
        const div = document.createElement('div');
        div.classList.add(["container", key]);
        const heading2 = div.appendChild(document.createElement('h2'));
        const unorderedList = div.appendChild(document.createElement('ul'));
        const anchor = div.appendChild(document.createElement('a'));

        heading2.innerHTML = titles[key];
        data[key].forEach(item => {
            const node = document.createElement("li");
            node.innerHTML = item;
            unorderedList.appendChild(node);
        });
        anchor.innerHTML = "詳細ページへ";
        anchor.href = `./${key}.html`;

        div.appendChild(heading2);
        div.appendChild(unorderedList);
        div.appendChild(anchor);

        main.appendChild(div);
    });
}
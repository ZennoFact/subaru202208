console.log('いぇぃ！');

// 自分が誰なのか，本来はこんな感じでサーバサイドでデータをもらう
// const iconPath = "localhost:5500/liketwitter/images/cock.png"
const iconPath = "../images/cock.png"
const id = "@nanashi-no-gonbe";
const name = "名前はまだない";

const maxTextLength = 140; // 本来はdouble byteで140文字
const circleMaxValue = 56.5487;

// 色を変数化したよ。ちなみに「オブジェクト」というデータの集合体にしたので，使い方は「color.色名」になります
const color = {
    blue: "#1D9BF0",
    yellow: "#FFD400",
    red: "#FF0000"
};

const textArea = document.querySelector('.tweet-editor');
textArea.addEventListener('input', event => {
    const tweetButtons = document.querySelectorAll('.post');

    console.log(textArea.scrollHeight)

    textArea.setAttribute('rows', textArea.scrollHeight / 24);


    let textLength = textArea.value.length;
    let parcentage = textLength / maxTextLength;
    let strokeDashOffset = circleMaxValue - (circleMaxValue * parcentage);


    document.querySelector('#progress').setAttribute('aria-valuenow', parcentage);
    
    let svg = document.querySelector('#circle');
    if(textLength < 130) {
        setRing(color.blue, strokeDashOffset);
    } else if(textLength < 140) {
        setRing(color.yellow, strokeDashOffset, maxTextLength - textLength);
    } else if(textLength < 150) {
        setRing(color.red, strokeDashOffset, maxTextLength - textLength);
    } else {
        setRing(color.red,　0); // 0にしておかないとリングの色が反転していきます
    }

    strokeDashOffset
 
    console.log(textLength)

    Array.prototype.forEach.call(tweetButtons, button => {

        if (textArea.value === '' || maxTextLength < textLength) {
            button.classList.remove('active');
            
        } else {
            button.classList.add('active');
        }
    });
});


function setRing(color, strokeDashOffset, count = "") {
    let svg = document.querySelector('#circle');
    svg.style = `stroke-dashoffset: ${strokeDashOffset}; stroke-dasharray: 56.5487;`;
    svg.setAttribute('stroke', color);
    document.querySelector('#count p').innerHTML = count;
}

// ボタンの取得
const buttons = document.querySelectorAll(".post");
Array.prototype.forEach.call(buttons, button => {
    button.addEventListener('click', event => {
        if(event.target.classList.contains('active')) {
            event.target.classList.remove('active');
            const textarea = document.querySelector('.tweet-editor');
            tweet(id, name, textarea.value, iconPath);
            textarea.value = '';
            setRing(color.blue, circleMaxValue); // ここで文字数カウントのリングもリセットする
            textarea.focus();
        }
    }, false);
});

// 本来はある程度自動的に新しい投稿を読み込めると良いよね。その辺はサーバサイドを習ってから，かな
function tweet(id, name, tweet, path) {
    // 本来はtweetをサーバに送るだけの機能として実装したい。
    // 今回はサーバが用意できないので，自分の画面に表示することだけを考えます。
    
    // ブラウザがtemplete要素に対応しているかのテスト
    if ('content' in document.createElement('template')) {
        const timeline = document.querySelector('.timeline');
        const template = document.querySelector('#tweet-template');

        // 新しいTweetを複製してタイムラインに挿入
        const clone = template.content.cloneNode(true);
        const iconPath = clone.querySelector('.usericon');
        const userId = clone.querySelector('.id');
        const username = clone.querySelector('.name');
        const content = clone.querySelector('.content');

        iconPath.src = path;
        userId.innerHTML = id;
        username.innerHTML = name;
        content.innerHTML = tweet;

        
        timeline.prepend(clone);
    } else {
        // 今日はやらないけど，いちいち要素をプログラムで作って追加していくという方法になります。
    }
}


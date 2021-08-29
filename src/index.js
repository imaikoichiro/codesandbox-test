import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して初期化する
  const input = document.querySelector("#add-text");
  const inputText = input.value;
  input.value = "";

  if (inputText === "") return;

  // in-complate add
  const div = incomplateDiv(inputText);
  document.querySelector("#incomplate-list").appendChild(div);
};

function incomplateDiv(inputText) {
  // console.log(inputText);
  // div
  const div = document.createElement("div");
  div.className = "list-row";

  // li
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(complate)
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";

  complateButton.addEventListener("click", () => {
    const deleteTarget = complateButton.parentNode;
    document.querySelector("#incomplate-list").removeChild(deleteTarget);

    // div
    const div = document.createElement("div");
    div.className = "list-row";

    // li
    const li = document.createElement("li");
    li.innerText = inputText;

    // button(incomplate)
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグを削除
      const deleteTarget = returnButton.parentNode;
      document.querySelector("#complate-list").removeChild(deleteTarget);

      const div = incomplateDiv(deleteTarget.querySelector("li").innerText);

      // in-complate add
      document.querySelector("#incomplate-list").appendChild(div);
    });

    // div setting
    div.appendChild(li);
    div.appendChild(returnButton);
    document.querySelector("#complate-list").appendChild(div);
  });

  // button(incomplate)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを削除
    const deleteTarget = deleteButton.parentNode;
    document.querySelector("#incomplate-list").removeChild(deleteTarget);
  });

  // div setting
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  return div;
}

document
  .querySelector("#add-button")
  .addEventListener("click", () => onClickAdd());

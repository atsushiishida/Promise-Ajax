function main(username) {
  console.log(username);
  //アプリケーションエントリーポイント
  getUserInfo(username)
    .then(userInfo => createView(userInfo))
    .then(view => displayView(view))
    .catch(error => {
      `エラーが発生しました：${error}`;
    });
}

function getUserInfo(userId) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open("GET", `https://api.github.com/users/${userId}`);

    request.addEventListener("load", event => {
      if (event.target.status !== 200) {
        console.log(`Error: $(event.target.status):$(event.target.statusText)`);
        reject();
      }

      const userInfo = JSON.parse(event.target.responseText);
      resolve(userInfo);
    });
    request.addEventListener("error", () => {
      console.error("Network Error");
      reject();
    });
    request.send();
  });
}

function createView(userInfo) {
  return escapeHTML`
<h4>${userInfo.name} (@${userInfo.login})</h4>
<img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
<dl>
  <dt>Location</dt>
  <dd>${userInfo.location}</dd>
  <dt>Repositories</dt>
  <dd>${userInfo.public_repos}</dd>
</dl>
`;
}

function displayView(view) {
  const result = document.getElementById("result");
  result.innerHTML = view;
  window.a = view;
}

function escapeSpecialChars(str) {
  //文字列をエスケープする関数
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeHTML(strings, ...values) {
  /*
  式の値をエスケープして出力をする。
  template literalを受け取り、式についてはescapeSpecialChars()関数で処理をする

  */
  return strings.reduce((result, string, i) => {
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + string;
    } else {
      return result + String(value) + string;
    }
  });
}

// webpackでは、globalスコープに関数を定義しないため、明示的に記載する必要がある
window.main = main;

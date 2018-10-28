function getUserInfo(userId) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://api.github.com/users/atsushiishida`);

  request.addEventListener("load", event => {
    if (event.target.status !== 200) {
      console.log(`Error: $(event.target.status):$(event.target.statusText)`);
      return;
    }

    const userInfo = JSON.parse(event.target.responseText);

    const view = escapeHTML`
<h4>${userInfo.name} (@${userInfo.login})</h4>
<img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
<dl>
    <dt>Location</dt>
    <dd>${userInfo.location}</dd>
    <dt>Repositories</dt>
    <dd>${userInfo.public_repos}</dd>
</dl>
`;
    window.a = view;
    const result = document.getElementById("result");
    result.innerHTML = view;
  });
  request.addEventListener("error", () => {
    console.error("Network Error");
  });
  request.send();
}
// webpackでは、globalスコープに関数を定義しないため、明示的に記載する必要がある
window.getUserInfo = getUserInfo;

//文字列をエスケープする関数

function escapeSpecialChars(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// templateリテラルの処理。
// stringsには、リテラルの配列
// ...valuesには、処理された大様式の値が入る
function escapeHTML(strings, ...values) {
  return strings.reduce((result, string, i) => {
    console.log(string);
    const value = values[i - 1];
    if (typeof value === "string") {
      return result + escapeSpecialChars(value) + string;
    } else {
      return result + String(value) + string;
    }
  });
}

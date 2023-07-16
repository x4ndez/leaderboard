const s_lbContainer = document.querySelector("#lb-container");
const s_lbList = document.querySelector("#lb-ul");

let adminMode = 1;

for (let i in users) {

    const el_lbListItem = document.createElement("li");
    const el_lbListName = document.createElement("span");
    const el_lbListScore = document.createElement("span");

    el_lbListName.textContent = users[i].fullName;
    el_lbListScore.textContent = users[i].avgScore();
    el_lbListScore.setAttribute("class", "user-score");

    el_lbListItem.append(el_lbListName);
    el_lbListItem.append(el_lbListScore);

    s_lbList.append(el_lbListItem);


}

if (adminMode === 1) {

    s_lbList.addEventListener("click", function (e) {

        if (e.target.getAttribute("class").includes("user-score")) {

            const el_lbInput = document.createElement("input");
            el_lbInput.setAttribute("type", "text");
            el_lbInput.setAttribute("value", e.target.textContent);

            e.target.textContent = "";
            e.target.append(el_lbInput);

        }



    });


}
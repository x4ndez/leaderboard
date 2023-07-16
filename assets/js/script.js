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

let scoreLastEdit = "";

//If in admin mode
if (adminMode === 1) {

    //Score is editable onclick
    s_lbList.addEventListener("click", function (e) {

        if (e.target.getAttribute("class").includes("user-score")) {

            //If the admin previously edited another score, make the previous edit, uneditable
            if (scoreLastEdit) {

                scoreLastEdit.textContent = scoreLastEdit.children[0].getAttribute("value");

            }

            const el_lbInput = document.createElement("input");
            el_lbInput.setAttribute("type", "text");
            el_lbInput.setAttribute("value", e.target.textContent);

            e.target.textContent = "";
            e.target.append(el_lbInput);

            scoreLastEdit = e.target; //Store last edit in a variable to be accessed on next click

        }

    });


}
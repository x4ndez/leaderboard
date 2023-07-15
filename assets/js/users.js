class User {

    constructor(firstName, lastName, [weightScore1, weightScore2, weightScore3]) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
        this.weightScore = [weightScore1, weightScore2, weightScore3]

    }

    avgScore() {

        var totalScore = 0;

        for (let x in this.weightScore) {
            totalScore += this.weightScore[x];
        }

        const avgScore = Math.round(totalScore / this.weightScore.length);

        return avgScore;

    }

}


let x = new User("Alex", "Nanfro", [250, 190, 360]);

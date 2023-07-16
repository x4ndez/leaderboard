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


let users = [];

users.push(new User("Alex", "Nanfro", [280, 170, 330]));
users.push(new User("John", "Nanfro", [250, 190, 360]));
users.push(new User("Joe", "Nanfro", [220, 150, 260]));
users.push(new User("Greg", "Nanfro", [290, 195, 265]));
users.push(new User("Shaun", "Nanfro", [310, 220, 330]));

console.log(users);

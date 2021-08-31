const sutdent = {
    name: 'arif',
    isRisch: false,
    money: 5000,
    id: 101,
    mejor: 'mathematics',
    subjects: ['english', 'economics', 'math 101', 'calculas'],
    bestFriend: {
        name: 'kundu',
        mejor: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatDey: function (expence, boksis) {
        this.money = this.money - expence - boksis;
        return this.money;
    }
}

sutdent.takeExam()
const remaining1 = sutdent.treatDey(900, 100);
const remaining2 = sutdent.treatDey(500, 100);
console.log(remaining2)
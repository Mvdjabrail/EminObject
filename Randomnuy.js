const emin = {
    dream: 3,
    theWightaggression: 5,
    energy: 4,
    force: 4,
    intelligence: 3,
    car: {
        model: 'Lada',
        marka: 'Priora',
        color: 'black',
        power: 250,
        god: 2015,
    },
    goToTheHall() {
        if ((this.force < 5 && this.force >= 0)) {
            this.force++,
                this.dream--
            this.energy--
            console.log('Cила увеличилась')
        } else { console.log('Вы уже накачены') }
    },
    goToSleep() {
        if (this.dream < 5 && this.dream >= 0) {
            this.dream++

            if (this.energy < 5) {
                this.energy++
            }

            this.intelligence++
            if (this.theWightaggression >= 0) {


                this.theWightaggression--
            }
            console.log('Вы поспали')
        } else {
            console.log('Вы не хотите спать')
        }

    },
    readABook() {
        if (this.intelligence < 5 && this.intelligence >= 0) {
            this.intelligence++
            this.dream--
            this.energy--
            this.theWightaggression--
            console.log('Вы почитали книгу')
        } else {
            console.log('Вы не хотите больше читать')
        }
    },

}
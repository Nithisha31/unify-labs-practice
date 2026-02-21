
// ES6 Pet Class Implementation

class Pet {
    constructor(name, type, health = 100) {
        this.name = name;
        this.type = type;
        this._health = health;
    }

    // Getter for health
    get health() {
        return this._health;
    }

    // Setter for health (ensures value stays between 0 and 100)
    set health(value) {
        if (value > 100) {
            this._health = 100;
        } else if (value < 0) {
            this._health = 0;
        } else {
            this._health = value;
        }
    }

    // Feed method increases health
    feed() {
        this.health += 10;
    }

    // Play method decreases health slightly
    play() {
        this.health -= 15;
    }

    // Get Status method
    getStatus() {
        if (this.health > 70) {
            return "😊 Your pet is happy and healthy!";
        } else if (this.health > 30) {
            return "😐 Your pet is okay, but needs attention.";
        } else {
            return "⚠️ Your pet is not feeling well!";
        }
    }
}

// Create Pet Object
const myPet = new Pet("Buddy", "Dog", 80);

// Display Initial Values
document.getElementById("petName").innerText = myPet.name;
document.getElementById("petType").innerText = myPet.type;
document.getElementById("petHealth").innerText = myPet.health;

// Button Functions
function feedPet() {
    myPet.feed();
    document.getElementById("petHealth").innerText = myPet.health;
}

function playWithPet() {
    myPet.play();
    document.getElementById("petHealth").innerText = myPet.health;
}

function showStatus() {
    alert(myPet.getStatus());
}

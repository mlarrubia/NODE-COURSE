// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// console.log(square(6))


const event = {
    name: "Birthday Party",
    guestList: ["Matt", "Amanda", "Anthony"],
    printGuestList() {
        console.log("Guest list for " + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name);
        })
    }
}

event.printGuestList();
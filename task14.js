let age = 25;
let height = 175;
let weight = 75;
if (age >= 21) {
    if (height >= 170) {
        if (weight >= 70) {
            console.log("Candidate is eligible");
        } else {
            console.log("Not eligible: Weight must be at least 70 kg");
        }
    } else {
        console.log("Not eligible: Height must be at least 170 cm");
    }
} else {
    console.log("Not eligible: Age must be at least 21");
}
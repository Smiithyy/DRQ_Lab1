class BMI {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    calculateBMI() {
        let answer = this.weight / (this.height ** 2);
        return answer;
    }
}
let myBMI = new BMI(2, 90);
let bmi = myBMI.calculateBMI();
console.log(bmi);

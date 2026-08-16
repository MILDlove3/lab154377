
// function calBMI(w, h) {
//     let bmi = w / (h * h)
//     return bmi
// }

// function classBMI(numBmi) {
//     if (numBmi < 18.5) {
//         return "กินเยอะๆน้า"
//     } else if (numBmi < 22.9) {
//         return "หุ่นดีมั่ก"
//     } else if (numBmi < 24.9) {
//         return "พออิ่มค่ะ"
//     } else if (numBmi < 29.9) {
//         return "กินแซ่บเนอะ"
//     } else {
//         return "เปงหมี"
//     }
// }

class BMI {
    constructor(weight, height) {
        this.w = weight
        this.h = height
    }

    calBMI() {
        let bmi = this.w / (this.h * this.h)
        return bmi
    }

    classBMI(numBmi) {
        if (numBmi < 18.5) {
            return "กินเยอะๆน้า"
        } else if (numBmi < 22.9) {
            return "หุ่นดีมั่ก"
        } else if (numBmi < 24.9) {
            return "พออิ่มค่ะ"
        } else if (numBmi < 29.9) {
            return "กินแซ่บเนอะ"
        } else {
            return "เปงหมี"
        }
    }
}

var btnBmi = document.getElementById("btnBmi")

btnBmi.addEventListener("click", () => {
    console.log("Hey wellcome to my webpage BMI by Mildlove")

    var weight = document.getElementById("weight").value
    var height = document.getElementById("height").value

    if (height > 3) {
        alert("โปรดกรอกความสูงเป็นหน่วยเมตร เช่น 1.75")
    } else {
        // let num_bmi = calBMI(weight, height)
        // let txt_bmi = classBMI(num_bmi)

        let bmi = new BMI(weight, height)
        let num_bmi = bmi.calBMI()
        let txt_bmi = bmi.classBMI(num_bmi)

        console.log("น้ำหนัก : " + weight + " กิโลกรัม")
        console.log("ส่วนสูง : " + height + " เมตร")
        console.log(num_bmi)
        console.log(txt_bmi)
    }

    // if we reached here, create BMI and render results
    let bmiObj = new BMI(weight, height)
    let num_bmi = bmiObj.calBMI()
    let txt_bmi = bmiObj.classBMI(num_bmi)

    if (num_bmi < 18.5) {
        document.getElementById('txtBmi').innerHTML = '<h1 class="badge text-bg-success" >' + txt_bmi + '</h1>'
        document.getElementById('numBmi').innerHTML = '<h1 class="badge text-bg-success" > BMI : ' + num_bmi.toFixed(2) + '</h1>'
        document.getElementById('pigBmi').innerHTML = '<img src="./mycat1.jpg" style ="max-width:250px">'

    } else if (num_bmi < 22.9) {
        document.getElementById('txtBmi').innerHTML = '<h1 class="badge text-bg-danger" >' + txt_bmi + '</h1>'
        document.getElementById('numBmi').innerHTML = '<h1 class="badge text-bg-danger" > BMI : ' + num_bmi.toFixed(2) + '</h1>'
        document.getElementById('pigBmi').innerHTML = '<img src="./mycat2.jpg" style ="max-width:250px">'
    } else if (num_bmi < 24.9) {
        document.getElementById('txtBmi').innerHTML = '<h1 class="badge text-bg-danger" >' + txt_bmi + '</h1>'
        document.getElementById('numBmi').innerHTML = '<h1 class="badge text-bg-danger" > BMI : ' + num_bmi.toFixed(2) + '</h1>'
        document.getElementById('pigBmi').innerHTML = '<img src="./mycat3.jpg" style ="max-width:250px">'
    } else if (num_bmi < 29.9) {
        document.getElementById('txtBmi').innerHTML = '<h1 class="badge text-bg-danger" >' + txt_bmi + '</h1>'
        document.getElementById('numBmi').innerHTML = '<h1 class="badge text-bg-danger" > BMI : ' + num_bmi.toFixed(2) + '</h1>'
        document.getElementById('pigBmi').innerHTML = '<img src="./mycat4.jpg" style ="max-width:250px">'
    } else {
        document.getElementById('txtBmi').innerHTML = '<h1 class="badge text-bg-danger" >' + txt_bmi + '</h1>'
        document.getElementById('numBmi').innerHTML = '<h1 class="badge text-bg-danger" > BMI : ' + num_bmi.toFixed(2) + '</h1>'
        document.getElementById('pigBmi').innerHTML = '<img src="./mycat5.jpg" style ="max-width:250px">'
    }

}) 
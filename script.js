// function  pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function pow(x, n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return x * pow(x, n-1);
//     }
// }

// console.log(pow(2, 8));

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html:{
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};


function getTotalProfressByItearation(ata) {
    let tota = 0;
    let student = 0;
    
    for (let course of Object.values(ata)) {
        if (Array.isArray(course)) {
            student += course.length;

            for (let i = 0; i < course.length; i++) {
                tota += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                student += subCourse.length;   

                
                for (let i = 0; i < subCourse.length; i++) {
                    tota += subCourse[i].progress;
                }
            }

        }
    }

    return tota/student;
}


console.log(getTotalProfressByItearation(students));

function getTotalProfressByRecursion(data) {
    // console.log(data, ' first');
    if (Array.isArray(data)) {
        // console.log(data, ' second');
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        // console.log(data, ' third');

        return [total, data.length];
    } else {
        // console.log(data, ' four');
        let total = [0, 0];
        for (let subdata of Object.values(data)) {
            // console.log(subdata, ' subdata');
            const subDataArr = getTotalProfressByRecursion(subdata);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProfressByRecursion(students);

console.log(result[0]/result[1]);
// console.log(Object.values(students));




function max(array) {
    // Math.max.apply(), eat your heart out!
    if (array.length === 0) {
      return -Infinity;
    }
    
    return array.sort((a, b) => {return a-b;})[array.length-1];
  }


console.log(max([1,2,1,56,7,12,43,89,34]));

console.log(2 > undefined);
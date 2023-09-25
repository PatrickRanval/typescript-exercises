var Student = /** @class */ (function () {
    function Student(studentName, studentAge, studentGrade) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
    }
    Student.prototype.displayInfo = function () {
        console.log(this.studentName);
        console.log(this.studentAge);
        console.log(this.studentGrade);
    };
    ;
    Student.prototype.isPassing = function () {
        if (this.studentGrade >= 62) {
            return true;
        }
        else {
            return false;
        }
        ;
    };
    return Student;
}());
;
var tim = new Student('Timothy', 15, 54);
console.log(tim.isPassing());
tim.displayInfo();
console.log(tim);
// Instantiate a new student object and call the methods to test your class

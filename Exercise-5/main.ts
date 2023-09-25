class Student {
     constructor (
     public studentName: string,
     public studentAge: number,
     public studentGrade: number,
     ){}

     displayInfo():void {
          console.log(this.studentName);
          console.log(this.studentAge);
          console.log(this.studentGrade);
     };

     isPassing():boolean {
          return this.studentGrade >= 62                        
          };
     
};

const tim = new Student('Timothy', 15, 54);

console.log(tim.isPassing());
tim.displayInfo();
console.log(tim);

// Instantiate a new student object and call the methods to test your class

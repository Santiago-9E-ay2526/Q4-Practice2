function gradeDescription() {
     let schoolGrade = Number(document.getElementById('schoolGrade').value);
          if (schoolGrade >= 94 && schoolGrade <= 100) {
               window.alert ("Excellent!");
          }
          else if (schoolGrade >= 87 && schoolGrade <= 93) {
               window.alert ("Above Standard!");
          }
          else if (schoolGrade >= 80 && schoolGrade <= 86) {
               window.alert ("Standard!");
          }
          else if (schoolGrade >= 75 && schoolGrade <= 79) {
               window.alert ("Needs Improvement!");
          }
          else {
               window.alert ("Failed!");
          }
}

interface Teacher {
    exeperienceTeachingC?: number;
}

class Cpp extends Subject {
   getRequirements(): string {
    return "Here is the list of requirements for Cpp";
   } 
   getAvailableTeacher(teacher: Teacher): string {
    if (teacher.exeperienceTeachingC === undefined) {
            return "No available teacher";
        }
        return `Available Teacher: ${teacher.firstName}`;
   }
}
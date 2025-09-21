interface Teacher {
    experienceTeachingJava?: number;
}

class Java {
    getRequirements(): string {
        return "Here is the list of requirements for Java";
    }
    getAvailableTeacher(teacher: Teacher): string {
        if (teacher.experienceTeachingJava === undefined) {
            return "No available teacher";
        }
        return `Available Teacher: ${teacher.firstName}`;
    }

}
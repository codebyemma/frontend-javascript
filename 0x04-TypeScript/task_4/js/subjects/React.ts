interface Teacher {
    experienceTeachingReact?: number;
}


class React {
    getRequirements(): string {
        return "Here is the list of requirements for React";
    }
    getAvailableTeacher(teacher: Teacher): string {
        if (teacher.experienceTeachingReact === undefined) {
            return "No available teacher";
        }
        return `Available Teacher: ${teacher.firstName}`;
    }

}
// task_4/js/main.ts

import { Teacher } from "./subjects/Teacher";
import { Cpp } from "./subjects/Cpp";
import { Java } from "./subjects/Java";
import { React } from "./subjects/React";


// ✅ exact constants as required
const cpp = new Cpp();
const java = new Java();
const react = new React();

// ✅ Teacher object with explicit type annotation
const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// ---------- Cpp ----------
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ---------- Java ----------
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// ---------- React ----------
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
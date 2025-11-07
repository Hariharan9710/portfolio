// import React from "react";
// import './Skills.css';

// const skillData = [
//   { name: "HTML", level: 100, color: "bg-primary" },
//   { name: "CSS", level: 90, color: "bg-primary" },
//   { name: "JavaScript", level: 75, color: "bg-primary" },
//   { name: "Java", level: 80, color: "bg-danger" },
//   { name: "SpringBoot", level: 90, color: "bg-primary" },
//   { name: "Angular", level: 55, color: "bg-primary" },
// ];

// export default function Skills() {
//   return (
//     <section id="skills" className="skills text-center">
//       <div className="container section-title">
//         <h2 className="text-dark">Skills</h2>
//         <p>Necessitatibus eius consequatur ex aliquid fuga...</p>
//       </div>

//       <div className="container">
//         <div className="row">
//           {skillData.map((skill, index) => (
//             <div className="col-lg-6 mb-4" key={index}>
//               <div className="d-flex justify-content-between">
//                 <span>{skill.name}</span>
//                 <span>{skill.level}%</span>
//               </div>
//               <div className="progress">
//                 <div
//                   className={`progress-bar ${skill.color}`}
//                   style={{ width: `${skill.level}%` }}
//                 ></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import './Skills.css';

const skillData = [
  { name: "HTML", level: 100, color: "bg-primary" },
  { name: "CSS", level: 90, color: "bg-primary" },
  { name: "JavaScript", level: 75, color: "bg-primary" },
  { name: "React", level: 85, color: "bg-primary" },
  { name: "Java", level: 80, color: "bg-primary" },
  { name: "SpringBoot", level: 75, color: "bg-primary" },
  { name: "MySQL", level: 80, color: "bg-primary" },
  { name: "Angular", level: 55, color: "bg-primary" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills text-center">
      <div className="container section-title">
        <h2 className="text-dark">Skills</h2>
        <p>Proficient in modern web technologies and frameworks for building full-stack applications</p>
      </div>

      <div className="container">
        <div className="row">
          {skillData.map((skill, index) => (
            <div className="col-lg-6 mb-4" key={index}>
              <div className="d-flex justify-content-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress">
                <div
                  className={`progress-bar ${skill.color}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
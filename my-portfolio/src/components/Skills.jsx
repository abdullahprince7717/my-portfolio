import { useState } from "react"
import SkillCard from "./SkillCard"
import * as Icons from '../assets/Index'



function Skills() {
    const [skills, setSkills] = useState([
        {
            name: "AWS",
            icon: Icons.aws
        },
        {
            name: "CSS",
            icon: Icons.css
        },
        {
            name: "React",
            icon: Icons.react
        },
        {
            name: "Node",
            icon: Icons.node
        }

    ])
    return (
        <div className="flex flex-col">
            <p className="text-2xl font-semibold">Skills</p>
            <div className="grid grid-cols-2">
                {skills.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </div>
    )
}

export default Skills
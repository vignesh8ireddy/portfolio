import React from "react";
import jjava from "../assets/skills/java.png";
import JavaScript from "../assets/skills/javascript.png";
import Angular from "../assets/skills/angular.png";
import Ansible from "../assets/skills/ansible.png";
import CSharp from "../assets/skills/c-sharp.png";
import C from "../assets/skills/c.png";
import Css from "../assets/skills/css.png";
import Docker from "../assets/skills/docker.png";
import Html from "../assets/skills/html.png";
import Jenkins from "../assets/skills/jenkins.png";
import Kubernetes from "../assets/skills/kubernetes.png";
import MongoDB from "../assets/skills/mongodb.png";
import Mysql from "../assets/skills/mysql.png";
import Nodejs from "../assets/skills/nodejs.png";
import Npm from "../assets/skills/npm.png";
import PostgreSQL from "../assets/skills/postgresql.png";
import OracleSQL from "../assets/skills/oraclesql.png";
import Python from "../assets/skills/python.png";
import react from "../assets/skills/react.png";
import Redis from "../assets/skills/redis.png";
import TailwindCss from "../assets/skills/tailwindcss.png";
import Terraform from "../assets/skills/terraform.png";
import TypeScript from "../assets/skills/typescript.png";
import SpringBoot from "../assets/skills/springboot.png";

const skills = [
    {
        title: "Programming Languages",
        skillset: [
            {
                tech: "Java",
                logo: jjava
            },
            {
                tech: "JavaScript",
                logo: JavaScript
            },
            {
                tech: "Python",
                logo: Python
            },
            {
                tech: "C#",
                logo: CSharp
            },
            {
                tech: "C",
                logo: C
            }

        ]
    },
    {
        title: "Web Technologies",
        skillset: [
            {
                tech: "SpringBoot",
                logo: SpringBoot
            },
            {
                tech: "React",
                logo: react
            },
            {
                tech: "NodeJs",
                logo: Nodejs
            },
            {
                tech: "Angular",
                logo: Angular
            },
            {
                tech: "TypeScript",
                logo: TypeScript
            },
            {
                tech: "HTML",
                logo: Html
            },
            {
                tech: "CSS",
                logo: Css
            },
            {
                tech: "Tailwind CSs",
                logo: TailwindCss
            },
            {
                tech: "NPM",
                logo: Npm
            }

        ]
    },
    {
        title: "Databases",
        skillset: [
            {
                tech: "MySQL",
                logo: Mysql
            },
            {
                tech: "PostgreSQL",
                logo: PostgreSQL
            },
            {
                tech: "OracleSQL",
                logo: OracleSQL
            },
            {
                tech: "MongoDB",
                logo: MongoDB
            },
            {
                tech: "Redis",
                logo: Redis
            }
        ]
    },
    {
        title: "DevOps",
        skillset: [
            {
                tech: "Docker",
                logo: Docker
            },
            {
                tech: "Kubernetes",
                logo: Kubernetes
            },
            {
                tech: "Jenkins",
                logo: Jenkins
            },
            {
                tech: "Ansible",
                logo: Ansible
            },
            {
                tech: "Terraform",
                logo: Terraform
            }
        ]
    }
]

const SkillsComponent = () => {
    return (
      <div id="skills" className="p-6 md:p-10 pt-16 lg:pt-32 mx-auto max-w-4xl font-title">
        <h1 className="text-4xl text-center text-gray-800 mb-8">SKILLS</h1>
        {skills.map((category, index) => (
          <div key={index} className="mb-2">
            <h2 className="text-sm text-gray-400 mb-2">{category.title}</h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-20">
              {category.skillset.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center px-2"
                >
                  <img
                    src={skill.logo}
                    alt={skill.tech}
                    className="h-8 w-8 object-contain "
                  />
                  <span className="text-gray-400 font-small text-xs">{skill.tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

export default SkillsComponent;
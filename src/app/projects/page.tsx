"use client"

import styles from "./page.module.css";
import { projects } from '@/data/projectsData';
import ProjectBadge from "@/components/Content/Projects/ProjectBadge";

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className="divider" aria-hidden="true" />

            {projects.map((project) => (
                <ProjectBadge key={project.title} project={project} />
            ))}
        </section>
    );
}

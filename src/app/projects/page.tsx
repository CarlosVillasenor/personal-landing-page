"use client"

import styles from "./page.module.css";
import { projects } from '@/data/projectsData';
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function Projects() {
    return (
        <main className={styles.page}>
            <Link href="/" className={styles.backLink}>
                <FiArrowLeft aria-hidden="true" />
                Back to home
            </Link>

            <header className={styles.heading}>
                <h1>All Projects</h1>
            </header>

            <div className={styles.projectList}>
                <div className={styles.columnHeadings} aria-hidden="true">
                    <span>Year</span>
                    <span>Image</span>
                    <span>Project</span>
                    <span>Built with</span>
                </div>

                {projects.map((project) => (
                    <a
                        className={styles.projectRow}
                        key={project.title}
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className={styles.year}>{project.year}</p>
                        <Image
                            src={`/project-images/${project.image}`}
                            alt={`${project.title} preview`}
                            width={140}
                            height={80}
                            className={styles.projectImage}
                        />
                        <div className={styles.projectDetails}>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                        <ul className={styles.techList} aria-label={`Technologies used for ${project.title}`}>
                            {project.technologies.map((technology) => (
                                <li key={technology}>{technology}</li>
                            ))}
                        </ul>
                    </a>
                ))}
            </div>
        </main>
    );
}

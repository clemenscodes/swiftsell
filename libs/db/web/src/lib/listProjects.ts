import { neonClient } from './neonClient';

export const listProjects = async () => {
    const projects = await neonClient.project.listProjects();
    return projects;
};

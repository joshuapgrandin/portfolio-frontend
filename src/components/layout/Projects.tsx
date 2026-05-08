import { useEffect, useState } from "react";
import type { Project } from "../../types";
import ProjectCard from "../sections/projects/ProjectCard";

const Projects = () => {
  const [data, setData] = useState<Project[] | null>(null);
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8081/api/projects");

        if (!res.ok) {
          throw new Error(`Response Error ${res.status}`);
        }

        const json = await res.json();
        setData(json);
        console.log(json);
      } catch (error) {
        setError("Failed to fetch data...");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>errror...</div>;

  return (
    <div className="mt-20">
      <div className="flex items-center">
        <h1 className="px-6 text-3xl">
          Active{" "}
          <span className="text-accent border-accent-2 border-b pb-2 font-serif italic">
            Deployments
          </span>
        </h1>
        <p className="text-ink-dim mt-2 text-xs">
          • {data?.length} <span>active deployement</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {data?.map((data) => {
          return <ProjectCard projects={data} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

import { OrbitingCircles } from "./OrbitingCircles";

/** Filenames must match files in `public/assets/logos/`. */
export const techStackSkills = [
  { name: "Python", logo: "python-original.svg" },
  { name: "NumPy", logo: "numpy-original.svg" },
  { name: "Pandas", logo: "pandas-original.svg" },
  { name: "Scikit-learn", logo: "scikitlearn-original.svg" },
  { name: "Matplotlib", logo: "matplotlib-original.svg" },
  { name: "Streamlit", logo: "streamlit-original.svg" },
  { name: "Git", logo: "git.svg" },
  { name: "GitHub", logo: "github.svg" },
  { name: "PostgreSQL", logo: "postgresql.svg" },
  { name: "VS Code", logo: "vscode-original.svg" },
  { name: "Microsoft Azure", logo: "azure-original.svg" },
  { name: "TensorFlow", logo: "tensorflow.svg" },
  { name: "PyTorch", logo: "pytorch-original.svg" },
];

export function Frameworks() {
  const skills = techStackSkills;
  const innerSkills = [...skills].reverse();

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <SkillIcon key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {innerSkills.map((skill, index) => (
          <SkillIcon key={`${skill.name}-inner-${index}`} skill={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const SkillIcon = ({ skill }) => (
  <div className="flex size-full items-center justify-center">
    <img
      src={`${import.meta.env.BASE_URL}assets/logos/${skill.logo}`}
      className="size-8 rounded-sm object-contain duration-200 hover:scale-110"
      alt={skill.name}
      loading="lazy"
      decoding="async"
    />
  </div>
);

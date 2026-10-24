export function SkillCard({ title, skills }) {
  return (
    <article className="skills__content">
      <h3 className="skills_title">{title}</h3>
      <ul className="skills__list">
        {skills.map((skill) => <li className="skills__tag" key={skill}>{skill}</li>)}
      </ul>
    </article>
  );
}

import './skills.css';
import { SkillCard } from './skill-card';
import { SectionHeading } from '../section-heading';

const skillGroups = [
    { title: 'Languages', skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'SQL'] },
    { title: 'Frontend', skills: ['Angular', 'React.js', 'Next.js', 'HTML5', 'CSS3', 'D3.js', 'Harmony'] },
    { title: 'Backend & APIs', skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'JPA', 'JDBC', 'REST APIs', 'Node.js', 'Express.js', 'Micron'] },
    { title: 'Cloud & infrastructure', skills: ['AWS', 'EC2', 'S3', 'Lambda', 'API Gateway', 'DynamoDB', 'RDS', 'CloudFront', 'ElastiCache', 'Nutanix'] },
    { title: 'Databases & messaging', skills: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'Kafka'] },
    { title: 'DevOps & security', skills: ['Git', 'GitLab', 'Jenkins', 'Terraform', 'HashiCorp Vault', 'CyberArk', 'SonarQube', 'Postman', 'Swagger', 'Archer', 'Contrast', 'Azure DevOps'] },
    { title: 'Monitoring & analytics', skills: ['Dynatrace', 'LogScale', 'OCP', 'Glassbox', 'Tableau', 'Power BI', 'Jupyter'] },
    { title: 'AI & machine learning', skills: ['Generative AI', 'LangChain', 'OpenAI', 'Hugging Face', 'Streamlit', 'NLP', 'Pandas', 'NumPy', 'TensorFlow', 'scikit-learn'] },
    { title: 'Design & low-code', skills: ['Figma', 'Adobe Photoshop', 'Canva', 'Oracle APEX', 'AEM'] },
];

export function Skills(){
    return(
            <section className="skills section" id="skills">
                <div className="container">
                <SectionHeading eyebrow="Technical toolkit" title="Skills & tools" subtitle="A broad toolkit across application development, cloud, data, and AI." />
                <div className="skills__container grid">
                    {skillGroups.map(({ title, skills }) => <SkillCard key={title} title={title} skills={skills} />)}
                </div>
                </div>
            </section>
    )
}
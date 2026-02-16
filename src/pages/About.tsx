import "../styles/page.css";
import "../styles/about.css";

const team = [
  {
    name: "Øyvind",
    title: "Tittel her",
    image: "/images/authors/user1.png",
    ingress: "Fyll ut ingress her.",
  },
  {
    name: "Vilde",
    title: "Tittel her",
    image: "/images/authors/user2.png",
    ingress: "Fyll ut ingress her.",
  },
];

export default function About() {
  return (
    <div className="page">
      <h1>Om oss</h1>
      <p className="page-intro">
        Me er designteamet i Digitaliseringsdirektoratet. Her deler me innsikt,
        prosessar og avgjerder bak designarbeidet på digdir.no.
      </p>

      <section className="team-section">
        {team.map((person) => (
          <div className="team-card" key={person.name}>
            <img
              className="team-avatar"
              src={person.image}
              alt={person.name}
              width="80"
              height="80"
            />
            <div className="team-info">
              <h2 className="team-name">{person.name}</h2>
              <span className="team-title">{person.title}</span>
              <p className="team-ingress">{person.ingress}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

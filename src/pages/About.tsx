import "../styles/page.css";
import "../styles/about.css";

const team = [
  {
    name: "Øyvind Thune",
    title: "Design Lead",
    image: "/images/authors/user1.png",
    ingress: "Meir informasjon vil komme her.",
  },
  {
    name: "Vilde Ylvisåker",
    title: "Grafisk Designer",
    image: "/images/authors/user2.png",
    ingress: "Meir informasjon vil komme her.",
  },
];

export default function About() {
  return (
    <div className="page">
      <h1>Om oss</h1>
      <p className="page-intro">
        Me jobbar i digdir.no teamet og har ansvar for designet på nettsida. Me
        er opptekne av å lage gode og inkluderende digitale opplevelsar for alle
        som besøker digdir.no. Her kan du bli litt bedre kjent med oss og kva
        som driver oss i arbeidet vårt.
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

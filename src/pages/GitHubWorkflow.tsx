import "../styles/page.css";
import "../styles/github-workflow.css";

const columns = [
  {
    name: "Innboks",
    color: "#93c5fd",
    description:
      "Hit kjem alle nye behov, idéar og forbetringsforslag. Kven som helst i organisasjonen kan melde inn eit behov.",
    limit: null,
  },
  {
    name: "Backlog",
    color: "#a5b4fc",
    description:
      "Behov vi har vurdert som relevante, men som ikkje er prioriterte til arbeid enno.",
    limit: null,
  },
  {
    name: "Epics",
    color: "#c4b5fd",
    description:
      "Større satsingsområde som samlar fleire oppgåver under éin paraply. Vi held maks 3 aktive epics om gongen for å sikre fokus.",
    limit: 4,
  },
  {
    name: "Todo",
    color: "#86efac",
    description:
      "Oppgåver frå aktive epics som er klare til å jobbast med. Vi held maks 10 oppgåver her for å unngå overfylling.",
    limit: 10,
  },
  {
    name: "In Progress",
    color: "#fde68a",
    description:
      "Oppgåver som nokon aktivt jobbar med. Vi held maks 5 samtidige oppgåver for å sikre kvalitet og gjennomføring.",
    limit: 5,
  },
  {
    name: "Ready for Review",
    color: "#fdba74",
    description:
      "Oppgåver som er ferdig utvikla og klare for test og gjennomgang av teamet.",
    limit: null,
  },
  {
    name: "Tested OK",
    color: "#6ee7b7",
    description:
      "Oppgåver som er testa og godkjende. Klare for utrulling til produksjon.",
    limit: null,
  },
  {
    name: "Done",
    color: "#d1d5db",
    description: "Ferdigstilte oppgåver som er rulla ut i produksjon.",
    limit: null,
  },
];

export default function GitHubWorkflow() {
  return (
    <div className="page github-workflow-page">
      <h1>Slik jobbar vi i GitHub</h1>
      <p className="page-intro">
        Vi brukar eit{" "}
        <a
          href="https://github.com/orgs/digdir/projects/49"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Board
        </a>{" "}
        for å organisere og prioritere arbeidet vårt. Boardet gir oss oversikt
        over kva som skjer, kva som er prioritert og kva som ventar. Her
        forklarar vi korleis flyten fungerer og korleis du kan melde inn behov.
      </p>

      {/* Board visualization */}
      <section className="page-section">
        <h2>Flyten i boardet</h2>
        <p>
          Oppgåver flyttar seg frå venstre mot høgre gjennom boardet etter kvart
          som dei blir vurderte, jobba med, testa og ferdigstilte. Vi set
          grenser for kor mange oppgåver som kan vere i kvar kolonne samstundes,
          slik at vi ikkje tek på oss for mykje på ein gong.
        </p>

        <div className="board-flow">
          {columns.map((col) => (
            <div
              key={col.name}
              className="board-column"
              style={{ backgroundColor: col.color + "30" }}
            >
              <div className="board-column-header">
                <span className="board-column-name">{col.name}</span>
                {col.limit && (
                  <span className="board-column-limit">maks {col.limit}</span>
                )}
              </div>
              <p className="board-column-desc">{col.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to submit */}
      <section className="page-section">
        <h2>Melde inn behov</h2>
        <p>
          Har du eit behov, ein idé eller eit forbetringsforslag? Meld det inn
          som eit issue, så hamnar det i innboksen vår. Beskriv behovet så
          tydeleg som mogleg — kva er problemet, kven er påverka, og kvifor er
          det viktig?
        </p>
        <p>
          <a
            href="https://github.com/digdir/digdir.no/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Meld inn eit behov på GitHub →
          </a>
        </p>
      </section>

      {/* Capacity limits explained */}
      <section className="page-section">
        <h2>Kvifor set vi grenser?</h2>
        <p>
          Vi avgrensar kor mange oppgåver som kan vere i kvar kolonne
          samstundes. Dette hjelper oss å:
        </p>
        <ul className="github-list">
          <li>Halde fokus på dei viktigaste oppgåvene</li>
          <li>Fullføre det vi har starta før vi tek på oss noko nytt</li>
          <li>Redusere konteksbytte og auke kvaliteten</li>
          <li>Gjere det enklare å sjå flaskehalsar i prosessen</li>
        </ul>
      </section>

      {/* From inbox to done */}
      <section className="page-section">
        <h2>Frå innboks til ferdig</h2>
        <ol className="github-steps">
          <li>
            <strong>Innboks:</strong> Nokon melder inn eit behov eller ein idé.
          </li>
          <li>
            <strong>Vurdering:</strong> Vi vurderer om behovet er relevant. Viss
            ja, flyttar vi det til backlog. Viss ikkje, lukkar vi det med ei
            grunngjeving.
          </li>
          <li>
            <strong>Epic:</strong> Relaterte oppgåver blir samla under ein epic.
            Vi held maks 4 aktive epics.
          </li>
          <li>
            <strong>Todo:</strong> Oppgåver frå aktive epics blir flytta til
            Todo når dei skal jobbast med (maks 10).
          </li>
          <li>
            <strong>In Progress:</strong> Nokon tek oppgåva og jobbar med ho
            (maks 5 samtidige).
          </li>
          <li>
            <strong>Ready for Review:</strong> Oppgåva er klar for test og
            gjennomgang.
          </li>
          <li>
            <strong>Tested OK:</strong> Oppgåva er testa og godkjend.
          </li>
          <li>
            <strong>Done:</strong> Oppgåva er rulla ut i produksjon.
          </li>
        </ol>
      </section>

      <section className="page-section">
        <h2>Finn oss på GitHub</h2>
        <p>
          <a
            href="https://github.com/orgs/digdir/projects/49"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            Sjå boardet vårt på GitHub →
          </a>
        </p>
      </section>
    </div>
  );
}

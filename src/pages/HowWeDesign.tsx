import "../styles/page.css";

export default function HowWeDesign() {
  return (
    <div className="page">
      <h1>Slik designar me</h1>
      <p className="page-intro">
        Designprosessen vår er iterativ, forskingsdriven og djupt
        samarbeidsorientert. Slik går me frå idé til ferdig løysing.
      </p>

      <section className="page-section">
        <h2>1. Utforsk</h2>
        <p>
          Me startar med å forstå problemområdet gjennom brukarundersøkingar,
          interessentintervju og dataanalyse. Dette hjelper oss å stille dei
          rette spørsmåla før me hoppar til løysingar.
        </p>
      </section>

      <section className="page-section">
        <h2>2. Definer</h2>
        <p>
          Me syntetiserer funn til handlingsretta innsikter, brukarreiser og
          designprinsipp som styrer arbeidet vårt. Tydelege problemstillingar
          held teamet samkøyrt.
        </p>
      </section>

      <section className="page-section">
        <h2>3. Utforsk løysingar</h2>
        <p>
          Gjennom skissering, wireframing og prototyping utforskar me fleire
          retningar før me samlar oss om dei sterkaste konsepta. Me testar
          tidleg og rimeleg.
        </p>
      </section>

      <section className="page-section">
        <h2>4. Bygg og iterer</h2>
        <p>
          Designarar og utviklarar jobbar side om side. Me leverer trinnvise
          forbetringar, måler effekt og forbetrar basert på tilbakemeldingar frå
          den verkelege verda.
        </p>
      </section>
    </div>
  );
}

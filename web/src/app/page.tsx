import styles from "./page.module.css";

const quotes = [
  {
    id: "hadith-night-watch",
    text: "“Dy sy që zjarri nuk do t’i prekë: syri që qan nga frika e Allahut dhe syri që kalon natën në rojë për hir të Allahut.”",
    note:
      "Transmetuar nga Imam Abdullah ibn al-Mubarak në Kitab az-Zuhd (nr. 1257) dhe përcjellë në Sunen e Tirmidhiut (1639).",
  },
  {
    id: "private-tears",
    text: "Ai këshillonte nxënësit që të kërkonin momente vetmie ku lotët e fshehtë të dëshmonin sinqeritetin para Allahut.",
    note:
      "Përmbledhje nga ligjëratat e tij rreth ihsanit dhe pendimit, të përmledhura në kapitujt e Kitab az-Zuhd.",
  },
  {
    id: "soft-heart",
    text: "Sipas mësimeve të tij, përpjekja për një lot të vetëm nga frika e Allahut është shenjë e zemrës së butë dhe shpresë për falje.",
    note:
      "Treguar nga disa prej shokëve të tij në Sham dhe përmendur në përmbledhjet biografike të zuhdit.",
  },
  {
    id: "heart-cure",
    text: "Ai e quante lotin nga frika e Allahut si ilaç që e pastron zemrën dhe e kthen adhurimin në diçka të gjallë.",
    note:
      "Nga porositë e Imam Abdullah ibn al-Mubarak drejtuar shoqërisë së tij të udhëtimeve në Haxh, të transmetuara në librat e zuhdit.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.hero}>
          <span className={styles.badge}>Fjalë të zgjedhura</span>
          <h1>Lotët e sinqeritetit sipas Abdullah ibn al-Mubarak</h1>
          <p>
            Imam Abdullah ibn al-Mubarak (118‒181 H) ishte imam i zuhdit, dijes
            dhe adhurimit. Mësimet e tij rreth pendimit dhe lotit nga frika e
            Allahut preknin zemrat e nxënësve në Kufa, Mekë dhe Sham. Më poshtë
            gjeni disa prej fjalëve dhe transmetimeve që ai përcolli për
            devotshmërinë e fshehtë.
          </p>
        </header>

        <section className={styles.quotesSection}>
          {quotes.map((quote) => (
            <article key={quote.id} className={styles.quoteCard}>
              <p className={styles.quoteText}>{quote.text}</p>
              <p className={styles.quoteSource}>{quote.note}</p>
            </article>
          ))}
        </section>

        <section className={styles.reflectionSection}>
          <h2>Si të përqafojmë këto këshilla</h2>
          <ul>
            <li>
              Krijo momente të vetmisë me Allahun gjatë natës dhe lexo pjesë nga
              Kurani që zbusin zemrën.
            </li>
            <li>
              Shkruaj lutjet dhe pendimet e tua; shkrimi hap dyert për lot të
              sinqertë kur gjuha ngurohet.
            </li>
            <li>
              Kërko shoqëri që të kujton ahiretin, sikurse shoqëria e
              Abdullah ibn al-Mubarakut që gjeneronte devotshmëri dhe përulje.
            </li>
          </ul>
        </section>

        <footer className={styles.footer}>
          <p>
            * Përmbledhje në gjuhën shqipe bazuar në transmetimet e Kitab
            az-Zuhd dhe veprat biografike të Imam Abdullah ibn al-Mubarakut.
          </p>
        </footer>
      </main>
    </div>
  );
}

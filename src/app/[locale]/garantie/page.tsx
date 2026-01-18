import LegalPageLayout from '@/components/LegalPageLayout';

export default function GarantiePage() {
  return (
    <LegalPageLayout title="Garantiebedingungen">
      <div className="space-y-6 text-text-secondary">
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">1. Garantieumfang</h2>
          <p>
            Techn0smart gewährt auf alle durchgeführten Reparaturen eine Garantie von <strong className="text-accent-blue">6 Monaten</strong> ab
            dem Datum der Rückgabe des reparierten Geräts.
          </p>
          <p className="mt-2">
            Die Garantie umfasst:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Kostenlose Nachbesserung bei Mängeln, die auf die durchgeführte Reparatur zurückzuführen sind</li>
            <li>Eingebaute Ersatzteile (sofern von uns bezogen)</li>
            <li>Arbeitsleistung für die ursprünglich beauftragte Reparatur</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">2. Garantieausschlüsse</h2>
          <p>Die Garantie gilt nicht für:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Schäden durch unsachgemäße Handhabung oder Bedienungsfehler</li>
            <li>Schäden durch äußere Einwirkungen (Wasser, Sturz, Hitze, etc.)</li>
            <li>Schäden durch Manipulation oder Reparaturversuche durch Dritte</li>
            <li>Normaler Verschleiß von Komponenten</li>
            <li>Software-Probleme, Viren oder Malware</li>
            <li>Schäden, die nicht im Zusammenhang mit der durchgeführten Reparatur stehen</li>
            <li>Geräte, die nach der Reparatur geöffnet oder manipuliert wurden</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">3. Inanspruchnahme der Garantie</h2>
          <p>
            Um die Garantie in Anspruch zu nehmen, gehen Sie bitte wie folgt vor:
          </p>
          <ol className="list-decimal list-inside mt-2 space-y-2">
            <li>
              Kontaktieren Sie uns telefonisch unter <strong className="text-text-primary">+49 152 5913 7289</strong> oder
              per E-Mail an <a href="mailto:techn0smartffm@gmail.com" className="text-accent-blue hover:underline">techn0smartffm@gmail.com</a>
            </li>
            <li>Beschreiben Sie den aufgetretenen Mangel</li>
            <li>Halten Sie Ihre Reparaturbestätigung/Rechnung bereit</li>
            <li>Bringen Sie das Gerät zu unserer Werkstatt oder senden Sie es ein</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">4. Garantieabwicklung</h2>
          <p>
            (1) Nach Eingang des Geräts prüfen wir, ob der Mangel unter die Garantie fällt.
          </p>
          <p className="mt-2">
            (2) Bei berechtigten Garantieansprüchen erfolgt die Nachbesserung kostenlos.
          </p>
          <p className="mt-2">
            (3) Ist eine Reparatur nicht möglich, wird das eingebaute Ersatzteil kostenlos ersetzt.
          </p>
          <p className="mt-2">
            (4) Die Bearbeitungszeit beträgt in der Regel 3-5 Werktage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">5. Gesetzliche Gewährleistung</h2>
          <p>
            Diese Garantie besteht unabhängig von und zusätzlich zu Ihren gesetzlichen Gewährleistungsrechten.
            Ihre gesetzlichen Rechte werden durch diese Garantie nicht eingeschränkt.
          </p>
          <p className="mt-2">
            Nach deutschem Recht haben Sie bei Mängeln grundsätzlich folgende Rechte:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Nacherfüllung (Reparatur oder Ersatzlieferung)</li>
            <li>Minderung des Kaufpreises</li>
            <li>Rücktritt vom Vertrag (bei erheblichen Mängeln)</li>
            <li>Schadensersatz (bei Verschulden)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">6. Hinweis zur Datensicherung</h2>
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-yellow-200">
              <strong>Wichtig:</strong> Wir übernehmen keine Haftung für Datenverlust. Bitte sichern Sie
              Ihre Daten vor jeder Reparatur. Auch bei Garantiereparaturen können Daten verloren gehen.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">7. Kontakt für Garantiefälle</h2>
          <div className="p-4 bg-primary-700 rounded-lg">
            <p className="text-text-primary font-medium">Techn0smart</p>
            <p>Offenbacher Landstraße 306</p>
            <p>60599 Frankfurt am Main</p>
            <p className="mt-2">Telefon: +49 152 5913 7289</p>
            <p>E-Mail: techn0smartffm@gmail.com</p>
            <p className="mt-2">Öffnungszeiten: Mo-Sa 11:00-19:00</p>
          </div>
        </section>

        <p className="text-sm text-text-muted mt-8">
          Stand: Januar 2025
        </p>
      </div>
    </LegalPageLayout>
  );
}

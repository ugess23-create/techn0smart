import LegalPageLayout from '@/components/LegalPageLayout';

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie-Richtlinie">
      <div className="space-y-6 text-text-secondary">
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Was sind Cookies?</h2>
          <p>
            Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden,
            wenn Sie unsere Website besuchen. Sie ermöglichen es der Website, Ihre Aktionen und Einstellungen
            (wie Anmeldung, Sprache, Schriftgröße und andere Anzeigeeinstellungen) über einen bestimmten
            Zeitraum zu speichern.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Welche Cookies verwenden wir?</h2>

          <h3 className="text-lg font-medium text-text-primary mt-4 mb-2">Notwendige Cookies</h3>
          <p>
            Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert
            werden. Sie werden in der Regel nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt,
            die einer Anfrage nach Diensten entsprechen.
          </p>
          <div className="mt-2 p-4 bg-primary-700 rounded-lg">
            <p><strong className="text-text-primary">cookie-consent</strong></p>
            <p>Speichert Ihre Cookie-Einwilligung</p>
            <p className="text-sm text-text-muted">Ablauf: 1 Jahr</p>
          </div>

          <h3 className="text-lg font-medium text-text-primary mt-4 mb-2">Funktionale Cookies</h3>
          <p>
            Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, z.B. die Speicherung
            Ihrer Spracheinstellungen.
          </p>
          <div className="mt-2 p-4 bg-primary-700 rounded-lg">
            <p><strong className="text-text-primary">NEXT_LOCALE</strong></p>
            <p>Speichert Ihre bevorzugte Sprache</p>
            <p className="text-sm text-text-muted">Ablauf: Session</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Cookies von Drittanbietern</h2>
          <p>
            Unsere Website kann Inhalte von Drittanbietern enthalten (z.B. Google Maps für die Kartenanzeige).
            Diese Dienste können eigene Cookies setzen, auf die wir keinen Einfluss haben.
          </p>

          <h3 className="text-lg font-medium text-text-primary mt-4 mb-2">Google Maps</h3>
          <p>
            Wir verwenden Google Maps zur Anzeige unseres Standorts. Dabei können Cookies von Google
            gesetzt werden. Weitere Informationen finden Sie in der{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:underline"
            >
              Datenschutzerklärung von Google
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Wie können Sie Cookies verwalten?</h2>
          <p>
            Sie können Cookies über Ihre Browsereinstellungen verwalten und löschen. Hier finden Sie
            Anleitungen für die gängigsten Browser:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/de-de/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-löschen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p className="mt-4">
            Bitte beachten Sie, dass die Deaktivierung von Cookies die Funktionalität dieser Website
            beeinträchtigen kann.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Ihre Einwilligung</h2>
          <p>
            Beim ersten Besuch unserer Website werden Sie gebeten, Ihre Einwilligung für die Verwendung
            von Cookies zu geben. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie Ihre
            Cookies löschen und die Website erneut besuchen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Kontakt</h2>
          <p>
            Bei Fragen zu unserer Cookie-Richtlinie kontaktieren Sie uns bitte unter:{' '}
            <a href="mailto:techn0smartffm@gmail.com" className="text-accent-blue hover:underline">
              techn0smartffm@gmail.com
            </a>
          </p>
        </section>

        <p className="text-sm text-text-muted mt-8">
          Stand: Januar 2025
        </p>
      </div>
    </LegalPageLayout>
  );
}

import LegalPageLayout from '@/components/LegalPageLayout';

export default function WiderrufPage() {
  return (
    <LegalPageLayout title="Widerrufsbelehrung">
      <div className="space-y-6 text-text-secondary">
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Widerrufsrecht</h2>
          <p>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
          </p>
          <p className="mt-2">
            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
          </p>
          <p className="mt-2">
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns:
          </p>
          <div className="mt-2 p-4 bg-primary-700 rounded-lg">
            <p className="text-text-primary font-medium">Techn0smart</p>
            <p>Raikh Oleksandr</p>
            <p>Offenbacher Landstraße 306</p>
            <p>60599 Frankfurt am Main</p>
            <p className="mt-2">Telefon: +49 152 5913 7289</p>
            <p>E-Mail: techn0smartffm@gmail.com</p>
          </div>
          <p className="mt-4">
            mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief oder E-Mail) über
            Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte
            Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
          </p>
          <p className="mt-2">
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
            Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Folgen des Widerrufs</h2>
          <p>
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten
            haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus
            ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste
            Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
            zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist.
          </p>
          <p className="mt-2">
            Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen
            Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart;
            in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Besondere Hinweise für Reparaturdienstleistungen</h2>
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-yellow-200">
              <strong>Wichtig:</strong> Wenn Sie verlangt haben, dass die Dienstleistungen während der
              Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem
              Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts
              hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich
              zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.
            </p>
          </div>
          <p className="mt-4">
            Das Widerrufsrecht erlischt bei einem Vertrag zur Erbringung von Dienstleistungen, wenn der
            Unternehmer die Dienstleistung vollständig erbracht hat und mit der Ausführung der Dienstleistung
            erst begonnen hat, nachdem der Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat und
            gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger
            Vertragserfüllung durch den Unternehmer verliert.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Muster-Widerrufsformular</h2>
          <p className="mb-4">
            (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden
            Sie es zurück.)
          </p>
          <div className="p-4 bg-primary-700 rounded-lg space-y-2">
            <p>An:</p>
            <p>Techn0smart</p>
            <p>Raikh Oleksandr</p>
            <p>Offenbacher Landstraße 306</p>
            <p>60599 Frankfurt am Main</p>
            <p>E-Mail: techn0smartffm@gmail.com</p>
            <p className="mt-4">
              Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über die
              Erbringung der folgenden Dienstleistung:
            </p>
            <p className="border-b border-primary-500 mt-2 pb-2">________________________________</p>
            <p className="mt-2">Bestellt am (*) / erhalten am (*):</p>
            <p className="border-b border-primary-500 mt-2 pb-2">________________________________</p>
            <p className="mt-2">Name des/der Verbraucher(s):</p>
            <p className="border-b border-primary-500 mt-2 pb-2">________________________________</p>
            <p className="mt-2">Anschrift des/der Verbraucher(s):</p>
            <p className="border-b border-primary-500 mt-2 pb-2">________________________________</p>
            <p className="mt-4">Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
            <p className="border-b border-primary-500 mt-2 pb-2">________________________________</p>
            <p className="mt-2">Datum:</p>
            <p className="border-b border-primary-500 mt-2 pb-2">________________________________</p>
            <p className="mt-4 text-sm text-text-muted">(*) Unzutreffendes streichen.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">Ausschluss des Widerrufsrechts</h2>
          <p>
            Das Widerrufsrecht besteht nicht bei Verträgen:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              zur Erbringung von Dienstleistungen, wenn der Unternehmer die Dienstleistung vollständig
              erbracht hat und mit der Ausführung der Dienstleistung erst begonnen hat, nachdem der
              Verbraucher dazu seine ausdrückliche Zustimmung gegeben hat
            </li>
            <li>
              zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine
              individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die
              eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind
            </li>
          </ul>
        </section>

        <p className="text-sm text-text-muted mt-8">
          Stand: Januar 2025
        </p>
      </div>
    </LegalPageLayout>
  );
}

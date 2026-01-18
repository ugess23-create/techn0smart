import LegalPageLayout from '@/components/LegalPageLayout';

export default function AGBPage() {
  return (
    <LegalPageLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <div className="space-y-6 text-text-secondary">
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">§ 1 Geltungsbereich</h2>
          <p>
            (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Techn0smart,
            Raikh Oleksandr, Offenbacher Landstraße 306, 60599 Frankfurt am Main (nachfolgend „Auftragnehmer")
            und dem Kunden (nachfolgend „Auftraggeber") über Reparaturleistungen an elektronischen Geräten.
          </p>
          <p className="mt-2">
            (2) Abweichende, entgegenstehende oder ergänzende AGB des Auftraggebers werden nur dann und
            insoweit Vertragsbestandteil, als der Auftragnehmer ihrer Geltung ausdrücklich zugestimmt hat.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">§ 2 Vertragsschluss</h2>
          <p>
            (1) Die Darstellung der Dienstleistungen auf der Website stellt kein rechtlich bindendes Angebot,
            sondern eine Aufforderung zur Abgabe eines Angebots dar.
          </p>
          <p className="mt-2">
            (2) Ein Reparaturvertrag kommt zustande, wenn der Auftragnehmer den Reparaturauftrag des
            Auftraggebers schriftlich, per E-Mail oder durch Entgegennahme des Geräts zur Reparatur annimmt.
          </p>
          <p className="mt-2">
            (3) Vor Beginn der Reparatur wird ein Kostenvoranschlag erstellt. Die Reparatur wird erst nach
            Zustimmung des Auftraggebers zum Kostenvoranschlag durchgeführt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">§ 3 Leistungsumfang</h2>
          <p>
            (1) Der Auftragnehmer führt Reparaturen an folgenden Geräten durch:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Laptops und Notebooks</li>
            <li>Smartphones und Tablets</li>
            <li>Spielkonsolen (PlayStation, Xbox, Nintendo Switch etc.)</li>
            <li>Monitore und Bildschirme</li>
            <li>Kopfhörer und Audio-Equipment</li>
          </ul>
          <p className="mt-2">
            (2) Reparaturen an Haushaltsgeräten, sehr alten oder veralteten Geräten werden nicht durchgeführt.
          </p>
          <p className="mt-2">
            (3) Der genaue Umfang der Reparaturleistung ergibt sich aus dem jeweiligen Kostenvoranschlag
            bzw. der Auftragsbestätigung.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">§ 4 Preise und Zahlungsbedingungen</h2>
          <p>
            (1) Alle Preise verstehen sich in Euro und sind Endpreise inkl. der gesetzlichen Mehrwertsteuer.
          </p>
          <p className="mt-2">
            (2) Die Diagnosegebühr beträgt gemäß aktuellem Preisverzeichnis. Bei Durchführung der Reparatur
            wird diese Gebühr auf den Gesamtpreis angerechnet.
          </p>
          <p className="mt-2">
            (3) Die Zahlung erfolgt bei Abholung des reparierten Geräts. Akzeptierte Zahlungsmittel:
            Barzahlung, EC-Karte, Überweisung.
          </p>
          <p className="mt-2">
            (4) Bei Überschreitung des Kostenvoranschlags um mehr als 15% wird der Auftraggeber unverzüglich
            informiert und um Zustimmung zur Fortsetzung der Reparatur gebeten.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">§ 5 Lieferzeit und Abholung</h2>
          <p>
            (1) Die voraussichtliche Reparaturdauer wird im Kostenvoranschlag angegeben.
          </p>
          <p className="mt-2">
            (2) Der Auftraggeber wird nach Fertigstellung der Reparatur benachrichtigt.
          </p>
          <p className="mt-2">
            (3) Das Gerät ist innerhalb von 4 Wochen nach Benachrichtigung abzuholen. Nach Ablauf dieser
            Frist werden Lagergebühren von 2 EUR pro Tag berechnet.
          </p>
          <p className="mt-2">
            (4) Wird das Gerät innerhalb von 3 Monaten nach Benachrichtigung nicht abgeholt, ist der
            Auftragnehmer berechtigt, das Gerät nach vorheriger Ankündigung zu verwerten.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">§ 6 Gewährleistung und Garantie</h2>
          <p>
            (1) Für durchgeführte Reparaturen gewährt der Auftragnehmer eine Garantie von 6 Monaten auf
            die erbrachten Arbeitsleistungen und eingebauten Ersatzteile.
          </p>
          <p className="mt-2">
            (2) Die Garantie umfasst die kostenlose Nachbesserung, wenn der Mangel auf die durchgeführte
            Reparatur zurückzuführen ist.
          </p>
          <p className="mt-2">
            (3) Von der Garantie ausgeschlossen sind:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Schäden durch unsachgemäße Handhabung</li>
            <li>Schäden durch Fremdeinwirkung (Wasser, Sturz, etc.)</li>
            <li>Normaler Verschleiß</li>
            <li>Software-Probleme</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">§ 7 Haftung</h2>
          <p>
            (1) Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des
            Körpers oder der Gesundheit.
          </p>
          <p className="mt-2">
            (2) Für sonstige Schäden haftet der Auftragnehmer nur bei Vorsatz oder grober Fahrlässigkeit.
          </p>
          <p className="mt-2">
            (3) Der Auftragnehmer haftet nicht für den Verlust von Daten. Der Auftraggeber ist verpflichtet,
            vor Übergabe des Geräts eine Datensicherung durchzuführen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">§ 8 Datenschutz</h2>
          <p>
            Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-3">§ 9 Schlussbestimmungen</h2>
          <p>
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
          </p>
          <p className="mt-2">
            (2) Gerichtsstand für alle Streitigkeiten ist Frankfurt am Main, sofern der Auftraggeber
            Kaufmann ist.
          </p>
          <p className="mt-2">
            (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der
            übrigen Bestimmungen unberührt.
          </p>
        </section>

        <p className="text-sm text-text-muted mt-8">
          Stand: Januar 2025
        </p>
      </div>
    </LegalPageLayout>
  );
}

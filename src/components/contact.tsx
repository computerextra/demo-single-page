import streetMap from "../assets/street-map.png";

export default function Contact() {
  return (
    <div id="contact" className="py-12 bg-base-100 w-full lg:w-[60vw] mx-auto">
      <h2 className="text-center text-5xl font-bold">So erreichen Sie uns</h2>
      <div className="flex flex-row justify-between align-baseline items-center mt-12">
        <div className="flex flex-col max-w-max">
          <span className="text-xl">Ihre Firma</span>
          <span>Musterstraße 1</span>
          <span>12345 Musterstadt</span>
          <div className="divider"></div>
          <div className="flex flex-row justify-between gap-4">
            <span>Telefon:</span>
            <a href="tel:0123/45678">0123/45678</a>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <span>E-Mail:</span>
            <a href="mailto:info@ihre-firma.de">info@ihre-firma.de</a>
          </div>
        </div>
        <img src={streetMap} className="object-cover" />
      </div>
      <div className="divider"></div>
      <h3 className="text-4xl text-center my-6 font-semibold">
        Schreiben Sie uns direkt
      </h3>
      <div className="flex justify-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Ihre Email-Adresse</label>
              <input
                type="email"
                className="input"
                placeholder="muster@beispiel.de"
              />
              <label className="fieldset-label">Ihre Nachricht</label>
              <textarea
                className="textarea"
                placeholder="Ich finde Ihre Webseite super, ich hätte auch gerne eine. Bitte nehmen Sie kontakt mit mir auf."
                rows={4}
              ></textarea>
              <button className="btn btn-neutral mt-4" disabled>
                Nachricht senden
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

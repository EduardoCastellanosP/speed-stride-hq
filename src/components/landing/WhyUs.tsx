import React, { useState } from "react";
import { Send, Sparkles, ArrowLeft, QrCode, CheckCircle2, FileText, X, Download } from "lucide-react";
import qrNequi from "@/assets/Qr recortado.png";

export function WhyUs() {
  const [step, setStep] = useState<1 | 2>(1);
  const [showConsentModal, setShowConsentModal] = useState(false);

  const [formData, setFormData] = useState({
    consentimiento: false,
    nombre: "",
    distancia: "",
    tipoDocumento: "CC",
    numeroDocumento: "",
    edad: "",
    genero: "Masculino",
    talla: "M",
    telefono: "",
    telefonoEmergencia: "",
    enfermedad: "",
    eps: "",
    tipoSangre: "O+",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const isFormValid =
    formData.consentimiento === true &&
    formData.nombre.trim() !== "" &&
    formData.distancia !== "" &&
    formData.numeroDocumento.trim() !== "" &&
    formData.edad.trim() !== "" &&
    formData.telefono.trim() !== "" &&
    formData.telefonoEmergencia.trim() !== "" &&
    formData.eps.trim() !== "" &&
    formData.enfermedad.trim() !== "";

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setStep(2);
    }
  };

  const handleSendToWhatsApp = () => {
    const phoneNumber = "573023917253";
    const text = 
      `*INSCRIPCION OFICIAL - ASTREA*\n\n` +
      `\u{1F464} *Nombre:* ${formData.nombre}\n` +
      `\u{1F3C3} *Distancia:* ${formData.distancia}\n` +
      `\u{1F4C4} *Documento:* ${formData.tipoDocumento} - ${formData.numeroDocumento}\n` +
      `\u{1F382} *Edad:* ${formData.edad} anos\n` +
      `\u{1F6BB} *Genero:* ${formData.genero}\n` +
      `\u{1F455} *Talla:* ${formData.talla}\n` +
      `\u{1F4F1} *Telefono:* ${formData.telefono}\n` +
      `\u{1F6A8} *Contacto de Emergencia:* ${formData.telefonoEmergencia}\n` +
      `\u{1F3E5} *EPS:* ${formData.eps}\n` +
      `\u{1FA78} *Tipo de Sangre:* ${formData.tipoSangre}\n` +
      `\u{26A0}\u{FE0F} *Enfermedad o Alergia:* ${formData.enfermedad}\n` +
      `\u{2705} *Consentimiento:* Aceptado (Terminos y Exoneracion leidos)\n\n` +
      `_Pago realizado. Adjunto mi comprobante por este medio._`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="about" className="bg-background px-5 pb-24 md:px-8 md:pb-32 relative">
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card/40 p-6 md:p-12">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            INSCRIPCIÓN ABIERTA
          </span>
          <h2 className="mt-6 text-3xl font-black uppercase tracking-tight text-foreground md:text-4xl">
            {step === 1 ? "FORMULARIO DE INSCRIPCIÓN" : "REALIZA TU PAGO"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {step === 1 
              ? "Completa todos los campos obligatorios para avanzar." 
              : "Escanea el código QR de Nequi o descárgalo para pagar."}
          </p>
        </div>

        {/* PASO 1: FORMULARIO */}
        {step === 1 && (
          <form onSubmit={handleNextToPayment} className="space-y-6">
            
            {/* Nombre Completo */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Carlos Pérez"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            {/* TARJETAS DE SELECCIÓN DE DISTANCIA */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-3">
                Selecciona tu distancia *
              </label>
              <div className="grid grid-cols-2 gap-4">
                {["3K", "7K"].map((distancia) => (
                  <button
                    key={distancia}
                    type="button"
                    onClick={() => setFormData({ ...formData, distancia })}
                    className={`py-4 rounded-xl border-2 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.distancia === distancia
                        ? "bg-accent border-accent text-accent-foreground shadow-lg shadow-accent/20"
                        : "border-border bg-background text-muted-foreground hover:border-accent/50"
                    }`}
                  >
                    {distancia}
                  </button>
                ))}
              </div>
            </div>

            {/* Fila: Tipo de Documento, Número de Documento y Edad */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                  Tipo de Documento *
                </label>
                <select
                  name="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="CC">Cédula (CC)</option>
                  <option value="TI">Tarjeta de Identidad (TI)</option>
                  <option value="CE">Cédula Extranjería (CE)</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                  Nº de Documento *
                </label>
                <input
                  type="text"
                  name="numeroDocumento"
                  required
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  placeholder="Ej. 1098765432"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                  Edad *
                </label>
                <input
                  type="number"
                  name="edad"
                  required
                  min="1"
                  max="120"
                  value={formData.edad}
                  onChange={handleChange}
                  placeholder="Ej. 28"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Fila: Género y Talla */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                  Género *
                </label>
                <select
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                  Talla de Camisa *
                </label>
                <select
                  name="talla"
                  value={formData.talla}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
            </div>

            {/* Fila: Teléfonos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                  Teléfono / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ej. +57 300 1234567"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                  Teléfono de Emergencia *
                </label>
                <input
                  type="tel"
                  name="telefonoEmergencia"
                  required
                  value={formData.telefonoEmergencia}
                  onChange={handleChange}
                  placeholder="Contacto en caso de emergencia"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Fila: EPS y Tipo de Sangre */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                  EPS *
                </label>
                <input
                  type="text"
                  name="eps"
                  required
                  value={formData.eps}
                  onChange={handleChange}
                  placeholder="Ej. Sura, Sanitas, etc."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                  Tipo de Sangre *
                </label>
                <select
                  name="tipoSangre"
                  value={formData.tipoSangre}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>

            {/* Enfermedad o Alergia */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                ¿Sufre de alguna enfermedad o condición médica? *
              </label>
              <textarea
                name="enfermedad"
                required
                rows={2}
                value={formData.enfermedad}
                onChange={handleChange}
                placeholder="Escriba 'Ninguna' si no padece ninguna, o detalle su condición..."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Consentimiento */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                name="consentimiento"
                id="consentimiento"
                required
                checked={formData.consentimiento}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-border accent-accent text-accent-foreground focus:ring-accent cursor-pointer"
              />
              <label htmlFor="consentimiento" className="text-xs text-muted-foreground leading-relaxed">
                He leído y acepto el{" "}
                <button
                  type="button"
                  onClick={() => setShowConsentModal(true)}
                  className="text-foreground font-semibold underline hover:text-accent transition-colors inline-block cursor-pointer"
                >
                  consentimiento informado y exoneración de responsabilidad
                </button>{" "}
                para participar en el evento. *
              </label>
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-4 rounded-xl font-bold uppercase tracking-[0.1em] text-sm flex items-center justify-center gap-2 transition-all ${
                isFormValid
                  ? "bg-accent text-accent-foreground hover:scale-[1.01] cursor-pointer shadow-lg shadow-accent/20"
                  : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
              }`}
            >
              Continuar al Pago
            </button>
          </form>
        )}

        {/* PASO 2: PAGO */}
        {step === 2 && (
          <div className="space-y-6 text-center">
            <div className="bg-background border border-border p-6 rounded-2xl max-w-sm mx-auto flex flex-col items-center">
              <div className="bg-accent/10 p-3 rounded-full mb-3">
                <QrCode className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Escanea tu código Nequi</h3>
              <p className="text-xs text-muted-foreground mt-1 mb-4">
                Escanea el código QR desde tu app Nequi o descárgalo para realizar el pago.
              </p>
              <h2 className="text-2xl font-black text-accent mb-4">Llave Bre-b <br /> 3023917253</h2>
              <div className="w-56 h-56 bg-[#280D3B] rounded-2xl border-4 border-border flex items-center justify-center p-3 shadow-inner overflow-hidden relative">
                <img src={qrNequi} alt="QR Nequi" className="w-full h-full object-contain rounded-xl" />
              </div>
              <a 
                href={qrNequi} 
                download="QR-Nequi-Katiusca.jpg"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 hover:bg-accent/20 px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Descargar Imagen QR
              </a>
            </div>

            <div className="bg-accent/5 border border-accent/20 p-4 rounded-xl text-left max-w-md mx-auto flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Una vez realizado el pago, haz clic en el botón de abajo. Se abrirá tu WhatsApp con todos tus datos registrados, y <strong className="text-foreground">deberás adjuntar tu comprobante de pago por el chat</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full sm:w-1/3 py-3 rounded-xl font-bold uppercase tracking-[0.1em] text-xs border border-border text-muted-foreground hover:text-foreground flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver
              </button>

              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full sm:w-2/3 py-4 rounded-xl font-bold uppercase tracking-[0.1em] text-sm bg-accent text-accent-foreground hover:scale-[1.01] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-accent/20"
              >
                <Send className="w-4 h-4" />
                Ya hice el pago - Enviar a WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MODAL DE CONSENTIMIENTO */}
      {showConsentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-card border border-border w-full max-w-2xl max-h-[85vh] rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
              <div className="flex items-center gap-2 text-foreground">
                <FileText className="w-5 h-5 text-accent" />
                <h3 className="font-black text-lg uppercase tracking-wider">Consentimiento Informado y Exoneración</h3>
              </div>
              <button onClick={() => setShowConsentModal(false)} className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="overflow-y-auto space-y-4 text-xs md:text-sm text-muted-foreground pr-2 leading-relaxed">
              <p className="font-semibold text-foreground">
                Por medio del presente documento, declaro que conozco y acepto los términos y condiciones de participación para el evento deportivo.
              </p>
              
              <p>
                <strong>1. Exoneración de Responsabilidad:</strong> Reconozco y acepto voluntariamente que la práctica de actividades deportivas conlleva riesgos físicos inherentes. Por lo tanto, <strong>los organizadores, patrocinadores, directores y colaboradores del evento NO se hacen responsables</strong> por accidentes, lesiones físicas, incapacidades, daños materiales, pérdida de pertenencias, ni por ningún tipo de perjuicio personal o de terceros que pueda sufrir antes, durante o después de la carrera.
              </p>

              <p>
                <strong>2. Estado de Salud Óptimo:</strong> Certifico bajo la gravedad del juramento que me encuentro en condiciones físicas, médicas y psicológicas óptimas para participar en este evento deportivo. Eximo a la organización de cualquier reclamación derivada de afecciones médicas preexistentes o emergencias de salud que surjan durante el recorrido.
              </p>

              <p>
                <strong>3. Atención Médica de Emergencia:</strong> Autorizo al equipo organizador y al personal médico presente a brindarme primeros auxilios y a realizar traslados hospitalarios de emergencia en caso de ser necesario, asumiendo los costos médicos que esto pueda generar.
              </p>

              <p>
                <strong>4. Uso de Imagen:</strong> Autorizo de manera libre, voluntaria y gratuita a la organización para capturar y utilizar fotografías, videos y material audiovisual de mi participación en el evento con fines promocionales y de difusión pública.
              </p>

              <p className="pt-2 text-foreground font-medium">
                Al marcar la casilla de aceptación en el formulario, confirmo que he leído detenidamente este documento, comprendo su contenido en su totalidad y asumo la responsabilidad absoluta de mi participación.
              </p>
            </div>

            <div className="border-t border-border pt-4 mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setFormData({ ...formData, consentimiento: true });
                  setShowConsentModal(false);
                }}
                className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-bold uppercase tracking-[0.1em] text-xs hover:scale-105 transition-all cursor-pointer shadow-lg shadow-accent/20"
              >
                Aceptar y Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
import React, { useState } from "react";
import { Send, Sparkles, ArrowLeft, QrCode, CheckCircle2 } from "lucide-react";

export function WhyUs() {
  // Estado para controlar los pasos: 1 = Formulario, 2 = Pago con QR
  const [step, setStep] = useState<1 | 2>(1);

  // Estados de todos los campos del formulario
  const [formData, setFormData] = useState({
    consentimiento: false,
    nombre: "",
    tipoDocumento: "CC",
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

  // Validación estricta del Paso 1
  const isFormValid =
    formData.consentimiento === true &&
    formData.nombre.trim() !== "" &&
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
      `*INSCRIPCIÓN OFICIAL - ASTREA SE MUEVE 2.0*%0A%0A` +
      `👤 *Nombre:* ${formData.nombre}%0A` +
      `📄 *Documento:* ${formData.tipoDocumento}%0A` +
      `🎂 *Edad:* ${formData.edad} años%0A` +
      `🚻 *Género:* ${formData.genero}%0A` +
      `👕 *Talla:* ${formData.talla}%0A` +
      `📱 *Teléfono:* ${formData.telefono}%0A` +
      `🚨 *Contacto Emergencia:* ${formData.telefonoEmergencia}%0A` +
      `🏥 *EPS:* ${formData.eps}%0A` +
      `🩸 *Tipo de Sangre:* ${formData.tipoSangre}%0A` +
      `⚠️ *Enfermedad / Alergia:* ${formData.enfermedad}%0A` +
      `✅ *Consentimiento:* ${formData.consentimiento ? "Sí aceptado" : "No aceptado"}%0A%0A` +
      `_¡Pago realizado! Adjunto mi comprobante por este medio._`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };
  return (
    <section id="about" className="bg-background px-5 pb-24 md:px-8 md:pb-32">
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
              : "Escanea el código QR y envía tu comprobante."}
          </p>
        </div>

        {/* ================= PASO 1: FORMULARIO ================= */}
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

            {/* Fila: Tipo de Documento y Edad */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <option value="CC">Cédula de Ciudadanía (CC)</option>
                  <option value="TI">Tarjeta de Identidad (TI)</option>
                  <option value="CE">Cédula de Extranjería (CE)</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
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

            {/* Casilla de Consentimiento */}
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
              <label htmlFor="consentimiento" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
                Acepto el <span className="text-foreground font-semibold underline">consentimiento informado</span>, el tratamiento de mis datos personales y declaro estar en condiciones óptimas de salud para participar en las actividades. *
              </label>
            </div>

            {/* Botón Siguiente (Validado) */}
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

        {/* ================= PASO 2: PAGO Y QR ================= */}
        {step === 2 && (
          <div className="space-y-6 text-center">
            
            <div className="bg-background border border-border p-6 rounded-2xl max-w-sm mx-auto flex flex-col items-center">
              <div className="bg-accent/10 p-3 rounded-full mb-3">
                <QrCode className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Realizar el pago aquí</h3>
              <p className="text-xs text-muted-foreground mt-1 mb-4">
                Escanea el código QR con tu aplicación bancaria para realizar el pago de tu inscripción.
              </p>

              {/* Contenedor del código QR (Aquí puedes reemplazar este div por tu etiqueta <img src="tu-qr.png" /> cuando lo tengas) */}
              <div className="w-48 h-48 bg-white rounded-xl border-4 border-border flex items-center justify-center p-2 shadow-inner">
                <div className="text-black font-bold text-xs text-center border-2 border-dashed border-gray-400 w-full h-full flex items-center justify-center p-2">
                  [ Aquí va tu Imagen QR de Pago ]
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border border-accent/20 p-4 rounded-xl text-left max-w-md mx-auto flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Una vez realizado el pago, haz clic en el botón de abajo. Se abrirá tu WhatsApp con todos tus datos registrados, y <strong className="text-foreground">deberás enviar tu comprobante de pago por el chat</strong>.
              </p>
            </div>

            {/* Botones de acción */}
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
    </section>
  );
}
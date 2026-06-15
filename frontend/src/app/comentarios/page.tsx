"use client";
import React, { useEffect, useState } from 'react';
import { Star, MessageCircle, Send, ThumbsUp, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/store/useStore';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

const defaultTestimonials: Testimonial[] = [
  { id: 1, name: 'María Gómez', rating: 5, comment: '¡Excelente servicio! Los productos siempre llegan súper frescos y muy bien empacados. El delivery es rapidísimo.', date: '10/06/2026', verified: true },
  { id: 2, name: 'Carlos Rodríguez', rating: 4, comment: 'Muy buena variedad de frutas y verduras. Me gusta mucho la atención al cliente, resuelven cualquier duda al instante.', date: '08/06/2026', verified: true },
  { id: 3, name: 'Ana Martínez', rating: 5, comment: 'Me encanta comprar aquí, la calidad de la carne es superior a cualquier otro supermercado. Totalmente recomendado.', date: '01/06/2026', verified: true },
  { id: 4, name: 'José Fernández', rating: 5, comment: 'Los precios son justos y la calidad es increíble. Además la página es muy fácil de usar.', date: '25/05/2026', verified: true },
];

export default function ComentariosPage() {
  const user = useStore(state => state.user);
  const orders = useStore(state => state.orders);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [mounted, setMounted] = useState(false);

  // Form state
  const [form, setForm] = useState({ name: '', comment: '', rating: 5 });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Has the user placed at least one order? (verified badge)
  const isVerified = orders.length > 0;

  useEffect(() => {
    setMounted(true);
    if (user) setForm(f => ({ ...f, name: user.name }));
    const saved = localStorage.getItem('ananas-testimonials');
    if (saved) {
      const parsed: Testimonial[] = JSON.parse(saved);
      setTestimonials(parsed.length > 0 ? [...parsed, ...defaultTestimonials] : defaultTestimonials);
    } else {
      setTestimonials(defaultTestimonials);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) { setFormError('Por favor ingresa tu nombre.'); return; }
    if (form.comment.trim().length < 10) { setFormError('El comentario debe tener al menos 10 caracteres.'); return; }
    setFormError('');

    const today = new Date();
    const dateStr = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
    const newReview: Testimonial = {
      id: Date.now(),
      name: form.name.trim(),
      rating: form.rating,
      comment: form.comment.trim(),
      date: dateStr,
      verified: isVerified,
    };

    const saved = localStorage.getItem('ananas-testimonials');
    const existing: Testimonial[] = saved ? JSON.parse(saved) : [];
    const updated = [newReview, ...existing];
    localStorage.setItem('ananas-testimonials', JSON.stringify(updated));
    setTestimonials([newReview, ...testimonials]);
    setSubmitted(true);
    setForm(f => ({ ...f, comment: '', rating: 5 }));
    setTimeout(() => setSubmitted(false), 4000);
  };

  // Average rating
  const avg = testimonials.length > 0
    ? (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)
    : '5.0';

  if (!mounted) return null;

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-ananas-green/10 rounded-full mb-4 text-ananas-green">
            <MessageCircle size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight">
            Comentarios y Reseñas
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Descubre lo que nuestros clientes opinan sobre la frescura, calidad y el servicio de Ananas.
          </p>

          {/* Stats bar */}
          <div className="inline-flex items-center gap-6 mt-6 bg-white border border-gray-100 rounded-2xl px-6 py-3 shadow-sm">
            <div className="text-center">
              <p className="text-3xl font-black text-ananas-green">{avg}</p>
              <div className="flex gap-0.5 justify-center mt-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={12} className={parseFloat(avg) >= i ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'} />
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-gray-100" />
            <div className="text-center">
              <p className="text-3xl font-black text-gray-800">{testimonials.length}</p>
              <p className="text-xs text-gray-400 font-medium">Reseñas</p>
            </div>
            <div className="w-px h-10 bg-gray-100" />
            <div className="text-center">
              <p className="text-3xl font-black text-gray-800">{testimonials.filter(t => t.verified).length}</p>
              <p className="text-xs text-gray-400 font-medium">Verificadas</p>
            </div>
          </div>
        </div>

        {/* Review form */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-xl font-black text-gray-800 mb-1">Deja tu reseña</h2>
          <p className="text-sm text-gray-500 mb-6">
            {isVerified ? '✅ Tu compra verificada te da el badge "Comprador verificado".' : 'Comparte tu experiencia con la comunidad.'}
          </p>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-4 py-3 mb-4 font-bold text-sm"
              >
                <CheckCircle size={18} /> ¡Gracias por tu reseña! Ya aparece en la lista.
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Tu nombre</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Ej: María González"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ananas-green/30 focus:border-ananas-green transition"
              />
            </div>

            {/* Star rating picker */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Tu calificación</label>
              <div className="flex gap-2">
                {[1,2,3,4,5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => setForm(f => ({ ...f, rating: star }))}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={32}
                      className={(hoveredStar || form.rating) >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm font-bold text-gray-500 self-center">
                  {['', 'Muy malo', 'Malo', 'Regular', 'Bueno', 'Excelente'][hoveredStar || form.rating]}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Tu comentario</label>
              <textarea
                value={form.comment}
                onChange={e => setForm(f => ({ ...f, comment: e.target.value }))}
                placeholder="Cuéntanos tu experiencia con el delivery, la calidad de los productos, la atención..."
                rows={4}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ananas-green/30 focus:border-ananas-green transition resize-none"
              />
              <p className="text-xs text-gray-400 mt-1">{form.comment.length} / mínimo 10 caracteres</p>
            </div>

            {formError && (
              <p className="text-sm text-red-500 font-bold">{formError}</p>
            )}

            <button
              type="submit"
              className="w-full bg-ananas-green text-white py-3 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-ananas-dark transition shadow-md shadow-ananas-green/20"
            >
              <Send size={18} /> Publicar Reseña
            </button>
          </form>
        </div>

        {/* Reviews list */}
        <div className="grid gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={`${t.id}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ananas-green to-ananas-dark flex items-center justify-center text-white font-bold text-xl shadow-sm shrink-0">
                    {t.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-800">{t.name}</h3>
                      {t.verified && (
                        <span className="inline-flex items-center gap-1 bg-green-50 text-green-600 text-[10px] font-black px-2 py-0.5 rounded-full border border-green-200">
                          <ThumbsUp size={10} /> Verificado
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">{t.date}</p>
                  </div>
                </div>
                <div className="flex gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100 w-fit">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed">
                &ldquo;{t.comment}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

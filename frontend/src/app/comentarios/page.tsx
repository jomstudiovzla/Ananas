"use client";
import React, { useEffect, useState } from 'react';
import { Star, MessageCircle, User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const defaultTestimonials: Testimonial[] = [
  { id: 1, name: 'María Gómez', rating: 5, comment: '¡Excelente servicio! Los productos siempre llegan súper frescos y muy bien empacados. El delivery es rapidísimo.', date: '10/06/2026' },
  { id: 2, name: 'Carlos Rodríguez', rating: 4, comment: 'Muy buena variedad de frutas y verduras. Me gusta mucho la atención al cliente, resuelven cualquier duda al instante.', date: '08/06/2026' },
  { id: 3, name: 'Ana Martínez', rating: 5, comment: 'Me encanta comprar aquí, la calidad de la carne es superior a cualquier otro supermercado. Totalmente recomendado.', date: '01/06/2026' },
  { id: 4, name: 'José Fernández', rating: 5, comment: 'Los precios son justos y la calidad es increíble. Además la página es muy fácil de usar.', date: '25/05/2026' },
];

export default function ComentariosPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTestimonials = localStorage.getItem('ananas-testimonials');
    if (savedTestimonials) {
      const parsed = JSON.parse(savedTestimonials);
      if (parsed.length > 0) {
        setTestimonials([...parsed, ...defaultTestimonials]);
      } else {
        setTestimonials(defaultTestimonials);
      }
    } else {
      setTestimonials(defaultTestimonials);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-ananas-green/10 rounded-full mb-4 text-ananas-green">
            <MessageCircle size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight">Comentarios y Reseñas</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Descubre lo que nuestros clientes opinan sobre la frescura, calidad y el servicio de Ananas. 
            ¡Tu experiencia es lo más importante para nosotros!
          </p>
        </div>

        <div className="grid gap-6">
          {testimonials.map((t, index) => (
            <div 
              key={`${t.id}-${index}`} 
              className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ananas-green to-ananas-dark flex items-center justify-center text-white font-bold text-xl shadow-sm">
                    {t.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{t.name}</h3>
                    <p className="text-xs text-gray-400 font-medium">{t.date}</p>
                  </div>
                </div>
                <div className="flex gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100 w-fit">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed italic">
                "{t.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

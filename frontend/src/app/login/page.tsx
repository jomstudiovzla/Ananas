"use client";
import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, ShieldCheck, Star, Truck, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { auth, db } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const PERKS = [
  { icon: Star,       text: 'Acumula puntos Club Ananas con cada compra' },
  { icon: Truck,      text: 'Envío gratis en pedidos desde $15' },
  { icon: Tag,        text: 'Ofertas exclusivas para miembros' },
  { icon: ShieldCheck, text: 'Pagos 100% seguros – Zelle, Pago Móvil, PayPal' },
];

export default function LoginPage() {
  const login = useStore(state => state.login);
  const router = useRouter();

  const [email, setEmail]             = useState('');
  const [name, setName]               = useState('');
  const [cedula, setCedula]           = useState('');
  const [phone, setPhone]             = useState('');
  const [password, setPassword]       = useState('');
  const [showPass, setShowPass]       = useState(false);
  const [error, setError]             = useState('');
  const [isRegistering, setIsReg]     = useState(false);
  const [redirectPath, setRedirect]   = useState('/account');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const red = params.get('redirect');
    if (red) setRedirect(red);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) { setError('Ingresa tu correo y contraseña.'); return; }

    if (email.trim().toLowerCase() === 'admin@jomstudio.com' && password.trim() === 'VZLA') {
      try {
        await signInWithEmailAndPassword(auth, email.trim(), password);
      } catch (err: any) {
        if (err.code === 'auth/user-not-found') {
          await createUserWithEmailAndPassword(auth, email.trim(), password);
        }
      }
      login({ id: 'admin', name: 'Administrador', email: 'admin@jomstudio.com', clubPoints: 0, clubLevel: 'Oro' });
      sessionStorage.setItem('isAdminLoggedIn', 'true');
      router.push('/account');
      return;
    }

    if (isRegistering) {
      if (!name.trim() || !cedula.trim() || !phone.trim()) {
        setError('Debes proporcionar tu Nombre, Cédula y Teléfono para registrarte de forma segura.');
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
        const uid = userCredential.user.uid;
        
        const userData = {
          id: uid,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          cedula: cedula.trim(),
          phone: phone.trim(),
          clubPoints: 350,
          clubLevel: 'Bronce'
        };

        await setDoc(doc(db, 'users', uid), userData);
        
        login(userData as any);
        router.push(redirectPath);
      } catch (err: any) {
        if (err.code === 'auth/email-already-in-use') {
           setError('Este correo ya se encuentra registrado. Por favor, inicia sesión.');
        } else if (err.code === 'auth/weak-password') {
           setError('Tu contraseña es muy débil. Debe tener al menos 6 caracteres.');
        } else {
           setError('Error al registrar: ' + err.message);
        }
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
        const uid = userCredential.user.uid;

        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
           login(userDoc.data() as any);
           router.push(redirectPath);
        } else {
           setError('Tu cuenta existe, pero no encontramos tus datos. Contacta soporte.');
        }
      } catch (err: any) {
        setError('Correo o contraseña equivocada. Si no tienes cuenta, regístrate.');
      }
    }
  };

  return (
    <div className="min-h-screen flex">

      {/* Left panel – branding */}
      <div className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-ananas-dark via-[#1a3a1a] to-ananas-green relative overflow-hidden flex-col justify-between p-12">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-ananas-green/10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="text-4xl">🍍</span>
            <span className="text-3xl font-black text-white tracking-tight">Ananas</span>
          </Link>
          <p className="text-white/60 text-sm font-medium mt-1">Tu frutería y mercado en línea</p>
        </div>

        {/* Perks */}
        <div className="relative z-10 space-y-5">
          <h2 className="text-2xl font-black text-white mb-6 leading-tight">
            Todo lo fresco,<br />
            <span className="text-yellow-400">en tu puerta hoy</span>
          </h2>
          {PERKS.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                <Icon size={18} className="text-yellow-400" />
              </div>
              <p className="text-white/80 text-sm font-medium">{text}</p>
            </div>
          ))}
        </div>

        {/* Footer tagline */}
        <p className="relative z-10 text-white/40 text-xs font-medium">
          © 2026 Ananas Frutería · Caracas Este
        </p>
      </div>

      {/* Right panel – form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 justify-center mb-8">
            <span className="text-3xl">🍍</span>
            <span className="text-2xl font-black text-ananas-green">Ananas</span>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">

            {/* Toggle tabs */}
            <div className="flex bg-gray-100 rounded-2xl p-1 mb-8">
              {['Iniciar Sesión', 'Registrarme'].map((label, idx) => (
                <button
                  key={label}
                  onClick={() => { setIsReg(idx === 1); setError(''); }}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-black transition-all ${
                    isRegistering === (idx === 1)
                      ? 'bg-white text-ananas-green shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={isRegistering ? 'register' : 'login'}
                initial={{ opacity: 0, x: isRegistering ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="text-2xl font-black text-gray-800 mb-1">
                  {isRegistering ? '¡Bienvenido a Ananas! 🍍' : 'Qué bueno verte de nuevo'}
                </h1>
                <p className="text-sm text-gray-500 font-medium mb-6">
                  {isRegistering
                    ? 'Crea tu cuenta y empieza a acumular puntos Club Ananas.'
                    : 'Ingresa tus datos para continuar.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Register-only fields */}
                  {isRegistering && (
                    <>
                      <div>
                        <label className="block text-xs font-black text-gray-600 mb-1.5 uppercase tracking-wide">Nombre completo</label>
                        <input
                          required type="text" value={name}
                          onChange={e => setName(e.target.value)}
                          placeholder="Juan Pérez"
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ananas-green/30 focus:border-ananas-green transition"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-black text-gray-600 mb-1.5 uppercase tracking-wide">Cédula / RIF</label>
                          <input
                            required type="text" value={cedula}
                            onChange={e => setCedula(e.target.value)}
                            placeholder="V-12345678"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ananas-green/30 focus:border-ananas-green transition"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-black text-gray-600 mb-1.5 uppercase tracking-wide">Teléfono</label>
                          <input
                            required type="tel" value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="0414-000-0000"
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ananas-green/30 focus:border-ananas-green transition"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-black text-gray-600 mb-1.5 uppercase tracking-wide">Correo electrónico</label>
                    <input
                      required type="email" value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="tu@correo.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ananas-green/30 focus:border-ananas-green transition"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-xs font-black text-gray-600 mb-1.5 uppercase tracking-wide">Contraseña</label>
                    <div className="relative">
                      <input
                        required
                        type={showPass ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-11 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ananas-green/30 focus:border-ananas-green transition"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass(s => !s)}
                        className="absolute right-3 top-3.5 text-gray-400 hover:text-ananas-green transition"
                      >
                        {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 text-sm font-bold px-4 py-3 rounded-xl">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-ananas-green hover:bg-ananas-dark text-white font-black text-base py-4 rounded-2xl transition-all shadow-lg shadow-ananas-green/25 flex items-center justify-center gap-2 group mt-2"
                  >
                    {isRegistering ? 'Crear mi cuenta' : 'Entrar a Ananas'}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Privacy note */}
                <p className="text-center text-xs text-gray-400 font-medium mt-5">
                  Al continuar aceptas nuestros{' '}
                  <Link href="/terminos" className="underline hover:text-ananas-green">Términos</Link>
                  {' '}y{' '}
                  <Link href="/privacidad" className="underline hover:text-ananas-green">Privacidad</Link>.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

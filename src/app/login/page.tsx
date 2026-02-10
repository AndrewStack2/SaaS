'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/hooks/useTranslation';
import { useLanguage } from '@/lib/LanguageContext';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      router.push('/vehicles');
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background-light dark:bg-background-dark font-display p-4 relative overflow-hidden">
      {/* Map Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.07] dark:opacity-[0.05] grayscale pointer-events-none transition-opacity duration-1000"
        style={{
          backgroundImage: 'url("https://www.maptechnica.com/static-map/city/puebla-mx.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]"></div>
      </div>

      {/* Language Switcher */}
      <div className="absolute top-6 right-6 flex gap-2 z-20">
        <button
          onClick={() => setLanguage('es')}
          className={cn(
            "px-3 py-1.5 rounded-lg text-xs font-bold transition-all border",
            language === 'es'
              ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
              : "bg-white/80 dark:bg-surface-dark/80 text-[#69499c] dark:text-[#a586d3] border-[#d8cee8] dark:border-[#3e3450] hover:bg-white dark:hover:bg-surface-dark"
          )}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={cn(
            "px-3 py-1.5 rounded-lg text-xs font-bold transition-all border",
            language === 'en'
              ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
              : "bg-white/80 dark:bg-surface-dark/80 text-[#69499c] dark:text-[#a586d3] border-[#d8cee8] dark:border-[#3e3450] hover:bg-white dark:hover:bg-surface-dark"
          )}
        >
          EN
        </button>
      </div>

      <div className="max-w-md w-full z-10">
        <div className="bg-surface-light dark:bg-surface-dark rounded-[2rem] shadow-2xl border border-[#ece7f4] dark:border-[#3e3450] p-8 md:p-10">
          <div className="flex flex-col items-center mb-10">
            <div className="size-16 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-white text-4xl fill">radar</span>
            </div>
            <h1 className="text-3xl font-black text-[#130d1c] dark:text-white mb-2">Spider Fleet</h1>
            <p className="text-[#69499c] dark:text-[#a586d3] font-medium text-center">
              {t('login_subtitle') || 'Gestión inteligente de flotas en tiempo real'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-[#69499c] dark:text-[#a586d3] px-1">
                {t('email') || 'Correo Electrónico'}
              </label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#69499c] dark:text-[#a586d3] group-focus-within:text-primary transition-colors">mail</span>
                <input
                  type="email"
                  required
                  placeholder="admin@spiderfleet.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#f9f8fc] dark:bg-white/5 border border-[#d8cee8] dark:border-[#3e3450] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-[#130d1c] dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-[#69499c] dark:text-[#a586d3]">
                  {t('password') || 'Contraseña'}
                </label>
                <a href="#" className="text-xs font-bold text-primary hover:underline">
                  {t('forgot_password') || '¿Olvidaste tu contraseña?'}
                </a>
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#69499c] dark:text-[#a586d3] group-focus-within:text-primary transition-colors">lock</span>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#f9f8fc] dark:bg-white/5 border border-[#d8cee8] dark:border-[#3e3450] focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-[#130d1c] dark:text-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 px-1 my-2">
              <input type="checkbox" id="remember" className="rounded-md border-[#d8cee8] text-primary focus:ring-primary/20" />
              <label htmlFor="remember" className="text-sm font-medium text-[#69499c] dark:text-[#a586d3] cursor-pointer">
                {t('remember_me') || 'Recordarme en este dispositivo'}
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {loading ? (
                <div className="size-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="material-symbols-outlined">login</span>
                  {t('login') || 'Iniciar Sesión'}
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-[#d8cee8] dark:border-[#3e3450]">
            <p className="text-center text-sm text-[#69499c] dark:text-[#a586d3] mb-4">
              {t('or_continue_with') || 'O continuar con'}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-bold text-sm text-[#130d1c] dark:text-white">
                <img src="https://www.google.com/favicon.ico" className="size-5" alt="Google" />
                Google
              </button>
              <button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-[#d8cee8] dark:border-[#3e3450] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-bold text-sm text-[#130d1c] dark:text-white">
                <span className="material-symbols-outlined text-blue-600">badge</span>
                SSO
              </button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-[#69499c] dark:text-[#a586d3]">
          {t('no_account') || '¿No tienes una cuenta?'} <a href="#" className="font-bold text-primary hover:underline">{t('request_access') || 'Solicitar acceso'}</a>
        </p>
      </div>
    </div>
  );
}

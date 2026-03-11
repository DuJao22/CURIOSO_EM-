import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Cpu, Globe, Sparkles, ArrowRight, Instagram } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;
    let timer3: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (step === 0) {
      timer1 = setTimeout(() => setStep(1), 3500);
    } else if (step === 1) {
      timer2 = setTimeout(() => setStep(2), 3500);
    } else if (step === 2) {
      // Simulate loading
      let currentProgress = 0;
      progressInterval = setInterval(() => {
        currentProgress += Math.random() * 15;
        if (currentProgress >= 100) {
          currentProgress = 100;
          clearInterval(progressInterval);
          timer3 = setTimeout(() => setStep(3), 500); // Wait a bit after 100%
        }
        setProgress(currentProgress);
      }, 300);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(progressInterval);
    };
  }, [step]);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden selection:bg-emerald-500/30">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] max-w-[600px] max-h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10 flex flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Curioso você hein? <span className="inline-block origin-bottom-right animate-bounce">👀</span>
              </h1>
              <p className="text-xl text-zinc-400 font-medium">
                Você saiu do Instagram só pra ver isso?
              </p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Já que você chegou até aqui...
              </h2>
              <p className="text-xl text-emerald-400 font-medium">
                Deixa eu te mostrar algo melhor. ✨
              </p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="w-full space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-zinc-200 animate-pulse">
                  Carregando a verdade...
                </h2>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear", duration: 0.3 }}
                  />
                </div>
                <div className="flex justify-between text-sm text-zinc-500 font-mono">
                  <span>Processando</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full flex flex-col items-center space-y-10"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.5 }}
                  className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl"
                >
                  <span className="text-3xl">😅</span>
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Na verdade… isso aqui foi só um <span className="text-emerald-400">teste de curiosidade</span>
                </h2>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

              <div className="space-y-8 w-full">
                <div className="space-y-4">
                  <p className="text-lg text-zinc-300">
                    Mas já que você caiu na minha armadilha... 😂
                  </p>
                  <div className="bg-zinc-900/60 border border-zinc-800/80 p-5 rounded-2xl">
                    <p className="text-zinc-300 leading-relaxed">
                      Que tal dar uma força pro meu trabalho? Não custa nem um centavo me seguir, ajuda demais a engajar minha página e o melhor: <strong className="text-emerald-400">eu ainda sigo de volta dnv kkkkk!</strong> 🤝
                    </p>
                  </div>
                </div>

                <motion.a
                  href="https://www.instagram.com/Layon.Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-lg py-4 px-8 rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]"
                >
                  <Instagram className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Me seguir no Instagram</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>

                <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400 pt-4">
                  <div className="flex items-center gap-2 justify-center bg-zinc-900/50 py-2 px-3 rounded-lg border border-zinc-800/50">
                    <Code2 className="w-4 h-4 text-emerald-500" />
                    <span>Sistemas</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center bg-zinc-900/50 py-2 px-3 rounded-lg border border-zinc-800/50">
                    <Cpu className="w-4 h-4 text-emerald-500" />
                    <span>Automação</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center bg-zinc-900/50 py-2 px-3 rounded-lg border border-zinc-800/50">
                    <Sparkles className="w-4 h-4 text-emerald-500" />
                    <span>IA</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center bg-zinc-900/50 py-2 px-3 rounded-lg border border-zinc-800/50">
                    <Globe className="w-4 h-4 text-emerald-500" />
                    <span>Web Apps</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 font-medium uppercase tracking-widest mt-4">
                  E muito mais
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="pt-8 w-full text-center"
              >
                <p className="text-xs text-zinc-500">
                  Criado por <span className="text-emerald-400 font-semibold">João Layon</span>
                  <br />
                  Desenvolvedor Full Stack
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

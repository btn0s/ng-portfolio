import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import "react-image-lightbox/style.css";

import Navbar from "../components/Navbar";

import "./_app.css";

const OFFSET_Y = 30;
const TRANSITION = {
  duration: 0.2,
  easing: "easeOut",
};

const pageTransitionVariant = {
  initial: {
    y: OFFSET_Y,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: TRANSITION,
  },
  exit: {
    y: OFFSET_Y,
    opacity: 0,
    transition: TRANSITION,
  },
};

const AppLayout = ({ children }) => {
  return (
    <div className="main-wrapper">
      <Head>
        <title>Nathalie Garcia | Interior Design & Styling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-2 md:px-0">
        <Navbar />
        {children}
      </main>

      <footer className="flex justify-center py-10">
        Nathalie Garcia | Interior Design & Styling
      </footer>
      <img src="/bg-blob-1.png" className="bg-blob-1" />
      <img src="/bg-blob-2.png" className="bg-blob-2" />
    </div>
  );
};

const handleExitComplete = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
};

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <AppLayout>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <motion.div
          variants={pageTransitionVariant}
          initial="initial"
          animate="enter"
          exit="exit"
          key={router.pathname}
        >
          <Component {...pageProps} key={router.pathname} />
        </motion.div>
      </AnimatePresence>
    </AppLayout>
  );
};

export default MyApp;

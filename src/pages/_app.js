import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { motion } from "framer-motion";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;

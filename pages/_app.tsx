import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/reduxState/store";
import "../styles/global.css";
import Head from "next/head";
import Link from "next/link";

const stores = ["mobx", "redux", "valtio", "zustand", "mobxalert", "reduxalert", "valtioalert", "zustandalert"];

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Stores
          </a>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav ">
              {stores.map((store, index) => (
                <Link href={`/${store}`} key={index}>
                  <a className="nav-link active" style={{ textTransform: "capitalize" }}>
                    {store}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="container text-center mt-5">
        <Head>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" />
        </Head>

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </div>
  );
}

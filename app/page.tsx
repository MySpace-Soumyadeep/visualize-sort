import Image from "next/image";
import { Provider } from 'react-redux';
import { store } from '../app/store';
import LandingPage from "@/components/LandingPage";
export default function Home() {
  return (
    // <Provider store={store}>
    <main className="">
      <LandingPage/>
    </main>
    // </Provider>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import TopHeader from "../Component/Headers/TopHeaser"
import MiddelHeader from "../Component/Headers/MiddleHeader"
import BottomHeader from "../Component/Headers/BottomHeader"
import Foter from "../Component/Foter/Foter"
import ProviderLayout from "../components/redux/ProviderLayout"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <ProviderLayout>
            <TopHeader/>
            <MiddelHeader/>
            <BottomHeader/>
              {children}
              <ToastContainer autoClose={1000} />
            <Foter/>
        </ProviderLayout> 
        </body>
    </html>
  );
}

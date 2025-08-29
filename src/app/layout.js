
import "./globals.css";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";


export const metadata = {
  title: "Mamta Sangwan | Frontend  Developer | React, Node.js, MongoDB, SQL",
  description: "Mamta  Web Developer  specializing in React,JavaScript Next.js. Hire me for web development projects.",
  keywords:
    "Frontend  Developer, React Developer, JavaScript, Next.js, Frontend Developer, Web Development",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        {/* Standard SEO */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        {/* Open Graph (OG) for Social Media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />


      </head>
      <body>
        <ToastContainer />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

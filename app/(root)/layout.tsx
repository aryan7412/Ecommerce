import Footer from "@/components/footer";
import Header from "@/components/shared/header";
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className='flex h-screen flex-col m-10 mt-2'>
        <Header />
        <main className='flex-1 wrapper'>{children}</main>
        <Footer/>
      </div>
    );
  }
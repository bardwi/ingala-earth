import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import GlobalCTA from '@/components/marketing/GlobalCTA/GlobalCTA';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <GlobalCTA />
      <Footer />
    </>
  );
}

import Link from "next/link";
import "./globals.scss";
import Image from "next/image";


export const metadata = {
  title: "Spider-Verse",
  description: "Criando um carrossel parallax so Aranhaverso com React, Next.js e FramerMotion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body >
        <header>
          <Image src="/icons/menu.svg" alt="Opções de menu" width={36} height={25} />
          <Link href={"/"}>
            <Image src="/spider-logo.svg" alt="Spiderman" width={260} height={70} />
          </Link>
          <Image src="/icons/user.svg" alt="Login" width={36} height={36} />
        </header>
        {children}
      </body>
    </html>
  );
}

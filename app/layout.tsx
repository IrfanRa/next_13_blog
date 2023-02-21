import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from './utils.module.css'

const name = 'Irfan Rasheed';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <div className="{styles.container">
          <header className={styles.header}>
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={180}
              width={150}
              alt=""
            />
          </Link>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>

          {children}
          </header>
        </div>
      </body>
    </html>
  );
}

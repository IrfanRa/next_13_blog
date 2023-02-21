'use client';

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const inter = Inter({ subsets: ['latin'] })

export default function Accounts() {
  const router = useRouter();
  return (
    <main className={styles.main}>
  
      <div className={styles.center}><h1>Account</h1> </div>
      <Link href='/'>back to hom</Link>
      <button
        type="button" onClick={() => router.push('/')}
      >Back to Home!</button>
    </main>
  )
}

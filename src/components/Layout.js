import styles from '@/styles/Home.module.css'
import Link from 'next/link';


export default function Layout({ children }) {
  return (
    <>
        <nav className={styles.nav}>
            <Link className={styles.home} href="/">Home</Link>
            <svg className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="31.5" height="27" viewBox="0 0 31.5 27">
              <g id="Icon_ionic-ios-bicycle" data-name="Icon ionic-ios-bicycle" transform="translate(-2.25 -4.5)">
                <g id="Group_104" data-name="Group 104">
                  <path id="Path_19" data-name="Path 19" d="M8.81,20.341A4.621,4.621,0,1,1,5.569,21.7,4.56,4.56,0,0,1,8.81,20.341m0-1.969a6.564,6.564,0,1,0,6.56,6.567,6.581,6.581,0,0,0-6.56-6.567Z"/>
                  <path id="Path_20" data-name="Path 20" d="M22.486,8.986a2.239,2.239,0,0,0,2.25-2.25A2.215,2.215,0,0,0,22.5,4.5a2.243,2.243,0,1,0-.014,4.486Z"/>
                  <path id="Path_21" data-name="Path 21" d="M27.19,20.341A4.621,4.621,0,1,1,23.948,21.7a4.56,4.56,0,0,1,3.241-1.357m0-1.969a6.56,6.56,0,1,0,6.56,6.56,6.581,6.581,0,0,0-6.56-6.56Z"/>
                </g>
                <path id="Path_22" data-name="Path 22" d="M25.875,13.5H22.5L20.426,9.274a2.2,2.2,0,0,0-3.48-.464L11.9,13.669a2.289,2.289,0,0,0-.654,1.575,2.1,2.1,0,0,0,1.3,1.905c3.2,1.842,4.324,2.046,4.324,2.967V24.75a1.125,1.125,0,0,0,2.25,0V18.422c0-.928-2.138-1.687-3.4-2.672l3.438-3.621c1.315,2,1.92,3.621,2.672,3.621h4.036a1.125,1.125,0,0,0,0-2.25Z"/>
              </g>
            </svg>

            <Link className={styles.about} href="/about">About</Link>
        </nav>
        <main>{children}</main>      
    </>
  )
}


import styles from './layout.module.css';
import type { FC } from 'react';
import mainBg from '../../public/assets/global/main-bg.webp'
import Image from 'next/image';

interface layoutProps{
    children?: JSX.Element,
    class?: string;
}
export function Layout<FC>(props: layoutProps) {
  return (
    <div 
    className={styles.container}>
      {props.children}
    </div>
  )
}

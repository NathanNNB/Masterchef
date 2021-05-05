import Link from 'next/link';
import styles from './HomeButton.module.scss';

type ButtonProps = {
  text: string;
  link: string;
}

export default function HomeButton(props: ButtonProps) {
  return (
    <div>
        <Link href={props.link}>
          <button className={styles.homeButton}>
            <a >{props.text}</a>
          </button>
        </Link>
    </div>
    )
}
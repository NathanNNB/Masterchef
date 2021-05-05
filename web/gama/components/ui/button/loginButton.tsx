import Link from 'next/link';
import styles from './loginButton.module.scss';

type ButtonProps = {
  text: string;
  link: string;
}

export default function loginButton(props: ButtonProps) {
  return (
    <div>
        <Link href={props.link}>
          <button  className={styles.formButton}>
            <a >{props.text}</a>
          </button>
        </Link>
    </div>
    )
  }
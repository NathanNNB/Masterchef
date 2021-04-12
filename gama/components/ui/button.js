import React from 'react';
import Link from 'next/link';
import classes from './button.module.css'
function Button() {
  return (
    <Link href="/">
      <a className = {classes.btn}>
      Criar conta gratuita
      </a>
    </Link>
  );
}

export default Button;
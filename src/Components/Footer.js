import React from 'react'
import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css'
function Footer() {
  const [display, setDisplay] = React.useState('');
  const params = useLocation();
  React.useEffect(() => { 
    if (params.pathname === "/login" || params.pathname === '/login/createAccount') setDisplay('none')
    else setDisplay(' ')
  }, [params]);
  return (
  <footer className={'container'} style={{display: display}}>
    FOOTER
  </footer>
  )
}

export default Footer
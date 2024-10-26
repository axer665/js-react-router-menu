import {MutableRefObject, useEffect, useRef} from 'react';
import { NavLink } from 'react-router-dom'

export default function Menu() {
  const refEl1:MutableRefObject<any> = useRef();
  const refEl2:MutableRefObject<any> = useRef();
  const refEl3:MutableRefObject<any> = useRef();
  const refEl4:MutableRefObject<any> = useRef();

  useEffect(() => {
    if (![refEl1, refEl2, refEl3, refEl4].some(e => e.current.className === 'menu__item active')) {
      refEl1.current.click();
    }
  }, []);

  return (
    <nav className="menu">
      <NavLink ref={refEl1} to="/" className="menu__item">Главная</NavLink>
      <NavLink ref={refEl2} to="/drift" className="menu__item">Дрифт такси</NavLink>
      <NavLink ref={refEl3} to="/timeattack" className="menu__item">Time Attack</NavLink>
      <NavLink ref={refEl4} to="/forza" className="menu__item">Forza Karting</NavLink>
    </nav>
  );
}
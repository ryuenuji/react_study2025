import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapArrayExam from './components/MapArrayExam'
import MapObjectExam from './components/MapObjectExam'
import MenuBoard from './components/MenuBoard'
import FilterExam from './components/FilterExam';

function App() {


  return (
    <>
      {/* Map() 함수 실습 1 */}
      {/* <MapArrayExam/> */}

      {/* map() 함수 실습 2 */}
      {/* <MapObjectExam/> */}

      {/* 실습) 음료 메뉴 출력하기 */}
      <MenuBoard/>

      {/* filer() 함수 실습 */}
      {/* <FilterExam/> */}
    </>
  )
}

export default App

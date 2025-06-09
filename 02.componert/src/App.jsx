import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubox from './components/Menubox.jsx'
import Memberlnfo from './components/Memberlnfo.jsx'
import Count from './components/Count.jsx'
import LikeCount from './components/LikeCount.jsx'
import LikeCount2 from './components/LikeCount2.jsx'
import BattleNumber from './components/BattleNumber.jsx'

function App() {

/*
  1. Component(컴포넌트)
    - UI를 표현하는 최소 단위
    - 컴포넌트를 만들 때 파일명은 반드시 대문자로 정의

  2. props(프로퍼티)
    - 리액트는 상위에서 하위로 데이터를 전달하는 방식(단방향)
    - 값을 전달하는 방식은 객체({key:value})로 전달
      ex) <Menubox menuNm={"아메리카노"} price={2500}/>
          -> {"menuNm":"아메리카노", "price":2500} 형태로 생성한 후 하위 컴포넌트로 전달
    - 상위 컴포넌트로부터 전달받은 값을 담고 있는 객체      
*/
  return (
    <>
      {/* <div>
        <h1>아메리카노</h1>
        <p>2500</p>
      </div> */}
      {/* <div>
        <h1>카페라떼</h1>
        <p>3000</p>
      </div>
      <div>
        <h1>콜드브루</h1>
        <p>4000</p>
      </div> */}

      
      {/* <Menubox menuNm={"아메리카노"} price={2500}/>
      <Menubox menuNm={"카페라떼"} price={3000}/>
      <Menubox menuNm={"콜드브루"} price={4000}/> */}

      {/* 실습) 야구팀 대표 투수 정보(야구팀명, 투수명) 출력해보기 */}
      {/* <div className='container'>
        <Memberlnfo team={"KIA 타이거즈"} name={"강병우"}/>
        <Memberlnfo team={"SSG 랜더스"} name={"김광현"}/>
        <Memberlnfo team={"두산 베어스"} name={"곽빈"}/>
        <Memberlnfo team={"한화 이글스"} name={"류현진"}/>
      </div> */}
      
      {/* state 실습 */}
      {/* <Count/> */}

      {/* state 실습2 */}
      {/* <LikeCount/> */}

      {/* state 실습3 */}
      <LikeCount2/>

      {/* stat 실습 4 */}
      {/* <BattleNumber/> */}


    </>
  )
}

export default App

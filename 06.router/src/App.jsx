import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { Navigate, Route, Routes } from 'react-router'
import Home from './routes/page/Home'
import About from './routes/page/About'
import ProductList from './routes/page/ProductList'
import ProductDetail from './routes/page/ProductDetail'
import ProductDetail2 from './routes/page/ProductDetail2'
import Mypage from './routes/page/Mypage'
import Login from './routes/page/Login'

function App() {

  const [authenticate, setAuthenticate] = useState(false);

  const PrivateRoute = () => {
    return authenticate === true ? <Mypage/> : <Navigate to={"/login"}/>;
    
  }

  return (
    // Routes역할
    // - 사용자가 요청한 URL 중 일치하는 컴포넌트를 렌더링해주는 컴포넌트
    // Route 역할
    // - path에 정의된 요청이 들어왔을 때 element에 정의된 컴포넌트를 렌더링하는 역할

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/PrdList" element={<ProductList/>}/>

      {/* 
        [페이지 이동 시 데이터를 전달하는 방식 2가지]
        useParames()
        - 요청URL 경로에서 동적 세그먼트 (/path/:key)를 가져오는 방식
          ex) /product/1 -> {pro_no:1} 반환
        - 활용 : 블로그 포스트 ID, 회원ID, 상품ID 등
       
        useSearchParams()
        - 요청URL 경로에서 궈리스트링(?key=value)를 가져오는 방식
          ex) /product?pro_no=1 -> query.get("pro_no")로 값 추출
        - 활용 : 검색어, 정렬, 필터 등
      */}
      <Route path="/prdDetail/:pro_no" element={<ProductDetail/>}/>
      <Route path="/prdDetail2/" element={<ProductDetail2/>}/>

      {/* <Route path="/mypage" element={<Mypage/>}/> */}
      <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path="/mypage" element={<PrivateRoute/>}/>
    </Routes>
  )
}

export default App

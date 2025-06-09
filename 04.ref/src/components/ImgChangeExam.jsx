import React from 'react'
import cat from '../assets/img/고양이.jpg'
import dog from '../assets/img/강아지.png'
import { useRef } from 'react'
import { useState } from 'react'
const ImgChangeExam = () => {

    const inputName = useRef("");
    const [imgChange, setImgChange] = useState("");

    const handleChange = (e) => {
        e.preventDefault();

        if(inputName.current.value ==="강아지"){
            setImgChange(dog);
        }else if(inputName.current.value ==="고양이"){
            setImgChange(cat);
        }

        // 입력창의 내용을 초기화하고 해당 요소를 선택하는 기능
        inputName.current.value = '';
        inputName.current.focus();
    }

  return (
    <div>
        <p>희망하는 사진이 있으신가요?</p>
        <form>
            <input type="text" ref={inputName}/>
            <input onClick={handleChange} type="submit" value="변경!" />
        </form>
        <img src={imgChange}/>
    </div>
  )
}

export default ImgChangeExam
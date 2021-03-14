import React, { useState } from 'react'

const DEFAULT_VALUES = {
  title: '',
  author: '',
  imageUrl: '',
  description: '',
}

function Form({ onAddWebtoon }) {
  const [formValues, setFormValues] = useState({
    title: '',
    author: '',
    imageUrl: '',
    description: '',
  })
  const handleFormValues = (a) => {
    //여기서 a는 input의 value값. value값이 onChange에 넘어옴.
    setFormValues({
      ...formValues, //참고 기타북마크에 있는 자바스크립트 전개 구문
      [a.target.name]: a.target.value,
    })
  }

  const handleSubmit = () => {
    onAddWebtoon(formValues)
    setFormValues(DEFAULT_VALUES)
  }

  return (
    <div>
      <input
        name="title"
        placeholder="웹툰 이름"
        value={formValues.title} //input을 입력할 때 내가 입력하는 것이 스크린상에 보여지는 것.
        onChange={handleFormValues}
      />
      <input
        name="author"
        placeholder="작가"
        value={formValues.author}
        onChange={handleFormValues}
      />
      <input
        name="imageUrl"
        placeholder="이미지 URL"
        value={formValues.imageUrl}
        onChange={handleFormValues}
      />
      <input
        name="description"
        placeholder="설명"
        value={formValues.description}
        onChange={handleFormValues}
      />
      <button onClick={handleSubmit}>등록</button>
    </div>
  )
}

export default Form

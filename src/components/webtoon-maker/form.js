import React, { useState } from 'react'
import styled from 'styled-components'

const DEFAULT_VALUES = {
  title: '',
  author: '',
  imageUrl: '',
  description: '',
}

const Wrap = styled.div`
  border: 1px solid #eaeaea;
  background: #f5f6f7;
  padding: 30px 20px;
`
const Ul = styled.ul`
  width: 100%;
  overflow: hidden;
`
const Li = styled.li`
  float: left;
  width: calc(50% - 10px);
  padding: 5px;
`
const Input_wrap = styled.div`
  padding: 15px 10px;
  border: 1px solid #eaeaea;
  background: #fff;
`
const Input = styled.input`
  border: none;
  background: none;
`
const Button = styled.button`
  display: block;
  margin: 20px auto 0;
  padding: 10px 30px;
  background: #03c75a;
  color: #fff;
  border: 1px solid #03c75a;
`

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
    <Wrap>
      <Ul>
        <Li>
          <Input_wrap>
            <Input
              name="title"
              placeholder="웹툰 이름"
              value={formValues.title} //input을 입력할 때 내가 입력하는 것이 스크린상에 보여지는 것.
              onChange={handleFormValues}
            />
          </Input_wrap>
        </Li>
        <Li>
          <Input_wrap>
            <Input
              name="author"
              placeholder="작가"
              value={formValues.author}
              onChange={handleFormValues}
            />
          </Input_wrap>
        </Li>
        <Li>
          <Input_wrap>
            <Input
              name="imageUrl"
              placeholder="이미지 URL"
              value={formValues.imageUrl}
              onChange={handleFormValues}
            />
          </Input_wrap>
        </Li>
        <Li>
          <Input_wrap>
            <Input
              name="description"
              placeholder="설명"
              value={formValues.description}
              onChange={handleFormValues}
            />
          </Input_wrap>
        </Li>
      </Ul>

      <Button onClick={handleSubmit}>등록</Button>
    </Wrap>
  )
}

export default Form

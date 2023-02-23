import React from 'react';
import Avater from './components/Avater';
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <Avater image='https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60' name="홍길동" title='프론트엔드 개발자'/>
      <Avater image='https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60' name="장길동" title='백엔드 개발자'/>
      <Avater image='https://images.unsplash.com/photo-1601412436009-d964bd02edbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' name="김삿갓" title='프론트엔드 개발자'/>
      <Avater image='https://images.unsplash.com/photo-1616766098946-e4fabb7d6da0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60' name="신사임당" title='백엔드 개발자'/>
    </div>
  );
}


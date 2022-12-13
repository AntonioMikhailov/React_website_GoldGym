import React, { useRef, useState } from 'react'

export default function Form({ styles,placeHopderTextArea, buttonText, buttonSendText}) {
  const form = useRef()
  const [ buttonValue, setButttonValue] = useState(buttonText);
  const [isСhecked, setIschecked ] = useState(false)

  const [isAutoComplete, setAutoComplete ] = useState('off')
  
  const [values, setValues] = useState(  
    {
      textarea: '',
      email: '',
      name: '',  
     }
  )
 

  function handleAutocomplete() {
    if(!isСhecked) {
      setIschecked(true)
      setAutoComplete('on')
    } else {
      setIschecked(false)
      setAutoComplete('off')
    }
 }

  function handleTextarea(e) {
    setValues({...values, textarea: e.target.value })
   }

function handleEmail(e) { 
  setValues({...values, email: e.target.value })
 }

function handleName(e) { 
  setValues({...values, name: e.target.value })
 }
 //Отправка
function sendForm(e) {
  e.preventDefault()
  const formData = new FormData(form.current);
   
// Проверяем
if(values.textarea && values.email && values.name ) {

    //Отправляем   
    //путь указал к себе на хостинг т.к. MAMP глючит. В mail.php ничего не трогал кроме апгрейда ящиков 
    fetch("http://antoniom.beget.tech/goldgym/phpmailer/mail.php", {
  
    // fetch("../phpmailer/mail.php",  поменял путь на свой хостинг
    //  {
        method: 'POST',
        body: formData,
      
      });
      setButttonValue(buttonSendText)
       setTimeout(() => {
      
      //очищаем форму
    
      setValues({...values,
        textarea: '',
      email: '',
      name: '', 
      })
    
      setButttonValue(buttonText)
    }, 3500);

} else {
  setButttonValue('заполните все поля')
}
}
 
  return (
    <form
    className={styles} 
    autoComplete={isAutoComplete}
     ref={form}
     onSubmit={sendForm}
     action="mail.php"
     method="POST" data-form>

      <textarea
      onChange={handleTextarea}
      value={values.textarea}
      name="user_subject" className="bi-three__textarea" placeholder={placeHopderTextArea}></textarea>

      <input 
       value={values.email}
      onChange={handleEmail} type="email" name='user_email' placeholder="E-mail*" className="bi-three__input"/>

      <input
      value={values.name}
      onChange={handleName} type="text" name='user_name' placeholder="Ваше имя*" className="bi-three__input"/>
      <div className="bi-three__checkBox__row">
       <input 
       checked={isСhecked}
       onChange={ handleAutocomplete}
       type="checkbox" className="bi-three__checkbox"/>
       <div className="bi-three__checkbox-text">Сохранить мои данные для ввода комментариев в следующий раз
       </div>
      </div>
     
     <button className="bi-three__button btn-red">{buttonValue}</button>

     </form>
  )
}

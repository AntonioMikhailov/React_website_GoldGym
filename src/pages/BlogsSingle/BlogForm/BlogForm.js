 
import Form from '../../../components/Form/Form'

export default function BlogForm() {
 

 return (
    <section className="bi-three">
    <div className="container">
      <div className="bi-three__row">
        <div className="bi-three__title title-h2">оставить комментарий</div>
        <div className="bi-three__text text-body">Ваш электронный адрес не будет опубликован. Обязательные поля отмечены знаком *</div>

        <Form
        styles={''}
        placeHopderTextArea={'Текст комментария*'}
        buttonText={'опубликовать комментарий'}
        buttonSendText={'комментарий отправлен'}
        />
   
      </div>
    </div>
  </section>
  )
}




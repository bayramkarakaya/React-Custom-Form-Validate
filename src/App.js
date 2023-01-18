import React,{useState,useEffect} from 'react';
import './App.css';
import { FormValidator } from './FormValidator';


function App() {
  const [form,setForm] = useState({adi:"",soyadi:"",telefon:""})
  const [formValidateData,setFormValidateData] = useState()
  const onChangeHandle = (event)=>{
    setForm({...form,[event.target.name]:event.target.value})
  }
  const onSubmitHandler=(event)=>{
    event.preventDefault()
    const validate = new FormValidator()
    validate.isEmpty(Object.entries({Adi:form.adi,Soyadi:form.soyadi,Telefon:form.telefon}))
    validate.telephoneNumberLength({Telefon:form.telefon})
    setFormValidateData(validate.isFormValidData)
    let isValid = !validate.isFormValidData.some((item)=>item.durum===false)
    if(isValid==false){
      return
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>Adınız..</label>
        <input name='adi' onChange={onChangeHandle}/>
        {formValidateData && formValidateData.map((item,index)=>{
          if(item.name=="Adi"){
            return <p style={{color:"red"}} key={index}>{item.mesaj}</p>
          }
        })}
      </div>
      <div>
        <label>Soyadınız..</label>
        <input name='soyadi' onChange={onChangeHandle}/>
        <label>
        {formValidateData && formValidateData.map((item,index)=>{
          if(item.name=="Soyadi"){
            return <p style={{color:"red"}} key={index}>{item.mesaj}</p>
          }
        })}
        </label>
      </div>
      <div>
        <label>Telefon..</label>
        <input name='telefon' onChange={onChangeHandle}/>
        <label>
        {formValidateData && formValidateData.map((item,index)=>{
          if(item.name=="Telefon"){
            return <p style={{color:"red"}} key={index}>{item.mesaj}</p>
          }
        })}
        </label>
      </div>
      <button>Gönder</button>
    </form>
  );
}

export default App;

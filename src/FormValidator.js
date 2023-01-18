export class FormValidator{
    isEmptyMessage = "Bu alan boş geçilemez."
    isTelephoneNumberLength = "Telefon 10 karakter olmalıdır. Ve Örn.(555 555 5555) formatında olmalıdır."
    isTelephoneFormat = "Telefon numaranız 5 ile başlamalıdır."
    isFormValidData=[]
  
    isEmpty(data){
            for(var [key,value] of data){
            if(typeof value === "string")
            {
                console.log(key)
                value.trim()==="" && this.isFormValidData.push({durum:false,mesaj:this.isEmptyMessage,name:key}) 
                console.log(value)
            }
             
            }
    }
    telephoneNumberLength(data){
        if(typeof data.Telefon==="string"){
            let telefonFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            
            
            data.Telefon.length!==10 && data.Telefon.match(telefonFormat)===null && this.isFormValidData.push({durum:false,mesaj:this.isTelephoneNumberLength,name:"Telefon"})
            data.Telefon[0]!=="5" && this.isFormValidData.push({durum:false,mesaj:this.isTelephoneFormat,name:"Telefon"})
        }
    }
}
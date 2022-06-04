import React, {useState} from 'react'
import {ChatTeardrop, Check, IdentificationCard, User} from 'phosphor-react';
import { useFormik } from "formik";
import * as yup from "yup";
import styles from './styles.module.scss';
import FileUploader from './FileUploader';
import axios from "axios";

const baseUrl = 'http://localhost:3001/aluguel/carros'


  const RentRegister = () => {
    const formik = useFormik({
      initialValues:{
        nome:'',
        sobrenome:'',
        cpf:'',
        rg:'',
        status:'',
        observacoes:''
      },
      
      validationSchema:yup.object({
        nome:yup.string().required('Esse campo é obrigatório').matches(/^[aA-zZ\s]+$/, "Só é permitido letras"),
        sobrenome:yup.string().required('Esse campo é obrigatório').matches(/^[aA-zZ\s]+$/, "Só é permitido letras"),
        cpf:yup.string().required('Esse campo é obrigatório').matches(/^[0-9]+$/, "Só é permitido número").min(11, 'CPF inválido').max(11, 'CPF inválido'),
        rg:yup.string().required('Esse campo é obrigatório').matches(/^[0-9]+$/, "Só é permitido número").min(7, 'RG inválido').max(7, 'RG inválido'),
        status:yup.string().required('Esse campo é obrigatório'),
        observacoes:yup.string().required('Esse campo é obrigatório')
      }),
      
      onSubmit:(values) =>{
        try{

        }catch(e){

        }
        alert(JSON.stringify(values,null,2));
        const dateForm = new Date();
        const valuesForm = values;
        axios({
          method: 'POST',
          url: baseUrl,
          data:{
            "nome":valuesForm.nome,
            "sobrenome":valuesForm.sobrenome,
            "cpf":valuesForm.cpf,
            "rg":valuesForm.rg,
            "status":valuesForm.status,
            "alugado":dateForm.toLocaleString(),
            "entregue":dateForm.toLocaleString(),
            "observacoes":valuesForm.observacoes,
          },
          headers: {'Content-Type': 'application/json'},
        }).then(response =>{
          console.log(response);
        }).catch(error=>{
          console.log(error);
        })
    },
  })

  
  const [selectedFile, setSelectedFile] = useState(null)
  
  // const submitForm = () => {
  //   const formImg= new FormData();
  //   formImg.append("file", selectedFile);
  //   axios
  //     .post(baseUrl, formImg)
  //     .then((res) => {
  //       alert("Arquivo enviado");
  //     })
  //     .catch((err) => alert("File Upload Error"));
  // }


  return (
    <>
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Formulário de Registro</h1>
      </div>
      <div className={styles.box}>
        <form onSubmit={formik.handleSubmit} >
          <label htmlFor="nome">
            <User size={20} color="white" />
            <input 
            type="text" 
            placeholder="Nome"
            name="nome"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nome}              
            />
            {formik.touched.nome&&formik.errors.nome?(
              <span>
                {formik.errors.nome}
              </span>
            ):null}
          </label>
          <label htmlFor="sobrenome">
            <User size={20} color="white"/>
            <input 
            type="text" 
            placeholder="Sobrenome" 
            name="sobrenome"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sobrenome}   
            />
            {formik.touched.sobrenome&&formik.errors.sobrenome?(
              <span>
                {formik.errors.sobrenome}
              </span>
            ):null}
          </label>
          <label htmlFor="cpf">
            <IdentificationCard size={20} color="white"/>
            <input 
            type="text" 
            placeholder="CPF" 
            name="cpf"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cpf} 
            />
            {formik.touched.cpf&&formik.errors.cpf?(
              <span>
                {formik.errors.cpf}
              </span>
            ):null}
          </label>
          <label htmlFor="rg">
            <IdentificationCard size={20} color="white"/>
            <input 
            type="text" 
            placeholder="RG" 
            name="rg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.rg}
            />
            {formik.touched.rg&&formik.errors.rg?(
              <span>
                {formik.errors.rg}
              </span>
            ):null}
          </label>
          <label htmlFor="status">
            <Check size={20} color="white"/>
            <input 
            type="text" 
            placeholder="Status"
            name="status" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.status}
            />
            {formik.touched.status&&formik.errors.status?(
              <span>
                {formik.errors.status}
              </span>
            ):null}
          </label>
          <label htmlFor="observacoes">
            <ChatTeardrop size={20} color="white"/>
            <textarea 
            type="text"
            placeholder="Observações"
            name="observacoes"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.observacoes}
            ></textarea>
            {formik.touched.observacoes&&formik.errors.observacoes?(
              <span>
                {formik.errors.observacoes}
              </span>
            ):null}
          </label>
          <label htmlFor="">
            <FileUploader
              onFileSelectSuccess={(file)=>setSelectedFile(file)}
              onFileSelectError={(error)=>alert(error)}
            />
          </label>

          <input type="submit" id={styles.submitData} value='Cadastrar'/>
        </form>
      </div>
    </div>
</>
  )
}


export default RentRegister
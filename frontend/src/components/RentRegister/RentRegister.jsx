import React from 'react'
import {ChatTeardrop, Check, FileSearch, IdentificationCard, User} from 'phosphor-react';
import styles from './styles.module.scss';
import { useFormik } from "formik";
import * as yup from "yup";

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
        nome:yup.string().required('Esse campo é obrigatório'),
        sobrenome:yup.string().required('Esse campo é obrigatório'),
        cpf:yup.string().required('Esse campo é obrigatório'),
        rg:yup.string().required('Esse campo é obrigatório'),
        status:yup.string().required('Esse campo é obrigatório'),
        observacoes:yup.string().required('Esse campo é obrigatório')
      }),
      
      onSubmit:(values) =>{
        alert(JSON.stringify(values,null,2));
    },
  })


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
          <label htmlFor="" id='importFile'>
            <FileSearch size={20} color="white"/><input type="file"/>
          </label>
          <input type="submit" id={styles.submitData} value='Cadastrar'/>
        </form>
      </div>
    </div>
</>
  )
}


export default RentRegister
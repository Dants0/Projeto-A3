import React, { useState } from 'react'
import { ChatTeardrop, Check, IdentificationCard, User } from 'phosphor-react';
import { useFormik } from "formik";
import * as yup from "yup";
import styles from './styles.module.scss';
import FileUploader from './FileUploader';
import axios from "axios";

const baseUrl = 'http://localhost:3001/aluguel/carros'


const RentRegister = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const formik = useFormik({
    initialValues: {
      nome: '',
      sobrenome: '',
      cpf: '',
      rg: '',
      status: '',
      observacoes: '',
    },

    validationSchema: yup.object({
      nome: yup.string().required('Esse campo é obrigatório').matches(/^[aA-zZ\s]+$/, "Só é permitido letras").min(5, 'Nome curto demais').max(100, 'Nome curto demais'),
      sobrenome: yup.string().required('Esse campo é obrigatório').matches(/^[aA-zZ\s]+$/, "Só é permitido letras").min(5, 'Sobrenome curto demais').max(100, 'Sobrenome curto demais'),
      cpf: yup.string().required('Esse campo é obrigatório').matches(/^[0-9]+$/, "Só é permitido número").min(11, 'CPF inválido').max(11, 'CPF inválido'),
      rg: yup.string().required('Esse campo é obrigatório').matches(/^[0-9]+$/, "Só é permitido número").min(9, 'RG inválido').max(9, 'RG inválido'),
      status: yup.string().required('Esse campo é obrigatório'),
      observacoes: yup.string().required('Esse campo é obrigatório'),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      const dateForm = new Date();
      const formImg = new FormData();
      formImg.append("nome", values.nome);
      formImg.append("sobrenome", values.sobrenome);
      formImg.append("cpf", values.cpf);
      formImg.append("rg", values.rg);
      formImg.append("alugado",dateForm.toLocaleString())
      formImg.append("entregue",dateForm.toLocaleString())
      formImg.append("status", values.status);
      formImg.append("observacoes", values.observacoes);
      formImg.append("imagem", selectedFile);
      axios({
        method: 'POST',
        url: baseUrl,
        data:
          formImg
        ,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
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
              {formik.touched.nome && formik.errors.nome ? (
                <span>
                  {formik.errors.nome}
                </span>
              ) : null}
            </label>
            <label htmlFor="sobrenome">
              <User size={20} color="white" />
              <input
                type="text"
                placeholder="Sobrenome"
                name="sobrenome"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sobrenome}
              />
              {formik.touched.sobrenome && formik.errors.sobrenome ? (
                <span>
                  {formik.errors.sobrenome}
                </span>
              ) : null}
            </label>
            <label htmlFor="cpf">
              <IdentificationCard size={20} color="white" />
              <input
                type="text"
                placeholder="CPF"
                name="cpf"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cpf}
              />
              {formik.touched.cpf && formik.errors.cpf ? (
                <span>
                  {formik.errors.cpf}
                </span>
              ) : null}
            </label>
            <label htmlFor="rg">
              <IdentificationCard size={20} color="white" />
              <input
                type="text"
                placeholder="RG"
                name="rg"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rg}
              />
              {formik.touched.rg && formik.errors.rg ? (
                <span>
                  {formik.errors.rg}
                </span>
              ) : null}
            </label>
            <label htmlFor="status">
              <Check size={20} color="white" />
              <input
                type="text"
                placeholder="Status"
                name="status"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.status}
              />
              {formik.touched.status && formik.errors.status ? (
                <span>
                  {formik.errors.status}
                </span>
              ) : null}
            </label>
            <label htmlFor="observacoes">
              <ChatTeardrop size={20} color="white" />
              <textarea
                type="text"
                placeholder="Observações"
                name="observacoes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.observacoes}
              ></textarea>
              {formik.touched.observacoes && formik.errors.observacoes ? (
                <span>
                  {formik.errors.observacoes}
                </span>
              ) : null}
            </label>
            <label htmlFor="">
              <FileUploader
                onFileSelectSuccess={(file) => setSelectedFile(file)}
                onFileSelectError={(error) => alert(error)}
              />
            </label>

            <input type="submit" id={styles.submitData} value='Cadastrar' />
          </form>
        </div>
      </div>
    </>
  )
}


export default RentRegister
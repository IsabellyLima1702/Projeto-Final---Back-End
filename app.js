/******************************************************************************************************
 * Objetivo: Criar API para gerenciar os alunos e os cursos da escola de informática, Lion School.
 * Data: 04/12/2024
 * Autor: Isabelly Lima
 * Versão: 1.0
 *****************************************************************************************************/



const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')
const {request} = require ('http')


const app = express()


app.use((request, response, next) =>{
    
    response.header('Acess-Control-Allow-Origin', '*')

    response.header('Acess-Control-Allow-Methods', 'GET')

    app.use(cors()) 

    next()
})

const getCursosLista = require ('./modulo/funcoes')
app.get('/v1/lion-school/cursos', cors(), async function (request, response){

    let listaCursos = getCursosLista.getCursosLista()

    if(listaCursos){
        response.status(200)
        response.json(listaCursos)
    }else{
        response.status(404)
        response.json({'status': '404', 'message': 'Não foi possível encontrar um dado'})
    }
})

const getAlunosLista = require ('./modulo/funcoes')
app.get('/v1/lion-school/alunos', cors(), async function (request, response){
    let listaAlunos = getAlunosLista.getAlunosLista()

    if(listaAlunos){
        response.status(200)
        response.json(listaAlunos)
    }else{
        response.status(404)
        response.json({'status': '404', 'message': 'Não foi possível encontrar um dado'}) 
    }
})

const getInformacoes = require ('./modulo/funcoes')
app.get('/v1/lion-school/alunos/:matricula', cors(), async function(request, response){
    let informacao = request.query.matricula

    let dados = getInformacoes.getInformacoes(informacao)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': '404', 'message': 'Não foi possível encontrar um dado'})
    }
})

const getMatriculadosLista = require ('./modulo/funcoes')
app.get('/v1/lion-school/alunos/cursos/:ds', cors(), async function(request, response){
    let nomeCurso = request.query.curso

    let dados = getMatriculadosLista.getMatriculadosLista(nomeCurso)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': '404', 'message': 'Não foi possível encontrar um dado'})
    }

})

const getStatusLista = require ('./modulo/funcoes')
app.get('/v1/lion-school/alunos/filtro?status=finalizado', cors(), async function(request, response){
    let NomeStatus = request.query.status

    let dados = getStatusLista.getStatusLista(NomeStatus)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': '404', 'message': 'Não foi possível encontrar um dado'})
    }
})

const getDisciplina = require ('./modulo/funcoes')
app.get('/v1/lion-school/alunos/filtro?curso=ds&status=aprovado', cors(), async function(request,response){
    let nomeDisciplina = request.query.disciplina

    let dados = getDisciplina.getDisciplina(nomeDisciplina)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': '404', 'message': 'Não foi possível encontrar um dado'})
    }
})

const getAno = require ('./modulo/funcoes')
app.get('v1/lion-school/alunos/filtro?curso=ds&ano-conclusao=2024', cors(), async function(request, response){
    let sigla = request.params.sigla

    let dados = getAno.getAno(sigla)

    if(dados){
        response.status(200)
        response.json(dados)
    }else{
        response.status(404)
        response.json({'status': '404', 'message': 'Não foi possível encontrar um dado'})

        let conclusao = request. params.ano

        let dados = getAno.getAno(conclusao)

        if(dados){
            response.status(200)
            response.json(dados)
        }else{
            response.status(404)
            response.json({'status': '404', 'message': 'Não foi possível encontrar um dado'})
        }
    }
})



app.listen('8080', function(){
    console.log('API funcionando e aguardando requisições...')

})
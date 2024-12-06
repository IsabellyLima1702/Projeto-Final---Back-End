var DadosAlunos = require ('./alunos.js')
var CursosTecnicos = require ('./cursos.js')

const getCursosLista = function(){
    let escolar = []
    
    CursosTecnicos.cursos.forEach(function(item){
       escolar.push(item)
        
    })
    return escolar
}


const getAlunosLista = function(){
    let escolar = []
    
    DadosAlunos.alunos.forEach(function(item){
        escolar.push(item)
        //escolar.push(item.nome)
    })
    return escolar
}

const getInformacoes = function(informacoesAluno){
    let escolar = []
    let status = true
    let informacoes = String(informacoesAluno).toUpperCase()
    DadosAlunos.alunos.forEach(function(item){
        if(String(item.matricula).toUpperCase()== informacoes){
            escolar.informacoes = item
        }
       return status
    })
    return escolar
}

const getMatriculadosLista = function(nomeCurso){
    let nome = String(nomeCurso).toUpperCase()
    let nomeA = []
    let nomeJ = {}
    let status = false

    DadosAlunos.alunos.forEach(function(itemCurso){
        DadosAlunos = itemCurso.curso
        itemCurso.curso.forEach(function(item){
            if(String(item.sigla).toUpperCase() == nome){
                let escolar = {}
                escolar.foto = itemCurso.foto
                escolar.nome = itemCurso.nome
                escolar.matricula = itemCurso.matricula
                escolar.sexo = itemCurso.sexo
                escolar.curso = itemCurso.curso

                nomeA.push(escolar)
            }
        })
        return status
    })
    nomeJ.alunos = nomeA
    nomeJ.curso = nome
    return nomeJ
}

const getStatusLista = function(NomeStatus){
    let escolar = {}
    let classificacao = String(NomeStatus).toUpperCase()
    let especificado = []
    let status = false

    DadosAlunos.alunos.forEach(function(item){
        if(String(item.status).toUpperCase() == classificacao){
            let alunos = {}

            alunos.foto = item.foto
            alunos.nome = item.nome
            alunos.matricula = item.matricula
            alunos.sexo = item.sexo
            alunos.curso = item.curso
            alunos.status = item.status

            especificado.push(alunos)
        }
        return status
    })
    escolar.alunos = especificado
    return escolar
}

const getDisciplina = function(nomeCurso, nomeDisciplina){
    let nome = String(nomeCurso).toUpperCase()
    let nomeD = String(nomeDisciplina).toUpperCase()
    let nomeA = []
    let nomeJ = {}
    let status = false

    DadosAlunos.alunos.forEach(function(itemCurso){
        DadosAlunos = itemCurso.curso
        itemCurso.curso.forEach(function(item){
            if(String(item.sigla).toUpperCase() == nome){
                let escolar = {}
                escolar.foto = itemCurso.foto
                escolar.nome = itemCurso.nome
                escolar.matricula = itemCurso.matricula
                escolar.sexo = itemCurso.sexo
                escolar.curso = itemCurso.curso

                item.disciplinas.forEach(function(itemStatus){
                    if(String(itemStatus.status).toUpperCase() == nomeD){
                        escolar.disciplina = itemStatus.nome
                        escolar.carga = itemStatus.carga
                        escolar.media = itemStatus.media
                        escolar.status = itemStatus.status

                        nomeA.push(escolar)
                    }
                })
            }
        })
        return status
    })
    nomeJ.curso = nome
    nomeJ.status = nomeD
    nomeJ.alunos = nomeA

    return nomeJ
}

const getAno = function(siglaCurso, anoConclusao){
    let nome = String(siglaCurso).toUpperCase()
    let nomeC = String(anoConclusao).toUpperCase()
    let nomeA = []
    let nomeJson = {}
    let status = false

    DadosAlunos.alunos.forEach(function(itemCurso){
        DadosAlunos = itemCurso.curso
        itemCurso.curso.forEach(function(itemAno){
            if(String(itemAno.sigla).toUpperCase() == nome){
                itemCurso.curso.forEach(function(item){
                    if(String(item.conclusao).toUpperCase() == nomeC){
                        status = true
                        let nomeJ = {}

                        nomeJ.foto = itemCurso.foto
                        nomeJ.nome = itemCurso.nome
                        nomeJ.matricula = itemCurso.matricula
                        nomeJ.sexo = itemCurso.sexo
                        nomeJ.curso = itemCurso.curso
                        nomeJ.conclusao = item.conclusao

                        nomeA.push(nomeJ)
                    }
                })
            }
        })
    })
    nomeJson.curso = nome
    nomeJson.conclusao = nomeC
    nomeJson.dados = nomeA

    if(status = true){ 
        return nomeJson
    }else{
        return false
    }
}
//console.log(getAno('ds','2024')) 
//console.log(getDisciplina('ds', 'aprovado')) 
//console.log(getStatusLista('cursando')) 
//console.log(getMatriculadosLista('ds')) 
//console.log(getInformacoes(20151001002)) 
//console.log(getAlunosLista()) 
//console.log(getCursosLista()) 

//getAno('ds','2023')

module.exports = {
    getCursosLista,
    getAlunosLista,
    getInformacoes,
    getMatriculadosLista,
    getStatusLista,
    getDisciplina,
    getAno
}








import prisma from "../src/database/database";

async function main(){
    //CRIAÇÃO DAS SELEÇÕES DA COPA 2022

    await prisma.$executeRaw`TRUNCATE TABLE countries RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE groups RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE rounds RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE matches RESTART IDENTITY CASCADE`

    await prisma.countries.upsert({where:{name:"Alemanha"},update:{},create:{name:"Alemanha",level:5, sigla:"ale"}})
    await prisma.countries.upsert({where:{name:"Arábia Saudita"},update:{},create:{name:"Arábia Saudita",level:1,sigla:"ara"}})
    await prisma.countries.upsert({where:{name:"Argentina"},update:{},create:{name:"Argentina",level:4,sigla:"arg"}})
    await prisma.countries.upsert({where:{name:"Austrália"},update:{},create:{name:"Austrália",level:2,sigla:"aus"}})
    await prisma.countries.upsert({where:{name:"Bélgica"},update:{},create:{name:"Bélgica",level:4,sigla:"bel"}})
    await prisma.countries.upsert({where:{name:"Brasil"},update:{},create:{name:"Brasil",level:5,sigla:"bra"}})
    await prisma.countries.upsert({where:{name:"Camarões"},update:{},create:{name:"Camarões",level:2,sigla:"cam"}})
    await prisma.countries.upsert({where:{name:"Canadá"},update:{},create:{name:"Canadá",level:2,sigla:"can"}})
    await prisma.countries.upsert({where:{name:"Catar"},update:{},create:{name:"Catar",level:1,sigla:"cat"}})
    await prisma.countries.upsert({where:{name:"Coreia do Sul"},update:{},create:{name:"Coreia do Sul",level:2,sigla:"cor"}})
    await prisma.countries.upsert({where:{name:"Costa Rica"},update:{},create:{name:"Costa Rica",level:2,sigla:"cos"}})
    await prisma.countries.upsert({where:{name:"Croácia"},update:{},create:{name:"Croácia",level:4,sigla:"cro"}})
    await prisma.countries.upsert({where:{name:"Dinamarca"},update:{},create:{name:"Dinamarca",level:4,sigla:"din"}})
    await prisma.countries.upsert({where:{name:"Equador"},update:{},create:{name:"Equador",level:2,sigla:"equ"}})
    await prisma.countries.upsert({where:{name:"Espanha"},update:{},create:{name:"Espanha",level:4,sigla:"esp"}})
    await prisma.countries.upsert({where:{name:"Estados Unidos"},update:{},create:{name:"Estados Unidos",level:2,sigla:"eua"}})
    await prisma.countries.upsert({where:{name:"França"},update:{},create:{name:"França",level:5,sigla:"fra"}})
    await prisma.countries.upsert({where:{name:"Gana"},update:{},create:{name:"Gana",level:2,sigla:"gan"}})
    await prisma.countries.upsert({where:{name:"Holanda"},update:{},create:{name:"Holanda",level:4,sigla:"hol"}})
    await prisma.countries.upsert({where:{name:"Inglaterra"},update:{},create:{name:"Inglaterra",level:4,sigla:"ing"}})
    await prisma.countries.upsert({where:{name:"Irã"},update:{},create:{name:"Irã",level:1,sigla:"ira"}})
    await prisma.countries.upsert({where:{name:"Japão"},update:{},create:{name:"Japão",level:3,sigla:"jap"}})
    await prisma.countries.upsert({where:{name:"Marrocos"},update:{},create:{name:"Marrocos",level:1,sigla:"mar"}})
    await prisma.countries.upsert({where:{name:"México"},update:{},create:{name:"México",level:3,sigla:"mex"}})
    await prisma.countries.upsert({where:{name:"País de Gales"},update:{},create:{name:"País de Gales",level:2,sigla:"gal"}})
    await prisma.countries.upsert({where:{name:"Polônia"},update:{},create:{name:"Polônia",level:3,sigla:"pol"}})
    await prisma.countries.upsert({where:{name:"Portugal"},update:{},create:{name:"Portugal",level:4,sigla:"por"}})
    await prisma.countries.upsert({where:{name:"Senegal"},update:{},create:{name:"Senegal",level:2,sigla:"sen"}})
    await prisma.countries.upsert({where:{name:"Sérvia"},update:{},create:{name:"Sérvia",level:3,sigla:"ser"}})
    await prisma.countries.upsert({where:{name:"Suíça"},update:{},create:{name:"Suíça",level:3,sigla:"sui"}})
    await prisma.countries.upsert({where:{name:"Tunísia"},update:{},create:{name:"Tunísia",level:2,sigla:"tun"}})
    await prisma.countries.upsert({where:{name:"Uruguai"},update:{},create:{name:"Uruguai",level:3,sigla:"uru"}})

    await prisma.groups.upsert({where:{number:1},update:{},create:{name:"Grupo A", number:1}})
    await prisma.groups.upsert({where:{number:2},update:{},create:{name:"Grupo B", number:2}})
    await prisma.groups.upsert({where:{number:3},update:{},create:{name:"Grupo C" , number:3} })
    await prisma.groups.upsert({where:{number:4},update:{},create:{name:"Grupo D", number:4}})
    await prisma.groups.upsert({where:{number:5},update:{},create:{name:"Grupo E", number:5}})
    await prisma.groups.upsert({where:{number:6},update:{},create:{name:"Grupo F", number:6}})
    await prisma.groups.upsert({where:{number:7},update:{},create:{name:"Grupo G", number:7}})
    await prisma.groups.upsert({where:{number:8},update:{},create:{name:"Grupo H", number:8}})

    await prisma.rounds.upsert({where:{id:1},update:{},create:{name:"Rodada 1", number:1}})
    await prisma.rounds.upsert({where:{id:2},update:{},create:{name:"Rodada 2", number:2}})
    await prisma.rounds.upsert({where:{id:3},update:{},create:{name:"Rodada 3", number:3}})

    //PARTIDAS
    //Group A
    await prisma.matches.upsert({where:{id:1},update:{},create:{
        roundId:1,
        day:"20/11/20022",
        groupId:1,
        timeOneId:9,
        timeTwoId:14,
        dateAndHora:new Date('2022-11-20T10:00')
    }})
    await prisma.matches.upsert({where:{id:2},update:{},create:{
        roundId:1,
        day:"21/11/20022",
        groupId:1,
        timeOneId:28,
        timeTwoId:19,
        dateAndHora:new Date('2022-11-21T10:00')
    }})
    await prisma.matches.upsert({where:{id:3},update:{},create:{
        roundId:2,
        day:"25/11/20022",
        groupId:1,
        timeOneId:9,
        timeTwoId:28,
        dateAndHora:new Date('2022-11-25T07:00')
    }})
    await prisma.matches.upsert({where:{id:4},update:{},create:{
        roundId:2,
        day:"25/11/20022",
        groupId:1,
        timeOneId:19,
        timeTwoId:14,
        dateAndHora:new Date('2022-11-25T10:00')
    }})
    await prisma.matches.upsert({where:{id:5},update:{},create:{
        roundId:3,
        day:"29/11/20022",
        groupId:1,
        timeOneId:19,
        timeTwoId:9,
        dateAndHora:new Date('2022-11-29T09:00')
    }})
    await prisma.matches.upsert({where:{id:6},update:{},create:{
        roundId:3,
        day:"29/11/20022",
        groupId:1,
        timeOneId:14,
        timeTwoId:28,
        dateAndHora:new Date('2022-11-29T09:00')
    }})

    //Grop B
    await prisma.matches.upsert({where:{id:7},update:{},create:{
        roundId:1,
        day:"21/11/20022",
        groupId:2,
        timeOneId:20,
        timeTwoId:21,
        dateAndHora:new Date('2022-11-21T07:00')
    }})
    await prisma.matches.upsert({where:{id:8},update:{},create:{
        roundId:1,
        day:"21/11/20022",
        groupId:2,
        timeOneId:16,
        timeTwoId:25,
        dateAndHora:new Date('2022-11-21T13:00')
    }})
    await prisma.matches.upsert({where:{id:9},update:{},create:{
        roundId:2,
        day:"25/11/20022",
        groupId:2,
        timeOneId:25,
        timeTwoId:21,
        dateAndHora:new Date('2022-11-25T04:00')
    }})
    await prisma.matches.upsert({where:{id:10},update:{},create:{
        roundId:2,
        day:"25/11/20022",
        groupId:2,
        timeOneId:20,
        timeTwoId:16,
        dateAndHora:new Date('2022-11-25T13:00')
    }})
    await prisma.matches.upsert({where:{id:11},update:{},create:{
        roundId:3,
        day:"29/11/20022",
        groupId:2,
        timeOneId:21,
        timeTwoId:16,
        dateAndHora:new Date('2022-11-29T13:00')
    }})
    await prisma.matches.upsert({where:{id:12},update:{},create:{
        roundId:3,
        day:"29/11/20022",
        groupId:2,
        timeOneId:25,
        timeTwoId:20,
        dateAndHora:new Date('2022-11-29T13:00')
    }})

    //Grop C
    await prisma.matches.upsert({where:{id:13},update:{},create:{
        roundId:1,
        day:"22/11/20022",
        groupId:3,
        timeOneId:3,
        timeTwoId:2,
        dateAndHora:new Date('2022-11-22T04:00')
    }})
    await prisma.matches.upsert({where:{id:14},update:{},create:{
        roundId:1,
        day:"22/11/20022",
        groupId:3,
        timeOneId:24,
        timeTwoId:26,
        dateAndHora:new Date('2022-11-22T10:00')
    }})
    await prisma.matches.upsert({where:{id:15},update:{},create:{
        roundId:2,
        day:"26/11/20022",
        groupId:3,
        timeOneId:26,
        timeTwoId:2,
        dateAndHora:new Date('2022-11-26T07:00')
    }})
    await prisma.matches.upsert({where:{id:16},update:{},create:{
        roundId:2,
        day:"26/11/20022",
        groupId:3,
        timeOneId:3,
        timeTwoId:24,
        dateAndHora:new Date('2022-11-26T13:00')
    }})
    await prisma.matches.upsert({where:{id:17},update:{},create:{
        roundId:3,
        day:"30/11/20022",
        groupId:3,
        timeOneId:26,
        timeTwoId:3,
        dateAndHora:new Date('2022-11-30T13:00')
    }})
    await prisma.matches.upsert({where:{id:18},update:{},create:{
        roundId:3,
        day:"30/11/20022",
        groupId:3,
        timeOneId:2,
        timeTwoId:24,
        dateAndHora:new Date('2022-11-30T13:00')
    }})

    //Grop D
    await prisma.matches.upsert({where:{id:19},update:{},create:{
        roundId:1,
        day:"22/11/20022",
        groupId:4,
        timeOneId:13,
        timeTwoId:31,
        dateAndHora:new Date('2022-11-22T07:00')
    }})
    await prisma.matches.upsert({where:{id:20},update:{},create:{
        roundId:1,
        day:"22/11/20022",
        groupId:4,
        timeOneId:17,
        timeTwoId:4,
        dateAndHora:new Date('2022-11-22T13:00')
    }})
    await prisma.matches.upsert({where:{id:21},update:{},create:{
        roundId:2,
        day:"26/11/20022",
        groupId:4,
        timeOneId:31,
        timeTwoId:4,
        dateAndHora:new Date('2022-11-26T04:00')
    }})
    await prisma.matches.upsert({where:{id:22},update:{},create:{
        roundId:2,
        day:"26/11/20022",
        groupId:4,
        timeOneId:17,
        timeTwoId:13,
        dateAndHora:new Date('2022-11-26T10:00')
    }})
    await prisma.matches.upsert({where:{id:23},update:{},create:{
        roundId:3,
        day:"30/11/20022",
        groupId:4,
        timeOneId:31,
        timeTwoId:17,
        dateAndHora:new Date('2022-11-30T09:00')
    }})
    await prisma.matches.upsert({where:{id:24},update:{},create:{
        roundId:3,
        day:"30/11/20022",
        groupId:4,
        timeOneId:4,
        timeTwoId:13,
        dateAndHora:new Date('2022-11-30T09:00')
    }})

    //Grop E
    await prisma.matches.upsert({where:{id:25},update:{},create:{
        roundId:1,
        day:"23/11/20022",
        groupId:5,
        timeOneId:1,
        timeTwoId:22,
        dateAndHora:new Date('2022-11-23T07:00')
    }})
    await prisma.matches.upsert({where:{id:26},update:{},create:{
        roundId:1,
        day:"23/11/20022",
        groupId:5,
        timeOneId:15,
        timeTwoId:11,
        dateAndHora:new Date('2022-11-23T10:00')
    }})
    await prisma.matches.upsert({where:{id:27},update:{},create:{
        roundId:2,
        day:"27/11/20022",
        groupId:5,
        timeOneId:22,
        timeTwoId:11,
        dateAndHora:new Date('2022-11-27T04:00')
    }})
    await prisma.matches.upsert({where:{id:28},update:{},create:{
        roundId:2,
        day:"27/11/20022",
        groupId:5,
        timeOneId:15,
        timeTwoId:1,
        dateAndHora:new Date('2022-11-27T13:00')
    }})
    await prisma.matches.upsert({where:{id:29},update:{},create:{
        roundId:3,
        day:"01/12/20022",
        groupId:5,
        timeOneId:22,
        timeTwoId:15,
        dateAndHora:new Date('2022-12-01T13:00')
    }})
    await prisma.matches.upsert({where:{id:30},update:{},create:{
        roundId:3,
        day:"01/12/20022",
        groupId:5,
        timeOneId:11,
        timeTwoId:1,
        dateAndHora:new Date('2022-12-01T13:00')
    }})

    //Grop F
    await prisma.matches.upsert({where:{id:31},update:{},create:{
        roundId:1,
        day:"23/11/20022",
        groupId:6,
        timeOneId:23,
        timeTwoId:12,
        dateAndHora:new Date('2022-11-23T04:00')
    }})
    await prisma.matches.upsert({where:{id:32},update:{},create:{
        roundId:1,
        day:"23/11/20022",
        groupId:6,
        timeOneId:5,
        timeTwoId:8,
        dateAndHora:new Date('2022-11-23T13:00')
    }})
    await prisma.matches.upsert({where:{id:33},update:{},create:{
        roundId:2,
        day:"27/11/20022",
        groupId:6,
        timeOneId:5,
        timeTwoId:23,
        dateAndHora:new Date('2022-11-27T07:00')
    }})
    await prisma.matches.upsert({where:{id:34},update:{},create:{
        roundId:2,
        day:"27/11/20022",
        groupId:6,
        timeOneId:12,
        timeTwoId:8,
        dateAndHora:new Date('2022-11-27T10:00')
    }})
    await prisma.matches.upsert({where:{id:35},update:{},create:{
        roundId:3,
        day:"01/12/20022",
        groupId:6,
        timeOneId:12,
        timeTwoId:5,
        dateAndHora:new Date('2022-12-01T09:00')
    }})
    await prisma.matches.upsert({where:{id:36},update:{},create:{
        roundId:3,
        day:"01/12/20022",
        groupId:6,
        timeOneId:8,
        timeTwoId:23,
        dateAndHora:new Date('2022-12-01T09:00')
    }})

    //Grop G
    await prisma.matches.upsert({where:{id:37},update:{},create:{
        roundId:1,
        day:"24/11/20022",
        groupId:7,
        timeOneId:30,
        timeTwoId:7,
        dateAndHora:new Date('2022-11-24T04:00')
    }})
    await prisma.matches.upsert({where:{id:38},update:{},create:{
        roundId:1,
        day:"24/11/20022",
        groupId:7,
        timeOneId:6,
        timeTwoId:29,
        dateAndHora:new Date('2022-11-24T13:00')
    }})
    await prisma.matches.upsert({where:{id:39},update:{},create:{
        roundId:2,
        day:"28/11/20022",
        groupId:7,
        timeOneId:7,
        timeTwoId:29,
        dateAndHora:new Date('2022-11-28T04:00')
    }})
    await prisma.matches.upsert({where:{id:40},update:{},create:{
        roundId:2,
        day:"28/11/20022",
        groupId:7,
        timeOneId:6,
        timeTwoId:30,
        dateAndHora:new Date('2022-11-28T10:00')
    }})
    await prisma.matches.upsert({where:{id:41},update:{},create:{
        roundId:3,
        day:"02/12/20022",
        groupId:7,
        timeOneId:7,
        timeTwoId:6,
        dateAndHora:new Date('2022-12-02T13:00')
    }})
    await prisma.matches.upsert({where:{id:42},update:{},create:{
        roundId:3,
        day:"02/12/20022",
        groupId:7,
        timeOneId:29,
        timeTwoId:30,
        dateAndHora:new Date('2022-12-02T13:00')
    }})

    //Grop H
    await prisma.matches.upsert({where:{id:43},update:{},create:{
        roundId:1,
        day:"24/11/20022",
        groupId:8,
        timeOneId:32,
        timeTwoId:10,
        dateAndHora:new Date('2022-11-24T07:00')
    }})
    await prisma.matches.upsert({where:{id:44},update:{},create:{
        roundId:1,
        day:"24/11/20022",
        groupId:8,
        timeOneId:27,
        timeTwoId:18,
        dateAndHora:new Date('2022-11-24T10:00')
    }})
    await prisma.matches.upsert({where:{id:45},update:{},create:{
        roundId:2,
        day:"28/11/20022",
        groupId:8,
        timeOneId:10,
        timeTwoId:18,
        dateAndHora:new Date('2022-11-28T07:00')
    }})
    await prisma.matches.upsert({where:{id:46},update:{},create:{
        roundId:2,
        day:"28/11/20022",
        groupId:8,
        timeOneId:27,
        timeTwoId:32,
        dateAndHora:new Date('2022-11-28T13:00')
    }})
    await prisma.matches.upsert({where:{id:47},update:{},create:{
        roundId:3,
        day:"02/12/20022",
        groupId:8,
        timeOneId:10,
        timeTwoId:27,
        dateAndHora:new Date('2022-12-02T09:00')
    }})
    await prisma.matches.upsert({where:{id:48},update:{},create:{
        roundId:3,
        day:"02/12/20022",
        groupId:8,
        timeOneId:18,
        timeTwoId:32,
        dateAndHora:new Date('2022-12-02T09:00')
    }})

}



main().catch(e=>{
    console.log(e)
    process.exit(1)
}).finally(()=>{
    prisma.$disconnect()
})
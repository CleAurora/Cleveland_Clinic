USE M_ClevelandClinic;
/* DDl */
Create database M_ClevelandClinic;

Create table Medicos(
IdMedico int identity not null primary key,
Nome varchar(255) not null,
DataNascimento date,
CRM int not null unique,
Ativo int not null foreign key references Situacao(IdSituacao)
);

Create table Situacao(
IdSituacao int identity primary key,
Nome varchar(255) not null unique
);


/* DML */

Insert into Situacao(Nome)
values ('Ativo'),('Inativo');

Insert into Medicos(Nome,DataNascimento,CRM,Ativo)
values ('Victor','01-01-2010',123456,1);

Insert into Medicos(Nome,DataNascimento,CRM,Ativo)
values ('Erik','10-12-2000',121333,1),('Helena','11-12-2000',121336,1),('Bruno','12-12-2000',121393,2)

/* DQL */

Select * from Medicos;
Select * from Situacao;

Select Medicos.*,Situacao.*
from Medicos
Inner join Situacao
on Medicos.Ativo = Situacao.IdSituacao;
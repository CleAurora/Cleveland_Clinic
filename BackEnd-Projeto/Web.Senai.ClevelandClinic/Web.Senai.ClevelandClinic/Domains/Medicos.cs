using System;
using System.Collections.Generic;

namespace Web.Senai.ClevelandClinic.Domains
{
    public partial class Medicos
    {
        public int IdMedico { get; set; }
        public string Nome { get; set; }
        public DateTime? DataNascimento { get; set; }
        public int Crm { get; set; }
        public int Ativo { get; set; }

        public virtual Situacao AtivoNavigation { get; set; }
    }
}

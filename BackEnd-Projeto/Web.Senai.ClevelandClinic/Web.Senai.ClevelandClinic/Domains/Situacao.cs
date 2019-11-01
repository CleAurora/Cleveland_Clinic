using System;
using System.Collections.Generic;

namespace Web.Senai.ClevelandClinic.Domains
{
    public partial class Situacao
    {
        public Situacao()
        {
            Medicos = new HashSet<Medicos>();
        }

        public int IdSituacao { get; set; }
        public string Nome { get; set; }

        public virtual ICollection<Medicos> Medicos { get; set; }
    }
}

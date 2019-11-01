using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Web.Senai.ClevelandClinic.Domains;

namespace Web.Senai.ClevelandClinic.Repositories
{
    public class MedicoRepository
    {
        public List<Medicos> Listar()
        {
            using(ClevelandContext ctx = new ClevelandContext())
            {
                return ctx.Medicos.ToList();
            }
        }
    }
}

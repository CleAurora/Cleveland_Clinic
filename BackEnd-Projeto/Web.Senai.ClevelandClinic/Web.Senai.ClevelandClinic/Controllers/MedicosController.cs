using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Web.Senai.ClevelandClinic.Domains;
using Web.Senai.ClevelandClinic.Repositories;

namespace Web.Senai.ClevelandClinic.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class MedicosController : ControllerBase
    {
        MedicoRepository medicoRepository = new MedicoRepository();
        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(medicoRepository.Listar());
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backRestaurante.Models;
using Microsoft.EntityFrameworkCore;
using backRestaurante.Models.ViewModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backRestaurante.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlatoController : ControllerBase
    {
        private readonly Models.MyDbContext db;

        public PlatoController(Models.MyDbContext context) //recibo el contexto
        {
            db = context;
        }
        // GET: api/<RestauranteController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listPlatos = await db.Plato.ToListAsync();
                return Ok(listPlatos);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // GET api/<RestauranteController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<RestauranteController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Plato plato)
        {
            try
            {
                db.Plato.Add(plato);
                await db.SaveChangesAsync();
                return Ok(plato);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // PUT api/<RestauranteController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Plato plato)
        {
            try
            {
                if (id != plato.Id)
                {
                    return NotFound();
                }

                db.Update(plato);
                await db.SaveChangesAsync();
                return Ok(new{ message = "El plato fue actualizado"});
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<RestauranteController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var plato = await db.Plato.FindAsync(id);
                if (plato == null)
                {
                    return NotFound();
                }

                db.Plato.Remove(plato);
                await db.SaveChangesAsync();
                return Ok(new { message = "El plato fue eliminado"});
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}

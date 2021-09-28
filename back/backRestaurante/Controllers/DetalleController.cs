using backRestaurante.Models.ViewModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backRestaurante.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DetalleController : ControllerBase
    {
        private readonly Models.MyDbContext db;

        public DetalleController(Models.MyDbContext context) //recibo el contexto
        {
            db = context;
        }
        // GET: api/<RestauranteController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listaDetalle = await db.Detalle.ToListAsync();
                return Ok(listaDetalle);
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
        public async Task<IActionResult> Post([FromBody] Detalle detalle)
        {
            try
            {
                db.Detalle.Add(detalle);
                await db.SaveChangesAsync();
                return Ok(detalle);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // PUT api/<RestauranteController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Detalle detalle)
        {
            try
            {
                if (id != detalle.Id)
                {
                    return NotFound();
                }

                db.Update(detalle);
                await db.SaveChangesAsync();
                return Ok(new { message = "La detalle fue actualizado" });
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
                var detalle = await db.Detalle.FindAsync(id);
                if (detalle == null)
                {
                    return NotFound();
                }

                db.Detalle.Remove(detalle);
                await db.SaveChangesAsync();
                return Ok(new { message = "El detalle fue eliminado" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}

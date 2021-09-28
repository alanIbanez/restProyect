using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backRestaurante.Models.ViewModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backRestaurante.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdenController : ControllerBase
    {
        private readonly Models.MyDbContext db;

        public OrdenController(Models.MyDbContext context) //recibo el contexto
        {
            db = context;
        }
        // GET: api/<RestauranteController>
       
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listOrden = await db.Orden.ToListAsync();
                return Ok(listOrden);
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
        public async Task<IActionResult> Post([FromBody] Orden orden)
        {
            try
            {
                db.Orden.Add(orden);
                await db.SaveChangesAsync();
                return Ok(orden);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        // PUT api/<RestauranteController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Orden orden)
        {
            try
            {
                if (id != orden.Id)
                {
                    return NotFound();
                }

                db.Update(orden);
                await db.SaveChangesAsync();
                return Ok(new { message = "La orden fue actualizado" });
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
                var orden = await db.Orden.FindAsync(id);
                if (orden == null)
                {
                    return NotFound();
                }

                db.Orden.Remove(orden);
                await db.SaveChangesAsync();
                return Ok(new { message = "La orden fue eliminado" });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}

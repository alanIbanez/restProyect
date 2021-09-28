using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backRestaurante.Models.ViewModel
{
    public class Orden
    {
        public int Id { get; set; }
        [Required]
        public string Fecha { get; set; }
        public string Nombre { get; set; }
        public int Total { get; set; }
    }
}

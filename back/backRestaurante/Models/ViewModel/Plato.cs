using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backRestaurante.Models.ViewModel
{
    public class Plato
    {
        
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public int Costo { get; set; }
        [Required]
        public int Estado { get; set; }

    }
}

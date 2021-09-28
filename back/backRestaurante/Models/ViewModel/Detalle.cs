using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace backRestaurante.Models.ViewModel
{
    public class Detalle
    {
        public int Id { get; set; }
        [Required]
        public int IdProducto { get; set; }
        [Required]
        public int IdOrden { get; set; }
        [Required]
        public int Cantidad { get; set; }
        public int SubTotal { get; set; }
    }
}

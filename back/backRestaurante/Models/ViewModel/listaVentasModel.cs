using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backRestaurante.Models.ViewModel
{
    public class listaVentasModel
    {
        public int Id { get; set; }
        public int IdOrden { get; set; }
        public string Producto { get; set; }
        public int Cantidad { get; set; }
        public int Total { get; set; }
    }
}

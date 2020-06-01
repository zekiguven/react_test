using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Todo
    {
        [Key]
        public int id { get; set; }
        public string task { get; set; }
        public Boolean completed { get; set; }

    }
}

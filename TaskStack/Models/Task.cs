using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TaskStack
{
    public class Task
    {
        [Key]
        public int Id { get; set; }
        public string TMName { get; set; }
        public string BriefDesc { get; set; }
        public string DueDate { get; set; }
        public bool isCompleted { get; set; }
    }
}

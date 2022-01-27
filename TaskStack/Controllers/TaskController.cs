using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskStack.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : Controller
    {
        TaskDAL db = new TaskDAL();

        public List<Task> GetTasks()
        {
            return db.GetTasks();
        }

        [HttpGet("get/{id}")]
        public Task GetTask(int id)
        {
            return db.GetTask(id);
        }

        [HttpPost("makeNew")]
        public void PostTask(Task t)
        {
            db.InsertTask(t);
        }

        [HttpDelete("delete/{id}")]
        public void DeleteTask(int id)
        {
            db.DeleteTask(id);
        }

        [HttpPut("update/{id}")]
        public void UpdateTask(int id, Task t)
        {
            Task original = db.GetTask(id);
            if (t.TMName == null || t.TMName == "")
            {
                t.TMName = original.TMName;
            }

            if (t.BriefDesc == null || t.BriefDesc == "")
            {
                t.BriefDesc = original.BriefDesc;
            }

            if (t.DueDate == null)
            {
                t.DueDate = original.DueDate;
            }

            db.UpdateTask(id, t);
        }
    }
}

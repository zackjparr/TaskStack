using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskStack.Controllers
{
    public class TaskDAL
    {
        public List<Task> GetTasks()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from tasks";
                connect.Open();
                List<Task> output = connect.Query<Task>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public Task GetTask(int id)
        {
            List<Task> output = GetTasks();
            Task match;
            try
            {
                match = output.Where(m => m.Id == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new Task();
                match.TMName = $"Task at index {id} does not exist, please try another id";
            }
            return match;
        }

        public void InsertTask(Task t)
        {
            string sql = $"insert into tasks values({0}, '{t.TMName}', '{t.BriefDesc}', '{t.DueDate}', false)";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();
            }
        }

        public void DeleteTask(int id)
        {
            string sql = $"delete from tasks where id = {id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();
            }
        }

        public void UpdateTask(int id, Task newValues)
        {
            string sql = $"update movies set title='{newValues.TMName}', genre='{newValues.BriefDesc}', runtime='{newValues.DueDate}', year={newValues.isCompleted} where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();
            }
        }
    }
}

using System.ComponentModel.DataAnnotations;

namespace BootcampAPI.Models
{
    public class AdminUser
    {
        [Key]
        public string AdminUserName { get; set; }

        public string AdminUserPassword { get; set; }

    }
}

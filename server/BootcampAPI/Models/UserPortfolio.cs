using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BootcampAPI.Models
{
    public class UserPortfolio
    {
        [Key]
        public int UserPortfolioId { get; set; }
        public int UserMoney { get; set; }
        public int UserId { get; set; }

        //public int UserPicture { get; set; }

    }
}

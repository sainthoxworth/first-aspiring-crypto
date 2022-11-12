using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BootcampAPI.Models
{
    public class Coin
    {
        [Key]
        public int CoinId { get; set; }

        public string CoinName { get; set; }

        public int CoinValue { get; set; }

    }
}

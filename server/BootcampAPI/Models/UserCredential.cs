﻿using System;
using System.ComponentModel.DataAnnotations;

namespace BootcampAPI.Models
{
    public class UserCredential
    {
        [Key]
        public int UserId { get; set; }
        //primary key Uid

        public string UserName { get; set; }

        public string UserPassword { get; set; }

    }
}

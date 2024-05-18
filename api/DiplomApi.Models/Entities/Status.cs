﻿using DiplomApi.Models.Abstract;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DiplomApi.Models.Entities;

[Table("statuses")]
public class Status : BaseEntity
{
    public string? Description { get; set; }
}

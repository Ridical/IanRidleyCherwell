using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace IR.TechTest.Models.Calculation
{
    public class VertexModel
    {
        [JsonProperty(PropertyName = "X")]
        public long XCoordinate { get; set; }

        [JsonProperty(PropertyName = "Y")]
        public long YCoordinate { get; set; }
    }
}

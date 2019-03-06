using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace IR.TechTest.Models.Calculation
{
    public class TriangleModel
    {
        [JsonProperty(PropertyName = "vertexOne")]
        public VertexModel VertexOne { get; set; }

        [JsonProperty(PropertyName = "vertexTwo")]
        public VertexModel VertexTwo { get; set; }

        [JsonProperty(PropertyName = "vertexThree")]
        public VertexModel VertexThree { get; set; }
    }
}

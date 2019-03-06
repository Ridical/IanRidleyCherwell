using System;
using System.Collections.Generic;
using System.Text;

namespace IR.TechTest.Models.Calculation
{
    public class OneBInputModel : TriangleModel
    {
        public bool IsValid()
        {
            return this.VertexOne != null && this.VertexTwo != null && this.VertexThree != null;
        }
    }
}

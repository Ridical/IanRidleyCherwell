using IR.TechTest.Models.Calculation;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace IR.TechTest.Service.UnitTest.Data
{
    public class TriangleTestData : IEnumerable<object[]>
    {
        public IEnumerator<object[]> GetEnumerator()
        {
            yield return new object[]
            {
                new TriangleModel
                {
                    VertexOne = new VertexModel
                    {
                        XCoordinate = 0,
                        YCoordinate = 10
                    },
                    VertexTwo = new VertexModel
                    {
                        XCoordinate = 0,
                        YCoordinate = 0
                    },
                    VertexThree = new VertexModel
                    {
                        XCoordinate = 10,
                        YCoordinate = 10
                        
                    }
                },
                true

            };

            yield return new object[]
            {
                new TriangleModel
                {
                    VertexOne = new VertexModel
                    {
                        XCoordinate = 10,
                        YCoordinate = 0
                    },
                    VertexTwo = new VertexModel
                    {
                        XCoordinate = 0,
                        YCoordinate = 0
                    },
                    VertexThree = new VertexModel
                    {
                        XCoordinate = 10,
                        YCoordinate = 10
                        
                    },
                },
                true


            };

            yield return new object[]
            {
                new TriangleModel
                {
                    VertexOne = new VertexModel
                    {
                        XCoordinate = 0,
                        YCoordinate = 0
                    },
                    VertexTwo = new VertexModel
                    {
                        XCoordinate = 0,
                        YCoordinate = 0
                    },
                    VertexThree = new VertexModel
                    {
                        XCoordinate = 0,
                        YCoordinate = 0
                        
                    },
                },
                false
            };

            yield return new object[]
            {
                new TriangleModel
                {
                    VertexOne = new VertexModel
                    {
                        XCoordinate = 93,
                        YCoordinate = 3242
                    },
                    VertexTwo = new VertexModel
                    {
                        XCoordinate = 234,
                        YCoordinate = 234
                    },
                    VertexThree = new VertexModel
                    {
                        XCoordinate = 56756765,
                        YCoordinate = 234
                    },
                },
                false
            };

            yield return new object[]
            {
                new TriangleModel
                {
                    VertexOne = new VertexModel
                    {
                        XCoordinate = 450,
                        YCoordinate = 41340
                    },
                    VertexTwo = new VertexModel
                    {
                        XCoordinate = 450,
                        YCoordinate = 41330
                    },
                    VertexThree = new VertexModel
                    {
                        XCoordinate = 460,
                        YCoordinate = 41340
                    },
                },
                true
            };

            yield return new object[]
            {
                new TriangleModel
                {
                    VertexOne = new VertexModel
                    {
                        XCoordinate = 450,
                        YCoordinate = 41345
                    },
                    VertexTwo = new VertexModel
                    {
                        XCoordinate = 450,
                        YCoordinate = 41335
                    },
                    VertexThree = new VertexModel
                    {
                        XCoordinate = 460,
                        YCoordinate = 41345
                    },
                },
                false
            };
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }

}


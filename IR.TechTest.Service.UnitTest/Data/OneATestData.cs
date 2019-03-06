using IR.TechTest.Models.Calculation;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace IR.TechTest.Service.UnitTest.Data
{
    public class OneATestData : IEnumerable<object[]>
    {
        public IEnumerator<object[]> GetEnumerator()
        {
            yield return new object[]
            {
                new OneAInputModel { Row = "A", Column = 2 },
                new OneAOutputModel
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
                    }
                }
            };

            yield return new object[]
            {
                new OneAInputModel { Row = "D", Column = 7 },
                new OneAOutputModel
                {
                    VertexOne = new VertexModel
                    {
                        XCoordinate = 30,
                        YCoordinate = 40
                    },
                    VertexTwo = new VertexModel
                    {
                        XCoordinate = 30,
                        YCoordinate = 30
                    },
                    VertexThree = new VertexModel
                    {
                        XCoordinate = 40,
                        YCoordinate = 40
                    }
                }
            };

            yield return new object[]
            {
                new OneAInputModel { Row = "FBZ", Column = 91 },
                new OneAOutputModel
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
                    }
                }
            };

        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}

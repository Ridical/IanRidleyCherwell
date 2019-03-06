using IR.TechTest.Models.Calculation;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace IR.TechTest.Service.UnitTest.Data
{
    public class OneBTestData : IEnumerable<object[]>
    {
        public IEnumerator<object[]> GetEnumerator()
        {
            yield return new object[]
            {
                new OneBInputModel
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
                "A1"

            };

            yield return new object[]
            {
                new OneBInputModel
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
                "A2"


            };

            yield return new object[]
            {
                new OneBInputModel
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
                "Invalid triangle data supplied"
            };

            yield return new object[]
            {
                new OneBInputModel
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
                "Invalid triangle data supplied"
            };

            yield return new object[]
            {
                new OneBInputModel
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
                "FBZ91"
            };

            yield return new object[]
            {
                new OneBInputModel
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
                "Invalid triangle data supplied"
            };
        }

        IEnumerator IEnumerable.GetEnumerator() => GetEnumerator();
    }
}

using IR.TechTest.Models.Calculation;
using IR.TechTest.Service.Interface;
using IR.TechTest.Service.UnitTest.Data;
using System;
using Xunit;

namespace IR.TechTest.Service.UnitTest
{
    public class CalculationServiceTest
    {
        private readonly ICalculationService calculationService;

        public CalculationServiceTest()
        {
            this.calculationService = new CalculationService() as ICalculationService;
        }

        [Theory]
        [InlineData('A', 1)]
        [InlineData('Z', 26)]
        [InlineData('F', 6)]
        [InlineData('M', 13)]
        [InlineData('Q', 17)]
        [InlineData('V', 22)]
        public void TestCharValues(char inputValue, int expected)
        {
            var output = this.calculationService.GetCharValue(inputValue);

            Assert.Equal(expected, output);
        }

        [Theory]
        [InlineData("A", 1)]
        [InlineData("Z", 26)]
        [InlineData("AAA", 703)]
        [InlineData("EY", 155)]
        [InlineData("AAZ", 728)]
        [InlineData("XYZ", 16900)]
        public void TestRowValues(string inputValue, int expected)
        {
            var output = this.calculationService.CalculateRowNumber(inputValue);

            Assert.Equal(expected, output);
        }

        [Theory]
        [ClassData(typeof(OneATestData))]
        public void TestOneA(OneAInputModel input, OneAOutputModel expectedOutput)
        {            
            var output = this.calculationService.CalculateOneA(input);

            Assert.Equal(expectedOutput.VertexOne.XCoordinate, output.VertexOne.XCoordinate);
            Assert.Equal(expectedOutput.VertexOne.YCoordinate, output.VertexOne.YCoordinate);
            Assert.Equal(expectedOutput.VertexTwo.XCoordinate, output.VertexTwo.XCoordinate);
            Assert.Equal(expectedOutput.VertexTwo.YCoordinate, output.VertexTwo.YCoordinate);
            Assert.Equal(expectedOutput.VertexThree.XCoordinate, output.VertexThree.XCoordinate);
            Assert.Equal(expectedOutput.VertexThree.YCoordinate, output.VertexThree.YCoordinate);
        }

        [Theory]
        [ClassData(typeof(TriangleTestData))]
        public void TestTriangleValidator(TriangleModel input, bool expectedOutput)
        {
            var output = this.calculationService.IsValidTriangle(input);

            Assert.Equal(expectedOutput, output);
        }

        [Theory]
        [ClassData(typeof(OneBTestData))]
        public void TestOneB(OneBInputModel input, string expectedOutput)
        {
            var output = this.calculationService.CalculateOneB(input);

            Assert.Equal(expectedOutput, output.Triangle);
        }
    }
}

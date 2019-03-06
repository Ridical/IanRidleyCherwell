using IR.TechTest.Models.Calculation;
using IR.TechTest.Service.Interface;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IR.TechTest.Service
{
    public class CalculationService : ICalculationService
    {
        //This is set to be the length of the triangle non-hypotenuse side
        //In this example both non-hypotenuse are the same
        private long TriangleLength => 10;

        public OneAOutputModel CalculateOneA(OneAInputModel inputModel)
        {
            var outputModel = new OneAOutputModel
            {
                Input = $"{inputModel.Row}{inputModel.Column}"
            };

            var rowNumber = this.CalculateRowNumber(inputModel.Row) - 1;

            //It is known that the length of each triangle is 10 so that can be used to find the started coord
            var xCord = (long)Math.Floor((double)(inputModel.Column - 1) / 2) * this.TriangleLength;
            var yCord = rowNumber * this.TriangleLength;


            //If the column is an odd give the points as the same format as 1b
            //If the column is an even the triangle is flipped
            //V2x, V2y and V3x, V3y are always in the same position while V1x and V1y are always the right angle
            if (inputModel.Column % 2 == 0)
            {
                //State it is an even column to help with the view on the UI
                outputModel.EvenColumn = true;

                //Add the length of the triangle where necessary
                outputModel.VertexOne = this.NewVertexModel(xCord + this.TriangleLength, yCord);
                outputModel.VertexTwo = this.NewVertexModel(xCord, yCord);
                outputModel.VertexThree = this.NewVertexModel(xCord + this.TriangleLength, yCord + this.TriangleLength);
            }
            else
            {
                //Add the length of the triangle where necessary
                outputModel.VertexOne = this.NewVertexModel(xCord, yCord + this.TriangleLength);
                outputModel.VertexTwo = this.NewVertexModel(xCord, yCord);
                outputModel.VertexThree = this.NewVertexModel(xCord + this.TriangleLength, yCord + this.TriangleLength);
            }



            return outputModel;
        }

        //Row number is calculated in the same fashion as it would be for a spreadsheet
        //Example Y -> Z -> AA -> AB
        public long CalculateRowNumber(string row)
        {
            //If only dealing with a short number just get the value
            if (row.Length == 1)
            {
                return this.GetCharValue(row[0]);
            }

            var rowList = row.ToList();

            //Loop through every letter given
            var count = rowList.Count;

            //Formula for spreadsheet is (v * 26^c-n)
            // v = value of the char i.e A = 1, z = 26
            // c = amount of items
            // n = index of the character in the string
            var total = rowList.Sum(x =>
            {
                count--;
                return this.GetCharValue(x) * Math.Pow(26, count);
            });

            return (long)total;
        }

        //Return the index in the alphabet for a character
        public int GetCharValue(char index)
        {
            return char.ToUpper(index) - 64;
        }

        public char GetChar(int value)
        {
            value = value + 65;

            return (char)value;
        }


        public OneBOutputModel CalculateOneB(OneBInputModel inputModel)
        {
            var outputModel = new OneBOutputModel();

            //Check that the triangle is valid - if not return appropiate message
            if (!this.IsValidTriangle(inputModel))
            {
                outputModel.Triangle = "Invalid triangle data supplied";
                return outputModel;
            }

            var row = this.GetRowValue(inputModel);
            var column = this.GetColumnValue(inputModel);

            outputModel.Triangle = $"{row}{column}";

            return outputModel;
        }

        public bool IsValidTriangle(TriangleModel model)
        {
            //If any of the values aren't a factor of the triangle length then they don't have correct points
            if (model.VertexOne.XCoordinate % this.TriangleLength != 0 ||
                model.VertexOne.YCoordinate % this.TriangleLength != 0 ||
                model.VertexTwo.XCoordinate % this.TriangleLength != 0 ||
                model.VertexTwo.YCoordinate % this.TriangleLength != 0 ||
                model.VertexThree.XCoordinate % this.TriangleLength != 0 ||
                model.VertexThree.YCoordinate % this.TriangleLength != 0)
            {
                return false;
            }

            //If V1x == V2x do the checks for the odd numbered
            if (model.VertexOne.XCoordinate == model.VertexTwo.XCoordinate)
            {
                //Check all positions for the odd triangles
                if (model.VertexThree.XCoordinate != model.VertexOne.XCoordinate + this.TriangleLength)
                {
                    return false;
                }

                if (model.VertexThree.YCoordinate != model.VertexOne.YCoordinate)
                {
                    return false;
                }

                if (model.VertexOne.YCoordinate != model.VertexTwo.YCoordinate + this.TriangleLength)
                {
                    return false;
                }

                return true;
            }
            else if (model.VertexOne.XCoordinate == model.VertexThree.XCoordinate)
            {
                if (model.VertexOne.XCoordinate != model.VertexTwo.XCoordinate + this.TriangleLength)
                {
                    return false;
                }

                if (model.VertexOne.YCoordinate != model.VertexTwo.YCoordinate)
                {
                    return false;
                }

                if (model.VertexThree.YCoordinate != model.VertexTwo.YCoordinate + this.TriangleLength)
                {
                    return false;
                }


                return true;
            }


            return false;
        }

        public string GetRowValue(TriangleModel model)
        {
            //V2y is always the top left hand corner
            //Divide coord against the length of the triangle
            var remainder = model.VertexThree.YCoordinate / this.TriangleLength;
            var output = string.Empty;

            //Calc until reached 0 for multiple letters
            while (remainder > 0)
            {
                //Get the value for each character
                var value = (remainder - 1) % 26;

                //We start from the right so have to add
                output = this.GetChar((int)value) + output;
                remainder = (int)((remainder - value) / 26);
            }

            return output;
        }

        public long GetColumnValue(TriangleModel model)
        {
            //Already know triangle is valid from checks

            //If V1x == V2x we know it is odd
            var addition = model.VertexOne.XCoordinate == model.VertexTwo.XCoordinate ? 1 : 2;

            //Formula is V2x / L + A
            //Where A = 1 for odd triangles and A = 2 for even triangles
            return (model.VertexTwo.XCoordinate / this.TriangleLength) * 2 + addition;
        }

        private VertexModel NewVertexModel(long x, long y)
        {
            return new VertexModel
            {
                XCoordinate = x,
                YCoordinate = y
            };
        }
    }
}

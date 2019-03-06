using IR.TechTest.Models.Calculation;
using System;

namespace IR.TechTest.Service.Interface
{
    public interface ICalculationService
    {
        OneAOutputModel CalculateOneA(OneAInputModel inputModel);

        OneBOutputModel CalculateOneB(OneBInputModel inputModel);

        long CalculateRowNumber(string row);

        int GetCharValue(char index);

        bool IsValidTriangle(TriangleModel model);
    }
}

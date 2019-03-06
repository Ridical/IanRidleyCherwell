using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IR.TechTest.Models.Calculation;
using IR.TechTest.Service.Interface;
using Microsoft.AspNetCore.Mvc;

namespace IanRidleyCherwell.Controllers
{
    public class CalculationController : Controller
    {
        private readonly ICalculationService calculationService;

        public CalculationController(ICalculationService calculationService)
        {
            this.calculationService = calculationService;
        }


        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [ProducesResponseType(200, Type = typeof(OneAOutputModel))]
        public IActionResult OneA(long column, string row)
        {
            //Create the input model from given parameters
            var inputModel = new OneAInputModel
            {
                Column = column,
                Row = row.ToUpper()
            };

            //Check that the validation on the UI layer was not avoided
            if (!inputModel.IsValid())
            {
                return this.BadRequest("Given data format is not valid");
            }

            var output = this.calculationService.CalculateOneA(inputModel);

            return this.Ok(output);
        }

        [HttpPost]
        [ProducesResponseType(200, Type = typeof(OneBOutputModel))]
        public IActionResult OneB([FromBody]OneBInputModel inputModel)
        {
            //Check the valid
            if (!inputModel.IsValid())
            {
                return this.BadRequest("Given data format is not valid");
            }

            var output = this.calculationService.CalculateOneB(inputModel);

            return this.Ok(output);
        }
    }
}